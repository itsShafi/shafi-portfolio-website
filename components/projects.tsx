import { Section } from '@/components/section'
import { projects } from '@/lib/data'

export function Projects() {
  return (
    <Section id="projects" index="04" title="Projects">
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group rounded-lg border border-border bg-card p-6 transition-colors hover:border-signal/50 md:p-8"
          >
            <div className="flex flex-col gap-5 md:grid md:grid-cols-[1fr_200px] md:gap-10">
              <div className="flex flex-col gap-4">
                <header className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {project.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.kind} · {project.team}
                  </p>
                </header>
                <ul className="flex flex-col gap-2 leading-relaxed text-muted-foreground">
                  {project.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span
                        className="mt-2.5 size-1 shrink-0 rounded-full bg-signal"
                        aria-hidden="true"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col gap-2 border-t border-border pt-4 md:border-t-0 md:border-l md:pt-0 md:pl-6">
                <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  Stack
                </span>
                <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-sm md:flex-col">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
