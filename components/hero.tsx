import { site } from '@/lib/site'

const Hero = () => (
  <section id="inicio" className="bg-navy pt-32 pb-16 text-white sm:pt-40 sm:pb-20">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="h-0.5 w-12 bg-gold" />

      <h1 className="mt-6 max-w-[20ch] font-serif text-4xl leading-[1.1] font-medium text-balance sm:text-5xl lg:text-6xl">
        Transformamos ideas en soluciones digitales
      </h1>

      <p className="mt-6 max-w-[54ch] text-base text-pretty text-mist sm:text-lg">
        Somos una empresa peruana de ingeniería de software. Acompañamos a empresas y entidades públicas desde el
        análisis hasta el soporte.
      </p>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <a
          href="#contacto"
          className="inline-flex items-center justify-center rounded-[3px] bg-white px-6 py-3 text-sm font-medium text-navy transition hover:bg-sand"
        >
          Conversemos sobre tu proyecto
        </a>
        <a
          href="#servicios"
          className="inline-flex items-center justify-center rounded-[3px] border border-white/40 px-6 py-3 text-sm font-medium text-white transition hover:border-white"
        >
          Ver servicios
        </a>
      </div>

      <dl className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-6 text-sm text-mist">
        <div className="flex gap-1.5">
          <dt>RUC</dt>
          <dd className="font-semibold text-white tabular-nums">{site.ruc}</dd>
        </div>
        <div className="flex gap-1.5">
          <dt>RNP</dt>
          <dd className="font-semibold text-white">vigente · Bienes y Servicios</dd>
        </div>
        <div className="flex gap-1.5">
          <dt className="sr-only">Condición</dt>
          <dd>
            <span className="font-semibold text-white">MYPE</span> · REMYPE
          </dd>
        </div>
        <div className="flex gap-1.5">
          <dt className="sr-only">Sede</dt>
          <dd>
            San Juan de Miraflores, <span className="font-semibold text-white">Lima</span>
          </dd>
        </div>
      </dl>
    </div>
  </section>
)

export default Hero
