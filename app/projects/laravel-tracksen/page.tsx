import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Content from '@/content/projects/laravel-tracksen.mdx'
import { personalProjects } from '@/data/projects'
import { Tag } from '@/components/tag'

const project = personalProjects.find((p) => p.slug === 'laravel-tracksen')!

export const metadata: Metadata = {
  title: 'Tracksen — Laravel Deep Dive',
  description: project.summary,
}

export default function TracksenPage() {
  return (
    <article className="mx-auto max-w-6xl px-5 pb-24 pt-20 sm:px-8 sm:pt-28">
      <Link
        href="/projects/"
        className="inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft size={13} aria-hidden /> All projects
      </Link>

      <header className="mt-8 border-b border-line pb-10">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">Personal project · Deep dive</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-6xl">Tracksen</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">
          A freight &amp; logistics tracking system for a small Indian forwarding operation — bookings, expenses,
          GST-aware parties, and an HSN product catalog, built as a Laravel 11 monolith.
        </p>
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </header>

      <div className="prose mt-4">
        <Content />
      </div>
    </article>
  )
}
