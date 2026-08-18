import type { Metadata } from 'next'
import { Download } from 'lucide-react'
import { profile } from '@/data/profile'
import { experience, education, certifications } from '@/data/experience'
import { skillGroups } from '@/data/skills'
import { Reveal } from '@/components/reveal'
import { Tag } from '@/components/tag'

export const metadata: Metadata = {
  title: 'Resume',
  description: `Resume of ${profile.fullName} — ${profile.title}. ${profile.yearsExperience} years of web application development.`,
}

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-5 pb-24 pt-20 sm:px-8 sm:pt-28">
      <Reveal>
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div>
            <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">{profile.name}</h1>
            <p className="mt-2 text-lg text-muted">{profile.title}</p>
            <p className="mt-3 font-mono text-xs text-muted">
              {profile.location} · {profile.phone} ·{' '}
              <a href={`mailto:${profile.email}`} className="text-accent hover:underline underline-offset-4">
                {profile.email}
              </a>
            </p>
          </div>
          <a
            href={profile.resumePdf}
            download
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            <Download size={15} aria-hidden /> Download PDF
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <section className="mt-14">
          <h2 className="font-mono text-xs uppercase tracking-widest text-accent">Professional Summary</h2>
          <p className="mt-4 leading-relaxed text-muted">{profile.summary}</p>
        </section>
      </Reveal>

      <section className="mt-14">
        <h2 className="font-mono text-xs uppercase tracking-widest text-accent">Experience</h2>
        <div className="mt-6 space-y-12">
          {experience.map((job) => (
            <Reveal key={`${job.company}-${job.period}`}>
              <div className="border-l border-line pl-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-semibold tracking-tight">{job.role}</h3>
                  <p className="font-mono text-xs text-muted">{job.period}</p>
                </div>
                <p className="mt-1 text-sm text-muted">
                  {job.company} · {job.location}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {job.stack.map((s) => (
                    <Tag key={s}>{s}</Tag>
                  ))}
                </div>
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="mt-14">
          <h2 className="font-mono text-xs uppercase tracking-widest text-accent">Core Technical Skills</h2>
          <dl className="mt-6 space-y-4">
            {skillGroups.map((group) => (
              <div key={group.category} className="grid gap-1 sm:grid-cols-[200px_1fr] sm:gap-6">
                <dt className="text-sm font-medium">{group.category}</dt>
                <dd className="text-sm text-muted">{group.skills.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </section>
      </Reveal>

      <Reveal>
        <section className="mt-14 grid gap-10 sm:grid-cols-2">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-accent">Education</h2>
            <ul className="mt-4 space-y-4">
              {education.map((e) => (
                <li key={e.degree}>
                  <p className="text-sm font-medium">{e.degree}</p>
                  <p className="mt-0.5 text-sm text-muted">{e.school}</p>
                  <p className="mt-0.5 font-mono text-xs text-muted">
                    {[e.period, e.note].filter(Boolean).join(' · ')}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-accent">Certifications</h2>
            <ul className="mt-4 space-y-2">
              {certifications.map((c) => (
                <li key={c.name} className="text-sm text-muted">
                  {c.name} — <span className="font-mono text-xs">{c.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Reveal>
    </div>
  )
}
