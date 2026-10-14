<?php
// Formulario de contacto: envía la consulta a gerencia@aurora-tech.com.pe.
require __DIR__ . '/lib.php';

$data = require_post();

$nombre = field($data, 'nombre', 120);
$empresa = field($data, 'empresa', 160);
$email = field($data, 'email', 160);
$telefono = field($data, 'telefono', 40);
$servicio = field($data, 'servicio', 80);
$mensaje = text_field($data, 'mensaje', 3000);
$consentimiento = ($data['consentimiento'] ?? false) === true;

if ($nombre === '' || $empresa === '' || $mensaje === '' || !valid_email($email)) {
    respond(422, ['ok' => false, 'error' => 'Completa nombre, empresa, un correo válido y el mensaje.']);
}
if (!$consentimiento) {
    respond(422, ['ok' => false, 'error' => 'Necesitamos tu autorización para tratar tus datos y responderte.']);
}

$fecha = date('d/m/Y H:i');
$body = <<<TXT
Nueva consulta desde aurora-tech.com.pe ($fecha)

Nombre: $nombre
Empresa / entidad: $empresa
Correo: $email
Teléfono: $telefono
Servicio de interés: $servicio

Mensaje:
$mensaje

---
El remitente autorizó el tratamiento de sus datos para atender esta consulta (Ley N.° 29733).
Responde directamente a este correo para contestarle.
TXT;

if (!send_mail(SITE_EMAIL, "Consulta web: $servicio — $empresa", $body, $email)) {
    respond(500, ['ok' => false, 'error' => 'No pudimos enviar tu mensaje. Escríbenos a ' . SITE_EMAIL . '.']);
}

respond(200, ['ok' => true]);
