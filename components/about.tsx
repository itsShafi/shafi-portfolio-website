import { Section } from '@/components/section'
import { languages, summary } from '@/lib/data'

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <div className="flex flex-col gap-6 text-pretty leading-relaxed">
        {summary.map((paragraph, i) => (
          <p
            key={i}
            className={i === 0 ? 'text-lg text-foreground md:text-xl' : 'text-muted-foreground'}
          >
            {paragraph}
          </p>
        ))}
        <dl className="mt-2 flex flex-wrap gap-x-8 gap-y-2 font-mono text-sm">
          {languages.map((l) => (
            <div key={l.name} className="flex gap-2">
              <dt className="text-muted-foreground">{l.name}:</dt>
              <dd>{l.level}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  )
}
