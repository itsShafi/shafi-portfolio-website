import { Section } from '@/components/section'
import { experience } from '@/lib/data'

export function Experience() {
  return (
    <Section id="experience" index="05" title="Experience">
      <ol className="flex flex-col">
        {experience.map((item, i) => (
          <li
            key={item.role}
            className={`grid gap-4 py-6 md:grid-cols-[160px_1fr] md:gap-10 ${
              i > 0 ? 'border-t border-border' : 'pt-0'
            }`}
          >
            <time className="font-mono text-sm text-muted-foreground">
              {item.period}
            </time>
            <div className="flex flex-col gap-3">
              <header className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold tracking-tight">
                  {item.role}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.org} · {item.dept} · {item.location}
                </p>
              </header>
              <ul className="flex flex-col gap-2 leading-relaxed text-muted-foreground">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}
