import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { WorkProject } from '@/data/projects'
import { Tag } from './tag'

/** Grid spans are applied by the parent grid wrapper; the card just fills its cell. */
export function ProjectCard({ project }: { project: WorkProject }) {
  return (
    <Link
      href={`/work/${project.slug}/`}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-accent/60 sm:p-7"
    >
      <div>
        <div className="flex items-start justify-between gap-4">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted">{project.client}</p>
          <ArrowUpRight
            size={18}
            className="shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
            aria-hidden
          />
        </div>
        <h3
          className={`mt-3 font-display font-semibold tracking-tight ${
            project.size === 'large' ? 'text-2xl sm:text-3xl' : 'text-xl'
          }`}
        >
          {project.title}
        </h3>
        <p className={`mt-3 text-sm leading-relaxed text-muted ${project.size === 'small' ? 'line-clamp-3' : ''}`}>
          {project.summary}
        </p>
      </div>
      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.tags.slice(0, project.size === 'large' ? 7 : 4).map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </Link>
  )
}
