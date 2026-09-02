import { Award } from 'lucide-react'
import { Section } from '@/components/section'
import { awards, education } from '@/lib/data'

export function Education() {
  return (
    <Section id="education" index="06" title="Education">
      <div className="flex flex-col gap-10">
        <ol className="overflow-hidden rounded-lg border border-border bg-card">
          {education.map((item, i) => (
            <li
              key={item.school}
              className={`grid gap-2 p-5 md:grid-cols-[120px_1fr_auto] md:items-baseline md:gap-6 ${
                i > 0 ? 'border-t border-border' : ''
              }`}
            >
              <time className="font-mono text-sm text-muted-foreground">
                {item.period}
              </time>
              <div className="flex flex-col gap-0.5">
                <h3 className="font-medium">{item.school}</h3>
                <p className="text-sm text-muted-foreground">{item.degree}</p>
              </div>
              <span className="font-mono text-sm text-signal">{item.result}</span>
            </li>
          ))}
        </ol>

        <div className="flex flex-col gap-3">
          <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            Honors & Awards
          </h3>
          <ul className="flex flex-col gap-2">
            {awards.map((award) => (
              <li key={award} className="flex items-center gap-3 text-sm">
                <Award className="size-4 shrink-0 text-signal" aria-hidden="true" />
                {award}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
