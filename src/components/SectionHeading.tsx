interface SectionHeadingProps {
  id?: string
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ id, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="section-heading" data-reveal>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  )
}
