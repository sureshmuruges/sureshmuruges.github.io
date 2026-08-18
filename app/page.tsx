import Link from 'next/link'
import { ArrowRight, MapPin } from 'lucide-react'
import { profile } from '@/data/profile'
import { workProjects } from '@/data/projects'
import { headlineSkills } from '@/data/skills'
import { experience } from '@/data/experience'
import { ProjectCard } from '@/components/project-card'
import { Reveal } from '@/components/reveal'
import { Parallax } from '@/components/parallax'
import { Section } from '@/components/section'
import { Tag } from '@/components/tag'

const spanClass = {
  large: 'md:col-span-2 md:row-span-2',
  wide: 'md:col-span-2',
  tall: 'md:row-span-2',
  small: '',
} as const

export default function HomePage() {
  const featured = workProjects.filter((p) => p.featured)
  const current = experience[0]

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mesh" aria-hidden />
        <div className="mx-auto max-w-6xl px-5 pb-20 pt-24 sm:px-8 sm:pb-28 sm:pt-36">
          <Reveal>
            <p className="flex items-center gap-2 font-mono text-xs text-muted">
              <MapPin size={13} className="text-accent" aria-hidden />
              {profile.location}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl">
              Senior Drupal
              <br />
              Developer<span className="text-accent">.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted">{profile.tagline}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="/work/"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                See my work <ArrowRight size={15} aria-hidden />
              </Link>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-foreground transition-colors hover:border-accent"
              >
                Get in touch
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Selected work — asymmetric bento */}
      <Section index="01" title="Selected work">
        <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 md:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06} className={`h-full ${spanClass[project.size]}`}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <Link
            href="/work/"
            className="mt-8 inline-flex items-center gap-2 text-sm text-accent hover:underline underline-offset-4"
          >
            All professional work <ArrowRight size={14} aria-hidden />
          </Link>
        </Reveal>
      </Section>

      {/* Skills strip */}
      <Section index="02" title="What I work with">
        <Parallax distance={16}>
          <div className="flex flex-wrap gap-2.5">
            {headlineSkills.map((skill, i) => (
              <Reveal key={skill} delay={i * 0.03}>
                <span className="inline-flex rounded-full border border-line bg-surface px-4 py-2 font-mono text-sm text-muted">
                  {skill}
                </span>
              </Reveal>
            ))}
          </div>
        </Parallax>
        <Reveal delay={0.15}>
          <Link
            href="/about/"
            className="mt-8 inline-flex items-center gap-2 text-sm text-accent hover:underline underline-offset-4"
          >
            Full skills matrix <ArrowRight size={14} aria-hidden />
          </Link>
        </Reveal>
      </Section>

      {/* Current role */}
      <Section index="03" title="Currently">
        <Reveal>
          <div className="rounded-2xl border border-line bg-surface p-7 sm:p-10">
            <p className="font-mono text-xs text-accent">{current.period}</p>
            <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
              {current.role} · {current.company}
            </h3>
            <p className="mt-4 max-w-3xl leading-relaxed text-muted">
              Leading development of {profile.currentProject} — a decoupled Drupal 11 platform on Azure Kubernetes
              Service serving five concurrent football competitions, its career portal, and the league&rsquo;s mobile
              app backend.
            </p>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {current.stack.map((s) => (
                <Tag key={s}>{s}</Tag>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Contact */}
      <Section index="04" title="Let's talk">
        <Reveal>
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            Open to senior Drupal / PHP engineering roles and consulting on decoupled architectures, migrations, and
            Kubernetes deployments.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              {profile.email}
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm transition-colors hover:border-accent"
            >
              LinkedIn
            </a>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
