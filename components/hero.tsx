import { ArrowDown, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { buttonVariants } from '@/components/ui/button'
import { profile } from '@/lib/data'

const facts = [
  { key: 'role', value: profile.title },
  { key: 'edu', value: 'B.Sc. CSE, BUET' },
  { key: 'focus', value: 'Backend · Full-stack · ML data' },
  { key: 'base', value: profile.location },
]

export function Hero() {
  return (
    <section id="top" className="grid-paper relative border-b border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 pt-20 pb-16 md:grid-cols-[1fr_320px] md:items-end md:pt-28 md:pb-24">
        <div className="flex flex-col gap-8">
          <div className="animate-in fade-in slide-in-from-bottom-2 flex items-center gap-2 font-mono text-xs text-muted-foreground duration-500">
            <span
              className="size-2 rounded-full bg-signal"
              aria-hidden="true"
            />
            {profile.status}
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="animate-in fade-in slide-in-from-bottom-3 text-balance text-5xl font-semibold tracking-tight duration-700 md:text-7xl">
              {profile.name}
            </h1>
            <p className="animate-in fade-in slide-in-from-bottom-3 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground delay-100 duration-700 md:text-xl">
              {profile.tagline}
            </p>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-3 flex flex-wrap items-center gap-3 delay-200 duration-700">
            <a href="#projects" className={buttonVariants({ size: 'lg' })}>
              View projects
              <ArrowDown className="size-4" aria-hidden="true" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className={buttonVariants({ variant: 'outline', size: 'lg' })}
            >
              <Mail className="size-4" aria-hidden="true" />
              Get in touch
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className={buttonVariants({ variant: 'ghost', size: 'icon-lg' })}
              >
                <GithubIcon className="size-4" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className={buttonVariants({ variant: 'ghost', size: 'icon-lg' })}
              >
                <LinkedinIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <dl className="animate-in fade-in slide-in-from-bottom-3 rounded-lg border border-border bg-card p-5 font-mono text-sm shadow-sm delay-300 duration-700">
          <div className="mb-4 flex items-center justify-between border-b border-border pb-3 text-xs text-muted-foreground">
            <span>profile.json</span>
            <span className="text-signal">v2026</span>
          </div>
          <div className="flex flex-col gap-3">
            {facts.map((f) => (
              <div key={f.key} className="grid grid-cols-[64px_1fr] gap-3">
                <dt className="text-muted-foreground">{f.key}</dt>
                <dd className="text-foreground">{f.value}</dd>
              </div>
            ))}
          </div>
        </dl>
      </div>
    </section>
  )
}
