import SectionHeader from '@/components/section-header'
import { services } from '@/lib/services'

// Resumen para la portada; cada servicio enlaza a su página. Alineado con el objeto social.
const summaries: Record<string, string> = {
  'desarrollo-de-software-a-medida': 'Sistemas empresariales, APIs e integraciones diseñados para tus procesos, con documentación y transferencia.',
  'desarrollo-web': 'Sitios corporativos, portales, comercio electrónico y apps móviles con diseño UX/UI.',
  'qa-automatizacion-de-pruebas': 'Pruebas funcionales y automatizadas, aseguramiento de calidad e integración y despliegue continuo.',
  'mantenimiento-y-soporte-de-sistemas': 'Mantenimiento correctivo y evolutivo, actualizaciones y soporte a usuarios, aunque no hayamos desarrollado el sistema.',
  ciberseguridad: 'Auditoría de sistemas, análisis de vulnerabilidades y protección de la información.',
}

const Servicios = () => (
  <section id="servicios" className="bg-paper py-20 sm:py-28">
    <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
      <SectionHeader
        eyebrow="Servicios"
        title="Tecnología con criterio de negocio"
        description="Acompañamos el ciclo completo: análisis, desarrollo, pruebas, puesta en producción y soporte."
      />

      <div className="grid gap-x-10 sm:grid-cols-2">
        {services.map((s) => (
          <a key={s.slug} href={`/servicios/${s.slug}/`} className="group border-t border-rule py-6">
            <h3 className="text-base font-semibold text-ink group-hover:text-terracota">
              {s.name} <span aria-hidden="true">→</span>
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-body">{summaries[s.slug]}</p>
          </a>
        ))}
        <article className="border-t border-rule py-6">
          <h3 className="text-base font-semibold text-ink">Cloud, datos e IA</h3>
          <p className="mt-2 text-sm leading-relaxed text-body">
            Infraestructura en la nube, redes, tableros de gestión y automatización con inteligencia artificial.
          </p>
        </article>
      </div>
    </div>
  </section>
)

export default Servicios
