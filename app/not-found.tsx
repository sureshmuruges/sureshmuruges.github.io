import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-start px-5 pb-24 pt-32 sm:px-8">
      <p className="font-mono text-xs text-accent">404</p>
      <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight sm:text-7xl">
        Page not found<span className="text-accent">.</span>
      </h1>
      <p className="mt-6 max-w-md text-lg text-muted">
        This route doesn&rsquo;t resolve — the page may have moved or never existed.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
      >
        <ArrowLeft size={15} aria-hidden /> Back home
      </Link>
    </div>
  )
}
