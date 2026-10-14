<?php
// Utilidades compartidas por los endpoints del sitio (SiteGround, PHP 8).
// Acceso directo bloqueado por .htaccess.

const SITE_EMAIL = 'gerencia@aurora-tech.com.pe';
const SITE_FROM = 'no-reply@aurora-tech.com.pe';
const SITE_LEGAL_NAME = 'Aurora Tech S.A.C.';
const SITE_RUC = '20615864804';
const SITE_ADDRESS = 'Cal. Verástegui 160, Zona C, San Juan de Miraflores, Lima, Perú';
const DATA_DIR = __DIR__ . '/data';

date_default_timezone_set('America/Lima');
mb_internal_encoding('UTF-8');

function respond(int $status, array $body): never
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

function require_post(): array
{
    if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
        respond(405, ['ok' => false, 'error' => 'Método no permitido.']);
    }
    $raw = file_get_contents('php://input');
    $data = json_decode($raw ?: '', true);
    if (!is_array($data)) {
        respond(400, ['ok' => false, 'error' => 'Solicitud inválida.']);
    }
    // Trampa para bots: campo oculto que una persona nunca llena.
    if (!empty($data['website'])) {
        respond(200, ['ok' => true]);
    }
    return $data;
}

/** Texto de una línea: sin saltos ni caracteres de control, recortado. */
function field(array $data, string $key, int $max = 200): string
{
    $value = is_scalar($data[$key] ?? null) ? (string) $data[$key] : '';
    $value = preg_replace('/[\x00-\x1F\x7F]+/u', ' ', $value) ?? '';
    return mb_substr(trim($value), 0, $max);
}

/** Texto largo: conserva saltos de línea. */
function text_field(array $data, string $key, int $max = 3000): string
{
    $value = is_scalar($data[$key] ?? null) ? (string) $data[$key] : '';
    $value = str_replace(["\r\n", "\r"], "\n", $value);
    $value = preg_replace('/[\x00-\x09\x0B-\x1F\x7F]+/u', ' ', $value) ?? '';
    return mb_substr(trim($value), 0, $max);
}

function valid_email(string $email): bool
{
    return (bool) filter_var($email, FILTER_VALIDATE_EMAIL);
}

function send_mail(string $to, string $subject, string $body, ?string $replyTo = null): bool
{
    $headers = [
        'From: ' . mb_encode_mimeheader('Aurora Tech (web)') . ' <' . SITE_FROM . '>',
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
    ];
    if ($replyTo && valid_email($replyTo)) {
        $headers[] = 'Reply-To: ' . $replyTo;
    }
    return mail($to, mb_encode_mimeheader($subject), $body, implode("\r\n", $headers), '-f' . SITE_FROM);
}

function ensure_data_dir(): void
{
    if (!is_dir(DATA_DIR)) {
        mkdir(DATA_DIR, 0750, true);
    }
}
