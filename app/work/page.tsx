import type { Metadata } from 'next'
import { workProjects, allWorkTags } from '@/data/projects'
import { WorkGrid } from '@/components/work-grid'

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Professional projects: decoupled Drupal platforms, multisite architectures, and API backends for clients across Qatar.',
}

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-20 sm:px-8 sm:pt-28">
      <div className="rise">
        <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">Work</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Professional platforms I&rsquo;ve built and led — decoupled Drupal on Kubernetes, true multisite
          architectures, and API backends for mobile apps.
        </p>
      </div>
      <div className="mt-12">
        <h2 className="sr-only">All projects</h2>
        <WorkGrid projects={workProjects} tags={allWorkTags} />
      </div>
    </div>
  )
}
