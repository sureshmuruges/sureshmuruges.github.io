'use client'

import { useState } from 'react'
import type { WorkProject } from '@/data/projects'
import { ProjectCard } from './project-card'
import { Reveal } from './reveal'

/** Filterable bento grid for the /work index. */
export function WorkGrid({ projects, tags }: { projects: WorkProject[]; tags: string[] }) {
  const [active, setActive] = useState<string | null>(null)
  const visible = active ? projects.filter((p) => p.tags.includes(active)) : projects

  return (
    <div>
      <div role="group" aria-label="Filter projects by technology" className="mb-10 flex flex-wrap gap-2">
        <FilterButton label="All" selected={active === null} onClick={() => setActive(null)} />
        {tags.map((tag) => (
          <FilterButton key={tag} label={tag} selected={active === tag} onClick={() => setActive(tag)} />
        ))}
      </div>
      <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 md:grid-cols-3">
        {visible.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.05} className={`h-full ${gridSpan(project, active !== null)}`}>
            <ProjectCard project={{ ...project, size: active ? 'small' : project.size }} />
          </Reveal>
        ))}
      </div>
      <p aria-live="polite" className="sr-only">
        Showing {visible.length} of {projects.length} projects
      </p>
    </div>
  )
}

/* Reveal wraps the card, so the bento span classes must live on the wrapper. */
function gridSpan(project: WorkProject, filtered: boolean) {
  if (filtered) return ''
  return {
    large: 'md:col-span-2 md:row-span-2',
    wide: 'md:col-span-2',
    tall: 'md:row-span-2',
    small: '',
  }[project.size]
}

function FilterButton({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      onClick={onClick}
      className={`rounded-full border px-3 py-1 font-mono text-xs transition-colors ${
        selected
          ? 'border-accent bg-accent-soft text-accent'
          : 'border-line text-muted hover:border-accent/50 hover:text-foreground'
      }`}
    >
      {label}
    </button>
  )
}
