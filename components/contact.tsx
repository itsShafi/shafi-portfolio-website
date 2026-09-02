import { ArrowUpRight, Download, Mail, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { buttonVariants } from '@/components/ui/button'
import { Section } from '@/components/section'
import { profile } from '@/lib/data'

const links = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
    icon: Phone,
    external: false,
  },
  {
    label: 'GitHub',
    value: profile.githubHandle,
    href: profile.github,
    icon: GithubIcon,
    external: true,
  },
  {
    label: 'LinkedIn',
    value: profile.linkedinHandle,
    href: profile.linkedin,
    icon: LinkedinIcon,
    external: true,
  },
]

export function Contact() {
  return (
    <Section id="contact" index="07" title="Contact">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <h3 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Let&apos;s build something reliable.
          </h3>
          <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
            I am currently looking for Software Engineer opportunities. If you
            are hiring or want to collaborate, my inbox is open.
          </p>
        </div>

        <ul className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {links.map((link) => {
            const Icon = link.icon
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noreferrer' : undefined}
                  className="group flex items-center justify-between gap-4 bg-card p-5 transition-colors hover:bg-accent"
                >
                  <span className="flex items-center gap-4">
                    <Icon className="size-4 text-muted-foreground" aria-hidden="true" />
                    <span className="flex flex-col">
                      <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                        {link.label}
                      </span>
                      <span className="text-sm">{link.value}</span>
                    </span>
                  </span>
                  <ArrowUpRight
                    className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
                    aria-hidden="true"
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href={profile.cvPath}
          download
          className={buttonVariants({ size: 'lg', className: 'self-start' })}
        >
          <Download className="size-4" aria-hidden="true" />
          Download CV (PDF)
        </a>
      </div>
    </Section>
  )
}
