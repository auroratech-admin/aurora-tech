// Páginas de servicio (/servicios/<slug>/). Contenido veraz: describe cómo trabajamos,
// sin clientes, cifras ni casos que no podamos sustentar.

export type Service = {
  slug: string
  name: string
  // Título para buscadores (<title>) y descripción (meta description, ~150 caracteres)
  seoTitle: string
  seoDescription: string
  headline: string
  lead: string
  includes: { title: string; text: string }[]
  forWhom: string[]
  deliverables: string[]
  faqs: { q: string; a: string }[]
}

// Etapas comunes: el orden es real y es información para el cliente.
export const process = [
  { title: 'Análisis', text: 'Entendemos el proceso, los usuarios y las restricciones. Acordamos alcance, prioridades y criterios de aceptación.' },
  { title: 'Propuesta', text: 'Enviamos una propuesta o cotización formal con alcance, cronograma por entregables y condiciones.' },
  { title: 'Desarrollo', text: 'Trabajamos en iteraciones cortas con demostraciones periódicas para validar avances contigo.' },
  { title: 'Pruebas', text: 'Pruebas funcionales y automatizadas antes de cada entrega, con evidencia de los resultados.' },
  { title: 'Puesta en producción', text: 'Despliegue, capacitación a usuarios y entrega de documentación técnica y de usuario.' },
  { title: 'Soporte', text: 'Garantía, corrección de incidencias y mantenimiento evolutivo según lo acordado.' },
]

