import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { workProjects } from '@/data/projects'
import { Tag } from '@/components/tag'

export const dynamicParams = false

export function generateStaticParams() {
  return workProjects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const project = workProjects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.summary,
  }
}

export default async function WorkCaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = workProjects.find((p) => p.slug === slug)
  if (!project) notFound()

  const { default: Content } = await import(`@/content/work/${slug}.mdx`)

  return (
    <article className="mx-auto max-w-6xl px-5 pb-24 pt-20 sm:px-8 sm:pt-28">
      <Link
        href="/work/"
        className="inline-flex items-center gap-2 font-mono text-xs text-muted transition-colors hover:text-accent"
      >
        <ArrowLeft size={13} aria-hidden /> All work
      </Link>

      <header className="mt-8 border-b border-line pb-10">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">{project.client}</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-6xl">{project.title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">{project.summary}</p>
        <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">Role</dt>
            <dd className="mt-1 text-sm">{project.role}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">Period</dt>
            <dd className="mt-1 text-sm">{project.period}</dd>
          </div>
          {project.url && (
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-widest text-muted">Live</dt>
              <dd className="mt-1 text-sm">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-accent hover:underline underline-offset-4"
                >
                  {project.url.replace('https://', '')} <ArrowUpRight size={13} aria-hidden />
                </a>
              </dd>
            </div>
          )}
        </dl>
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
