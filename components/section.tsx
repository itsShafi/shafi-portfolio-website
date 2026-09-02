import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  index: string
  title: string
  children: ReactNode
}

export function Section({ id, index, title, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="border-t border-border py-16 md:py-20"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 md:grid-cols-[200px_1fr] md:gap-12">
        <div className="flex flex-row items-baseline gap-3 md:flex-col md:gap-2">
          <span className="font-mono text-xs text-signal">{index}</span>
          <h2
            id={`${id}-title`}
            className="text-sm font-medium uppercase tracking-widest text-muted-foreground"
          >
            {title}
          </h2>
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  )
}
