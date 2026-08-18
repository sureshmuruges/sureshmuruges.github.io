import { Reveal } from './reveal'

type SectionProps = {
  index?: string
  title: string
  children: React.ReactNode
  className?: string
}

/** Page section with a mono index label and display heading. */
export function Section({ index, title, children, className = '' }: SectionProps) {
  return (
    <section className={`mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24 ${className}`}>
      <Reveal>
        <div className="mb-10 flex items-baseline gap-4">
          {index && <span className="font-mono text-xs text-accent">{index}</span>}
          <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        </div>
      </Reveal>
      {children}
    </section>
  )
}
