import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { personalProjects } from '@/data/projects'
import { Reveal } from '@/components/reveal'
import { Tag } from '@/components/tag'

export const metadata: Metadata = {
  title: 'Personal Projects',
  description: 'Personal builds and labs: a Laravel 11 freight-tracking system and a Drupal design-system sandbox.',
}

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-20 sm:px-8 sm:pt-28">
      <Reveal>
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">Projects</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Personal builds — where I try ideas end-to-end without a client brief.
        </p>
      </Reveal>
      <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
        {personalProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.07} className="h-full">
            <Link
              href={project.href}
              className="group flex h-full flex-col justify-between rounded-2xl border border-line bg-surface p-7 transition-colors hover:border-accent/60"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-[11px] uppercase tracking-widest text-muted">{project.status}</p>
                  <ArrowUpRight
                    size={18}
                    className="shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    aria-hidden
                  />
                </div>
                <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight">{project.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
