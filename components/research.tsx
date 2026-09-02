import { Section } from '@/components/section'
import { research } from '@/lib/data'

export function Research() {
  return (
    <Section id="research" index="03" title="Research">
      <article className="flex flex-col gap-6">
        <header className="flex flex-col gap-2">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="text-2xl font-semibold tracking-tight">
              {research.title}
            </h3>
            <span className="font-mono text-sm text-muted-foreground">
              {research.org} · {research.period}
            </span>
          </div>
          <p className="text-pretty text-lg text-foreground">{research.focus}</p>
          <p className="font-mono text-sm text-muted-foreground">
            Supervisor: {research.supervisor}
          </p>
        </header>
        <ul className="flex flex-col gap-3 border-l-2 border-signal/40 pl-5 leading-relaxed text-muted-foreground">
          {research.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </article>
    </Section>
  )
}
