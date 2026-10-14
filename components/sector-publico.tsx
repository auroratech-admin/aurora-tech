const points = [
  {
    title: 'Habilitados para contratar',
    text: 'Inscritos en el Registro Nacional de Proveedores (RNP) en Bienes y Servicios, sin sanciones ni penalidades.',
  },
  {
    title: 'Atendemos requerimientos y TDR',
    text: 'Enviamos cotizaciones formales para estudios de mercado y contrataciones directas, alineadas a los términos de referencia.',
  },
  {
    title: 'Entregables y plazos claros',
    text: 'Cronograma por entregables, actas de conformidad y documentación técnica de cada fase.',
  },
  {
    title: 'Condición MYPE',
    text: 'Micro empresa acreditada en el REMYPE, con los beneficios que la normativa de contrataciones otorga a las MYPE.',
  },
]

const SectorPublico = () => (
  <section id="estado" className="border-t border-rule bg-sand py-20 sm:py-28">
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <p className="text-xs font-semibold tracking-[0.14em] text-gold uppercase">Sector público</p>
      <blockquote className="mt-4 max-w-[34ch] font-serif text-2xl leading-snug font-medium text-balance text-ink sm:text-3xl">
        Habilitados para contratar con el Estado peruano, con RNP vigente en Bienes y Servicios.
      </blockquote>

      <div className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-4">
        {points.map(({ title, text }) => (
          <div key={title} className="border-t border-ink/20 py-6">
            <h3 className="text-base font-semibold text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-body">{text}</p>
          </div>
        ))}
      </div>

      <a href="/sector-publico/" className="mt-8 inline-block text-sm font-semibold text-ink underline decoration-gold underline-offset-4 hover:text-gold">
        Cómo atendemos los requerimientos de entidades públicas →
      </a>
    </div>
  </section>
)

export default SectorPublico