export const services: Service[] = [
  {
    slug: 'desarrollo-de-software-a-medida',
    name: 'Desarrollo de software a medida',
    seoTitle: 'Desarrollo de software a medida en Lima',
    seoDescription:
      'Desarrollo de software a medida en Lima: sistemas empresariales, APIs e integraciones para empresas y entidades públicas del Perú. Cotiza tu proyecto.',
    headline: 'Software a medida para tus procesos',
    lead: 'Construimos sistemas que se adaptan a la forma en que trabaja tu organización, en lugar de obligarla a adaptarse a un producto genérico. Desde un módulo puntual hasta un sistema empresarial completo, con documentación y transferencia de conocimiento.',
    includes: [
      { title: 'Sistemas empresariales', text: 'Gestión de inventarios, ventas, compras, expedientes, trámites, recursos humanos y otros procesos internos.' },
      { title: 'APIs e integraciones', text: 'Conexión entre sistemas existentes, servicios de terceros, pasarelas de pago y plataformas del Estado.' },
      { title: 'Modernización de sistemas', text: 'Migración de sistemas antiguos u hojas de cálculo a aplicaciones web seguras y mantenibles.' },
      { title: 'Automatización de procesos', text: 'Reportes, notificaciones y flujos que hoy se hacen a mano y consumen horas de trabajo.' },
    ],
    forWhom: [
      'Empresas que gestionan procesos clave en hojas de cálculo o correos.',
      'Entidades públicas que necesitan un sistema o módulo para un área usuaria.',
      'Organizaciones con sistemas antiguos que ya no pueden mantener.',
    ],
    deliverables: [
      'Código fuente y derechos de uso según lo pactado en el contrato.',
      'Documentación técnica (arquitectura, base de datos, despliegue).',
      'Manual de usuario y capacitación.',
      'Actas de conformidad por entregable.',
    ],
    faqs: [
      { q: '¿Cuánto cuesta desarrollar un software a medida?', a: 'Depende del alcance, el número de módulos y las integraciones. Después de una reunión de análisis enviamos una cotización formal con alcance, cronograma y precio cerrado por entregables.' },
      { q: '¿De quién es el código fuente?', a: 'Lo definimos por escrito en el contrato. Podemos ceder la titularidad del código o licenciar su uso, según lo que necesite tu organización.' },
      { q: '¿Trabajan con entidades públicas?', a: 'Sí. Estamos inscritos en el RNP en Bienes y Servicios y elaboramos cotizaciones alineadas a los términos de referencia.' },
      { q: '¿Qué pasa después de la entrega?', a: 'Incluimos un periodo de garantía para corregir incidencias y ofrecemos planes de mantenimiento y soporte.' },
    ],
  },
  {
    slug: 'desarrollo-web',
    name: 'Desarrollo web y aplicaciones móviles',
    seoTitle: 'Desarrollo de páginas web y apps para empresas en Lima',
    seoDescription:
      'Desarrollo de páginas web, portales y aplicaciones móviles para empresas en Lima: diseño UX/UI, comercio electrónico y pagos en línea. Cotiza tu proyecto.',
    headline: 'Webs y aplicaciones que generan resultados',
    lead: 'Diseñamos y desarrollamos sitios web corporativos, portales, plataformas de comercio electrónico y aplicaciones móviles. Rápidos, seguros, adaptados a celular y preparados para aparecer en Google.',
    includes: [
      { title: 'Sitios web corporativos', text: 'Webs institucionales con formulario de contacto, WhatsApp, política de privacidad y Libro de Reclamaciones virtual.' },
      { title: 'Comercio electrónico', text: 'Tiendas en línea con catálogo, carrito, pagos con tarjeta y medios locales, y gestión de pedidos.' },
      { title: 'Portales y plataformas', text: 'Intranets, portales de clientes, sistemas de reservas y plataformas con acceso por usuario.' },
      { title: 'Aplicaciones móviles', text: 'Apps para Android e iOS conectadas a tus sistemas, con diseño UX/UI centrado en el usuario.' },
    ],
    forWhom: [
      'Empresas que necesitan una web profesional para conseguir clientes.',
      'Negocios que quieren vender en línea.',
      'Organizaciones que necesitan un portal o app para sus clientes o trabajadores.',
    ],
    deliverables: [
      'Diseño de interfaces aprobado antes del desarrollo.',
      'Sitio o aplicación publicada en tu dominio o tiendas de aplicaciones.',
      'Configuración básica de SEO (títulos, sitemap, Search Console).',
      'Capacitación para actualizar contenidos.',
    ],
    faqs: [
      { q: '¿La web cumple con la normativa peruana?', a: 'Sí. Incluimos política de privacidad conforme a la Ley N.° 29733 y Libro de Reclamaciones virtual, como exige el Código de Protección y Defensa del Consumidor.' },
      { q: '¿Puedo actualizar el contenido yo mismo?', a: 'Sí. Según el proyecto, configuramos un panel de administración o te capacitamos para hacer los cambios frecuentes.' },
      { q: '¿Se encargan del hosting y el dominio?', a: 'Podemos asesorarte en la contratación y configurar el despliegue, el certificado SSL y los correos corporativos.' },
      { q: '¿Cuánto demora una web corporativa?', a: 'Una web corporativa suele tomar pocas semanas desde que tenemos los contenidos. Te damos un cronograma exacto en la cotización.' },
    ],
  },
  {
    slug: 'qa-automatizacion-de-pruebas',
    name: 'QA y automatización de pruebas',
    seoTitle: 'QA y automatización de pruebas de software en Perú',
    seoDescription:
      'Servicios de QA en Perú: pruebas funcionales, automatización de pruebas, pruebas de regresión e integración continua (CI/CD) para software y aplicaciones web.',
    headline: 'Calidad de software medible',
    lead: 'Encontramos los errores antes que tus usuarios. Diseñamos y ejecutamos pruebas funcionales y automatizadas, y las integramos en tu flujo de desarrollo para que cada versión salga con evidencia de calidad.',
    includes: [
      { title: 'Pruebas funcionales', text: 'Casos de prueba basados en requerimientos, ejecución manual y reporte de incidencias con evidencia.' },
      { title: 'Automatización de pruebas', text: 'Pruebas automatizadas de interfaz web y de APIs que se ejecutan en cada cambio.' },
      { title: 'Pruebas de regresión', text: 'Suites que verifican que lo que ya funcionaba siga funcionando después de cada versión.' },
      { title: 'Integración y despliegue continuo', text: 'Pipelines que compilan, prueban y despliegan de forma automática y repetible.' },
    ],
    forWhom: [
      'Equipos de desarrollo que publican versiones con errores recurrentes.',
      'Entidades que reciben software de terceros y necesitan verificarlo antes de dar conformidad.',
      'Empresas que quieren acelerar sus entregas sin perder calidad.',
    ],
    deliverables: [
      'Plan de pruebas y matriz de casos de prueba.',
      'Scripts de automatización en tu repositorio.',
      'Reportes de ejecución e incidencias con evidencias.',
      'Pipeline de integración continua configurado.',
    ],
    faqs: [
      { q: '¿Pueden probar un software desarrollado por otra empresa?', a: 'Sí. Es útil para verificar entregables antes de otorgar la conformidad de un servicio o contrato.' },
      { q: '¿Qué herramientas usan?', a: 'Elegimos según tu tecnología. Trabajamos con herramientas de automatización web y de APIs de código abierto, integradas a tu repositorio.' },
      { q: '¿Las pruebas automatizadas reemplazan a las manuales?', a: 'No del todo. Automatizamos lo repetitivo y crítico, y mantenemos pruebas exploratorias para lo nuevo.' },
    ],
  },
  {
    slug: 'mantenimiento-y-soporte-de-sistemas',
    name: 'Mantenimiento y soporte de sistemas',
    seoTitle: 'Mantenimiento y soporte de sistemas y software en Lima',
    seoDescription:
      'Mantenimiento correctivo, evolutivo y soporte de sistemas y aplicaciones web en Lima, para empresas y entidades públicas. Atención por niveles de servicio.',
    headline: 'Tus sistemas, funcionando y al día',
    lead: 'Nos hacemos cargo del mantenimiento de sistemas existentes, aunque no los hayamos desarrollado nosotros: corregimos incidencias, implementamos mejoras y mantenemos la plataforma actualizada y segura.',
    includes: [
      { title: 'Mantenimiento correctivo', text: 'Diagnóstico y corrección de errores con tiempos de atención acordados.' },
      { title: 'Mantenimiento evolutivo', text: 'Nuevas funcionalidades, reportes y ajustes a cambios normativos o del negocio.' },
      { title: 'Actualización y seguridad', text: 'Actualización de dependencias, servidores y certificados; copias de respaldo.' },
      { title: 'Soporte a usuarios', text: 'Atención de consultas y capacitación a nuevos usuarios del sistema.' },
    ],
    forWhom: [
      'Organizaciones cuyo proveedor original ya no da soporte.',
      'Entidades públicas que contratan el mantenimiento anual de sus sistemas.',
      'Empresas sin un equipo de TI propio.',
    ],
    deliverables: [
      'Diagnóstico inicial del sistema y plan de mantenimiento.',
      'Atención de incidencias según niveles de servicio acordados.',
      'Informe mensual de atenciones y cambios realizados.',
      'Documentación actualizada del sistema.',
    ],
    faqs: [
      { q: '¿Pueden mantener un sistema que no desarrollaron?', a: 'Sí. Empezamos con un diagnóstico del código, la base de datos y la infraestructura para estimar el esfuerzo y los riesgos.' },
      { q: '¿Cómo se contrata el soporte?', a: 'Por bolsa de horas, por plan mensual o por servicio con entregables, según lo que necesite tu organización.' },
      { q: '¿Atienden servicios de mantenimiento para el Estado?', a: 'Sí. Cotizamos conforme a los términos de referencia y emitimos informes que sirven de sustento para la conformidad.' },
    ],
  },
  {
    slug: 'ciberseguridad',
    name: 'Ciberseguridad y auditoría de sistemas',
    seoTitle: 'Ciberseguridad y auditoría de sistemas en Lima',
    seoDescription:
      'Auditoría de sistemas, análisis de vulnerabilidades y protección de la información para empresas y entidades públicas en Lima. Informes con plan de remediación.',
    headline: 'Conoce tus riesgos antes que un atacante',
    lead: 'Evaluamos la seguridad de tus aplicaciones e infraestructura, identificamos vulnerabilidades y te entregamos un plan de remediación priorizado, en lenguaje claro para la gerencia y detallado para el equipo técnico.',
    includes: [
      { title: 'Análisis de vulnerabilidades', text: 'Revisión de aplicaciones web, servidores y configuraciones frente a las vulnerabilidades más comunes.' },
      { title: 'Auditoría de sistemas', text: 'Evaluación de controles de acceso, respaldo, registro de eventos y gestión de cambios.' },
      { title: 'Protección de datos personales', text: 'Revisión de medidas de seguridad vinculadas a la Ley N.° 29733 y su Reglamento.' },
      { title: 'Remediación', text: 'Acompañamiento para corregir los hallazgos y verificación posterior.' },
    ],
    forWhom: [
      'Empresas que manejan datos de clientes o pagos en línea.',
      'Entidades públicas que requieren evaluar la seguridad de sus sistemas.',
      'Organizaciones que van a lanzar una nueva aplicación.',
    ],
    deliverables: [
      'Informe ejecutivo para la gerencia.',
      'Informe técnico con hallazgos, evidencias y nivel de riesgo.',
      'Plan de remediación priorizado.',
      'Verificación de las correcciones.',
    ],
    faqs: [
      { q: '¿Las pruebas afectan a mis sistemas en producción?', a: 'Acordamos por escrito el alcance, las fechas y los límites de las pruebas. Las pruebas intrusivas se realizan solo con autorización expresa y, de preferencia, en ambientes de prueba.' },
      { q: '¿La información de los hallazgos es confidencial?', a: 'Sí. Firmamos un acuerdo de confidencialidad y entregamos los informes solo a los contactos autorizados.' },
      { q: '¿Cada cuánto conviene hacer una evaluación?', a: 'Como mínimo una vez al año y siempre antes de lanzar un sistema nuevo o después de cambios importantes.' },
    ],
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
