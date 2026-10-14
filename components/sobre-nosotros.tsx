import SectionHeader from '@/components/section-header'

const values = [
  {
    title: 'Misión',
    text: 'Desarrollar soluciones tecnológicas confiables que ayuden a empresas y entidades públicas del Perú a operar mejor, con calidad de ingeniería y trato cercano.',
  },
  {
    title: 'Visión',
    text: 'Ser un aliado tecnológico de referencia para MYPEs y el sector público peruano, reconocido por cumplir lo que promete.',
  },
]

const Nosotros = () => (
  <section id="nosotros" className="border-y border-rule bg-white py-20 sm:py-28">
    <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
      <SectionHeader eyebrow="Nosotros" title="Una empresa peruana de ingeniería de software" />

      <div>
        <p className="max-w-[60ch] text-base leading-relaxed text-body">
          Aurora Tech S.A.C. nace en 2026 en Lima, fundada por{' '}
          <strong className="font-semibold text-ink">tres ingenieros de sistemas</strong>, especializados en desarrollo
          de software, calidad y operación de sistemas. Contamos con una red de especialistas para los proyectos que
          requieren perfiles adicionales.
        </p>

        <div className="mt-10 grid gap-x-10 sm:grid-cols-2">
          {values.map(({ title, text }) => (
            <div key={title} className="border-t border-rule py-6">
              <h3 className="font-serif text-xl font-medium text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Nosotros
