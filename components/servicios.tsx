import SectionHeader from '@/components/section-header'

// Alineado con el objeto social (art. 2 del estatuto).
const services = [
  {
    title: 'Software a medida',
    description: 'Sistemas empresariales, APIs e integraciones diseñados para tus procesos, con documentación y transferencia.',
  },
  {
    title: 'Aplicaciones web y móviles',
    description: 'Portales, plataformas y apps con diseño UX/UI, comercio electrónico e integración de pagos.',
  },
  {
    title: 'QA y automatización',
    description: 'Pruebas funcionales y automatizadas, aseguramiento de calidad e integración y despliegue continuo.',
  },
  {
    title: 'Cloud e infraestructura',
    description: 'Migración y administración en la nube, servidores, redes de datos y conectividad.',
  },
  {
    title: 'Ciberseguridad',
    description: 'Auditoría de sistemas, análisis de vulnerabilidades y protección de la información.',
  },
  {
    title: 'Datos, BI e IA',
    description: 'Tableros de gestión, automatización de procesos y soluciones con inteligencia artificial.',
  },
]

const Servicios = () => (
  <section id="servicios" className="bg-paper py-20 sm:py-28">
    <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
      <SectionHeader
        eyebrow="Servicios"
        title="Tecnología con criterio de negocio"
        description="Acompañamos el ciclo completo: análisis, desarrollo, pruebas, puesta en producción y soporte."
      />

      <div className="grid gap-x-10 sm:grid-cols-2">
        {services.map(({ title, description }) => (
          <article key={title} className="border-t border-rule py-6">
            <h3 className="text-base font-semibold text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">{description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Servicios
