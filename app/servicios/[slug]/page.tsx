import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import CtaBand from '@/components/cta-band'
import { getService, process, services } from '@/lib/services'
import { site } from '@/lib/site'

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = false

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = getService((await params).slug)
  if (!service) return {}
  const path = `/servicios/${service.slug}/`
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: { canonical: path },
    openGraph: { title: `${service.seoTitle} | Aurora Tech`, description: service.seoDescription, url: path },
  }
}

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">{children}</p>
)

export default async function ServicePage({ params }: Props) {
  const service = getService((await params).slug)
  if (!service) notFound()

  const url = `${site.url}/servicios/${service.slug}/`
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description: service.seoDescription,
      url,
      areaServed: { '@type': 'Country', name: 'Perú' },
      provider: { '@type': 'ProfessionalService', name: site.legalName, url: site.url, telephone: site.phoneDisplay },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${site.url}/` },
        { '@type': 'ListItem', position: 2, name: 'Servicios', item: `${site.url}/#servicios` },
        { '@type': 'ListItem', position: 3, name: service.name, item: url },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: service.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ]
  const others = services.filter((s) => s.slug !== service.slug)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="bg-paper">
        <header className="bg-navy pt-28 pb-14 text-white sm:pt-36 sm:pb-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <nav aria-label="Ruta" className="text-xs text-mist">
              <a href="/" className="hover:text-white">Inicio</a>
              <span className="mx-2">/</span>
              <a href="/#servicios" className="hover:text-white">Servicios</a>
              <span className="mx-2">/</span>
              <span className="text-white">{service.name}</span>
            </nav>
            <p className="mt-8 text-xs font-semibold tracking-[0.14em] text-gold-300 uppercase">{service.name}</p>
            <h1 className="mt-3 max-w-[22ch] font-serif text-4xl leading-[1.1] font-medium text-balance sm:text-5xl">
              {service.headline}
            </h1>
            <p className="mt-6 max-w-[62ch] text-base text-pretty text-mist sm:text-lg">{service.lead}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/#contacto"
                className="inline-flex items-center justify-center rounded-[3px] bg-white px-6 py-3 text-sm font-medium text-navy transition hover:bg-sand"
              >
                Solicitar cotización
              </a>
            </div>
          </div>
        </header>

        <section className="py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <div>
              <Label>Qué incluye</Label>
              <h2 className="mt-3 font-serif text-3xl leading-tight font-medium text-balance text-ink">
                Alcance del servicio
              </h2>
            </div>
            <div className="grid gap-x-10 sm:grid-cols-2">
              {service.includes.map((i) => (
                <article key={i.title} className="border-t border-rule py-6">
                  <h3 className="text-base font-semibold text-ink">{i.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{i.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-rule bg-white py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 md:grid-cols-2 lg:gap-16">
            <div>
              <Label>Para quién es</Label>
              <ul className="mt-5 space-y-4">
                {service.forWhom.map((f) => (
                  <li key={f} className="border-t border-rule pt-4 text-base leading-relaxed text-ink">{f}</li>
                ))}
              </ul>
            </div>
            <div>
              <Label>Qué recibes</Label>
              <ul className="mt-5 space-y-4">
                {service.deliverables.map((d) => (
                  <li key={d} className="border-t border-rule pt-4 text-base leading-relaxed text-ink">{d}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Label>Cómo trabajamos</Label>
            <h2 className="mt-3 font-serif text-3xl leading-tight font-medium text-ink">Del análisis al soporte</h2>
            <ol className="mt-10 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
              {process.map((p, i) => (
                <li key={p.title} className="border-t border-rule py-6">
                  <span className="font-serif text-2xl text-gold tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-2 text-base font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{p.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-rule bg-sand py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
            <div>
              <Label>Preguntas frecuentes</Label>
              <h2 className="mt-3 font-serif text-3xl leading-tight font-medium text-ink">Lo que suelen preguntarnos</h2>
            </div>
            <div>
              {service.faqs.map((f) => (
                <details key={f.q} className="group border-t border-ink/15 py-5">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-semibold text-ink">
                    {f.q}
                    <span className="mt-0.5 text-gold transition group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-body">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <Label>Otros servicios</Label>
            <ul className="mt-5 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
              {others.map((s) => (
                <li key={s.slug} className="border-t border-rule py-4">
                  <a href={`/servicios/${s.slug}/`} className="text-sm font-medium text-ink hover:text-gold">
                    {s.name} →
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CtaBand whatsappText={`Hola Aurora Tech, quiero cotizar: ${service.name}.`} />
      </main>
      <Footer />
    </>
  )
}
