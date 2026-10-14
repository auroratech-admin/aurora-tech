<?php
// Libro de Reclamaciones virtual (Código de Protección y Defensa del Consumidor, Ley 29571,
// y su Reglamento, D.S. 011-2011-PCM y modificatorias).
// Asigna un número correlativo, guarda la hoja y envía copia al proveedor y al consumidor.
require __DIR__ . '/lib.php';

$data = require_post();

$h = [
    'nombre' => field($data, 'nombre', 160),
    'tipoDoc' => field($data, 'tipoDoc', 20),
    'numDoc' => field($data, 'numDoc', 20),
    'domicilio' => field($data, 'domicilio', 250),
    'telefono' => field($data, 'telefono', 40),
    'email' => field($data, 'email', 160),
    'menor' => ($data['menor'] ?? false) === true,
    'apoderado' => field($data, 'apoderado', 160),
    'tipoBien' => field($data, 'tipoBien', 20),
    'monto' => field($data, 'monto', 20),
    'descripcionBien' => text_field($data, 'descripcionBien', 1000),
    'tipo' => field($data, 'tipo', 20),
    'detalle' => text_field($data, 'detalle', 4000),
    'pedido' => text_field($data, 'pedido', 2000),
];

$errores = [];
foreach (['nombre', 'numDoc', 'domicilio', 'descripcionBien', 'detalle', 'pedido'] as $k) {
    if ($h[$k] === '') {
        $errores[] = $k;
    }
}
if (!valid_email($h['email'])) {
    $errores[] = 'email';
}
if (!in_array($h['tipoDoc'], ['DNI', 'CE', 'Pasaporte', 'RUC'], true)) {
    $errores[] = 'tipoDoc';
}
if (!in_array($h['tipoBien'], ['Producto', 'Servicio'], true)) {
    $errores[] = 'tipoBien';
}
if (!in_array($h['tipo'], ['Reclamo', 'Queja'], true)) {
    $errores[] = 'tipo';
}
if ($h['menor'] && $h['apoderado'] === '') {
    $errores[] = 'apoderado';
}
if ($errores) {
    respond(422, ['ok' => false, 'error' => 'Revisa los campos obligatorios.', 'campos' => $errores]);
}

// Correlativo anual con bloqueo, para que dos hojas simultáneas no compartan número.
ensure_data_dir();
$anio = date('Y');
$fp = fopen(DATA_DIR . "/correlativo-$anio.txt", 'c+');
if (!$fp || !flock($fp, LOCK_EX)) {
    respond(500, ['ok' => false, 'error' => 'No pudimos registrar tu hoja. Escríbenos a ' . SITE_EMAIL . '.']);
}
$n = (int) stream_get_contents($fp) + 1;
ftruncate($fp, 0);
rewind($fp);
fwrite($fp, (string) $n);
fflush($fp);

$numero = sprintf('%06d-%s', $n, $anio);
$fecha = date('d/m/Y H:i');
$registro = ['numero' => $numero, 'fecha' => date('c'), 'ip' => $_SERVER['REMOTE_ADDR'] ?? ''] + $h;
file_put_contents(DATA_DIR . "/reclamos-$anio.jsonl", json_encode($registro, JSON_UNESCAPED_UNICODE) . "\n", FILE_APPEND | LOCK_EX);
flock($fp, LOCK_UN);
fclose($fp);

$menor = $h['menor'] ? "Sí. Padre, madre o apoderado: {$h['apoderado']}" : 'No';
$monto = $h['monto'] !== '' ? 'S/ ' . $h['monto'] : '—';
$legalName = SITE_LEGAL_NAME;
$ruc = SITE_RUC;
$address = SITE_ADDRESS;

$hoja = <<<TXT
LIBRO DE RECLAMACIONES — HOJA DE RECLAMACIÓN N.° $numero
Fecha: $fecha

PROVEEDOR
$legalName · RUC $ruc
$address

1. IDENTIFICACIÓN DEL CONSUMIDOR RECLAMANTE
Nombre: {$h['nombre']}
Documento: {$h['tipoDoc']} {$h['numDoc']}
Domicilio: {$h['domicilio']}
Teléfono: {$h['telefono']}
Correo: {$h['email']}
Menor de edad: $menor

2. IDENTIFICACIÓN DEL BIEN CONTRATADO
Tipo: {$h['tipoBien']}
Monto reclamado: $monto
Descripción: {$h['descripcionBien']}

3. DETALLE DE LA RECLAMACIÓN Y PEDIDO DEL CONSUMIDOR
Tipo: {$h['tipo']}
Detalle: {$h['detalle']}
Pedido: {$h['pedido']}

4. OBSERVACIONES Y ACCIONES ADOPTADAS POR EL PROVEEDOR
(Pendiente. Se comunicará al correo indicado.)

RECLAMO: disconformidad relacionada a los productos o servicios.
QUEJA: disconformidad no relacionada a los productos o servicios, o malestar o descontento respecto a la atención al público.

La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el INDECOPI.
El proveedor deberá dar respuesta al reclamo o queja en un plazo no mayor a quince (15) días hábiles improrrogables.
TXT;

send_mail(SITE_EMAIL, "Libro de Reclamaciones: {$h['tipo']} N.° $numero", $hoja, $h['email']);
send_mail($h['email'], "Constancia de tu hoja de reclamación N.° $numero — $legalName", $hoja, SITE_EMAIL);

respond(200, ['ok' => true, 'numero' => $numero, 'fecha' => $fecha]);
