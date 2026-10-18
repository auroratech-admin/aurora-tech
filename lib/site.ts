// Datos de la empresa usados en toda la web. Solo datos reales y verificables:
// lo que se publique aquí debe coincidir con lo declarado en el SEACE.
// Los campos en null se ocultan en la web hasta completarlos.

export const site = {
  name: 'Aurora Tech',
  legalName: 'Aurora Tech S.A.C.',
  url: 'https://aurora-tech.com.pe',
  ruc: '20615864804',
  address: 'Cal. Verástegui 160, Zona C, San Juan de Miraflores, Lima, Perú',
  // Ubicación pública (portada y pie). El domicilio fiscal completo va solo en contacto y páginas legales.
  district: 'Lima, Perú',
  representative: 'Renato Cabezas Antezana',
  foundedYear: 2026,
  email: 'gerencia@aurora-tech.com.pe',
  phoneDisplay: '+51 998 429 841',
  // Formato internacional sin "+" ni espacios, para wa.me
  whatsapp: '51998429841',
  linkedin: null as string | null,
  // Código de inscripción del banco de datos ante la ANPD (Ley 29733). PENDIENTE.
  anpdRegistro: null as string | null,
}

export const navItems = [
  { id: 'servicios', label: 'Servicios' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'estado', label: 'Sector público' },
  { id: 'contacto', label: 'Contacto' },
]

export const legalLinks = [
  { href: '/privacidad/', label: 'Política de privacidad' },
  { href: '/terminos/', label: 'Términos de uso' },
  { href: '/libro-de-reclamaciones/', label: 'Libro de Reclamaciones' },
]

export function whatsappUrl(text = 'Hola Aurora Tech, quiero cotizar un proyecto.') {
  return site.whatsapp ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}` : null
}
