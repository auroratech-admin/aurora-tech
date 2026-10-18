type Props = {
  eyebrow: string
  title: string
  description?: string
}

const SectionHeader = ({ eyebrow, title, description }: Props) => (
  <div className="max-w-2xl">
    <p className="text-xs font-semibold tracking-[0.14em] text-terracota uppercase">{eyebrow}</p>
    <h2 className="mt-3 font-serif text-3xl leading-tight font-medium text-balance text-ink sm:text-4xl">{title}</h2>
    {description && <p className="mt-4 text-base text-pretty text-body">{description}</p>}
  </div>
)

export default SectionHeader
