import type { Metadata } from 'next'
import { profile } from '@/data/profile'
import { experience, education, certifications } from '@/data/experience'
import { skillGroups } from '@/data/skills'
import { Timeline } from '@/components/timeline'
import { Section } from '@/components/section'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  title: 'About',
  description: `Career history, skills, and education of ${profile.fullName}, ${profile.title}.`,
}

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mesh" aria-hidden />
        <div className="mx-auto max-w-6xl px-5 pb-8 pt-20 sm:px-8 sm:pt-28">
          <Reveal>
            <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">About</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-muted">
              <p>{profile.summary}</p>
              <p>
                The common thread in my work: taking a CMS most teams treat as a website builder and running it like a
                product platform — custom entities, API-first delivery, containerised infrastructure, and bilingual
                Arabic/English delivery for the Middle East market. Recently I&rsquo;ve folded AI-augmented
                development (Claude) into the workflow for code review, debugging, and modernization.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <Section index="01" title="Career timeline">
        <Timeline items={experience} />
      </Section>

      <Section index="02" title="Skills matrix">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05} className="h-full">
              <div className="h-full rounded-2xl border border-line bg-surface p-6">
                <h3 className="font-mono text-xs uppercase tracking-widest text-accent">{group.category}</h3>
                <ul className="mt-4 space-y-1.5">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-sm text-muted">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section index="03" title="Education & certifications">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-2xl border border-line bg-surface p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent">Education</h3>
              <ul className="mt-4 space-y-5">
                {education.map((e) => (
                  <li key={e.degree}>
                    <p className="font-medium">{e.degree}</p>
                    <p className="mt-0.5 text-sm text-muted">{e.school}</p>
                    <p className="mt-0.5 font-mono text-xs text-muted">
                      {[e.period, e.note].filter(Boolean).join(' · ')}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08} className="h-full">
            <div className="h-full rounded-2xl border border-line bg-surface p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-accent">Certifications</h3>
              <ul className="mt-4 space-y-3">
                {certifications.map((c) => (
                  <li key={c.name}>
                    <p className="text-sm font-medium">{c.name}</p>
                    <p className="mt-0.5 font-mono text-xs text-muted">{c.issuer}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
