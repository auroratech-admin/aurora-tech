import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CtaBand from '@/components/cta-band'
import { services } from '@/lib/services'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Proveedor de software y servicios de TI para el Estado',
  description:
    'Proveedor del Estado peruano con RNP vigente en Bienes y Servicios: desarrollo, mantenimiento y soporte de sistemas para entidades públicas. Cotizaciones según TDR.',
  alternates: { canonical: '/sector-publico/' },
}

const credentials = [
  { label: 'Razón social', value: site.legalName },
  { label: 'RUC', value: site.ruc },
  { label: 'RNP (OECE)', value: 'Vigente · Bienes y Servicios' },
  { label: 'Sanciones / penalidades', value: 'Ninguna' },
  { label: 'Condición', value: 'Micro empresa · REMYPE' },
  { label: 'Actividad (CIIU)', value: '6201 · Programación informática' },
]

const steps = [
  { title: 'Envíanos el requerimiento', text: 'Términos de referencia, especificaciones técnicas o una descripción de la necesidad del área usuaria.' },
  { title: 'Absolvemos dudas', text: 'Si hace falta, coordinamos con el área usuaria para precisar alcance, entregables y plazos.' },
  { title: 'Cotización formal', text: 'Enviamos la cotización firmada, con alcance, plazo, forma de pago y la documentación del proveedor.' },
  { title: 'Ejecución y conformidad', text: 'Trabajamos por entregables, con informes y actas que sustentan la conformidad del servicio.' },
]

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs font-semibold tracking-[0.14em] text-terracota uppercase">{children}</p>
)

export default function SectorPublicoPage() {
  return (
    <>
      <Navbar />
      <main className="bg-paper">
        <header className="bg-navy pt-28 pb-14 text-white sm:pt-36 sm:pb-20">
          <div className="mx-auto grid max-w-6xl items-end gap-12 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="text-xs font-semibold tracking-[0.14em] text-terracota-300 uppercase">Sector público</p>
              <h1 className="mt-3 font-serif text-4xl leading-[1.1] font-medium text-balance sm:text-5xl">
                Proveedor de software y servicios de TI para el Estado
              </h1>
              <p className="mt-6 max-w-[58ch] text-base text-pretty text-mist sm:text-lg">
                Desarrollamos, mantenemos y damos soporte a sistemas de entidades públicas, cumpliendo la normativa de
                contrataciones del Estado. Atendemos requerimientos de áreas usuarias y estudios de mercado.
              </p>
            </div>
            <dl className="rounded-[3px] border border-white/15 bg-white/5 p-6">
              {credentials.map((c) => (
                <div key={c.label} className="flex justify-between gap-4 border-t border-white/10 py-2.5 text-sm first:border-t-0">
                  <dt className="text-mist">{c.label}</dt>
                  <dd className="text-right font-medium">{c.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Label>Cómo atendemos un requerimiento</Label>
            <h2 className="mt-3 font-serif text-3xl leading-tight font-medium text-ink">De los TDR a la conformidad</h2>
            <ol className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="border-t border-rule py-6">
                  <span className="font-serif text-2xl text-terracota tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-2 text-base font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-y border-rule bg-white py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <div>
              <Label>Servicios para entidades</Label>
              <h2 className="mt-3 font-serif text-3xl leading-tight font-medium text-balance text-ink">
                Qué podemos atender
              </h2>
            </div>
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug} className="border-t border-rule py-5">
                  <a href={`/servicios/${s.slug}/`} className="text-base font-semibold text-ink hover:text-terracota">
                    {s.name} →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-sand py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <Label>Verificación</Label>
            <p className="mt-4 font-serif text-2xl leading-snug text-ink">
              Puedes verificar nuestra inscripción y habilitación en el Buscador de Proveedores del OECE y nuestro RUC en
              la consulta RUC de la SUNAT.
            </p>
            <p className="mt-4 text-sm text-body">
              Para estudios de mercado y cotizaciones escribe a{' '}
              <a href={`mailto:${site.email}`} className="font-medium text-ink underline underline-offset-2">{site.email}</a>{' '}
              indicando la entidad, el requerimiento y la fecha límite.
            </p>
          </div>
        </section>

        <CtaBand
          title="¿Tienes un requerimiento o estudio de mercado?"
          text="Envíanos los términos de referencia y te enviaremos una cotización formal."
          whatsappText="Hola Aurora Tech, tengo un requerimiento de una entidad pública."
        />
      </main>
      <Footer />
    </>
  )
}
