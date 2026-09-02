import { Section } from '@/components/section'
import { skillGroups } from '@/lib/data'

export function Skills() {
  return (
    <Section id="skills" index="02" title="Skills">
      <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.label} className="flex flex-col gap-4 bg-card p-6">
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-border bg-background px-2.5 py-1 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
