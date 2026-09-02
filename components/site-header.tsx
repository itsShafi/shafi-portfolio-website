import { Download } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { navItems, profile } from '@/lib/data'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-6 px-6">
        <a href="#top" className="font-mono text-sm font-medium tracking-tight">
          <span className="text-signal">~/</span>
          {profile.shortName.toLowerCase()}
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={profile.cvPath}
          download
          className={buttonVariants({
            size: 'sm',
            variant: 'outline',
            className: 'font-mono text-xs',
          })}
        >
          <Download className="size-3.5" aria-hidden="true" />
          CV
        </a>
      </div>
    </header>
  )
}
