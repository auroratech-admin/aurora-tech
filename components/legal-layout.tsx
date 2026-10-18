import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

type Props = {
  eyebrow: string
  title: string
  updated?: string
  intro?: React.ReactNode
  // false para contenido que no es texto corrido (p. ej. formularios)
  prose?: boolean
  children: React.ReactNode
}

// Páginas legales: misma cabecera azul marino y un cuerpo de lectura de ~70 caracteres.
const LegalLayout = ({ eyebrow, title, updated, intro, prose = true, children }: Props) => (
  <>
    <Navbar />
    <main className="bg-paper">
      <header className="bg-navy pt-28 pb-12 text-white sm:pt-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="text-xs font-semibold tracking-[0.14em] text-terracota-300 uppercase">{eyebrow}</p>
          <h1 className="mt-3 font-serif text-3xl leading-tight font-medium text-balance sm:text-4xl">{title}</h1>
          {updated && <p className="mt-3 text-sm text-mist">Última actualización: {updated}</p>}
        </div>
      </header>
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        {intro && <div className="mb-10 text-base leading-relaxed text-body">{intro}</div>}
        <div className={prose ? 'legal' : undefined}>{children}</div>
      </div>
    </main>
    <Footer />
  </>
)

export default LegalLayout
