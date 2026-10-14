import { site, whatsappUrl } from '@/lib/site'

type Props = { title?: string; text?: string; whatsappText?: string }

// Cierre de página con las dos vías de contacto.
const CtaBand = ({
  title = 'Conversemos sobre tu proyecto',
  text = 'Cuéntanos qué necesitas y te enviaremos una propuesta o cotización formal.',
  whatsappText,
}: Props) => (
  <section className="bg-navy py-16 text-white sm:py-20">
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-xl">
        <div className="h-0.5 w-12 bg-gold" />
        <h2 className="mt-5 font-serif text-3xl leading-tight font-medium text-balance">{title}</h2>
        <p className="mt-3 text-mist">{text}</p>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
        <a
          href="/#contacto"
          className="inline-flex items-center justify-center rounded-[3px] bg-white px-6 py-3 text-sm font-medium text-navy transition hover:bg-sand"
        >
          Solicitar cotización
        </a>
        <a
          href={whatsappUrl(whatsappText) ?? '/#contacto'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-[3px] border border-white/40 px-6 py-3 text-sm font-medium text-white transition hover:border-white"
        >
          WhatsApp {site.phoneDisplay}
        </a>
      </div>
    </div>
  </section>
)

export default CtaBand
