import type { Experience } from '@/data/experience'
import { Reveal } from './reveal'
import { Tag } from './tag'

export function Timeline({ items }: { items: Experience[] }) {
  return (
    <ol className="relative space-y-12 border-l border-line pl-6 sm:pl-10">
      {items.map((item, i) => (
        <li key={`${item.company}-${item.period}`} className="relative">
          <span
            className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background sm:-left-[47px]"
            aria-hidden
          />
          <Reveal delay={i * 0.05}>
            <p className="font-mono text-xs text-accent">{item.period}</p>
            <h3 className="mt-1 font-display text-xl font-semibold tracking-tight">{item.role}</h3>
            <p className="mt-0.5 text-sm text-muted">
              {item.company} · {item.location}
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {item.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
            <ul className="mt-4 space-y-2">
              {item.highlights.map((h) => (
                <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" aria-hidden />
                  {h}
                </li>
              ))}
            </ul>
          </Reveal>
        </li>
      ))}
    </ol>
  )
}
