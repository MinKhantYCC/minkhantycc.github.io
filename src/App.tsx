import { ContactForm } from './components/ContactForm'
import { HeroVisual } from './components/HeroVisual'
import { ArrowUpRightIcon, CheckIcon, DownloadIcon, LocationIcon, MailIcon, SocialIcon } from './components/Icons'
import { Navigation } from './components/Navigation'
import { ArticleVisual, ProjectVisual } from './components/ProjectVisual'
import { SectionHeading } from './components/SectionHeading'
import portfolioJson from './data/portfolio.json'
import { useScrollReveal } from './hooks/useScrollReveal'
import type { PortfolioData, ProjectLink } from './types/portfolio'

const portfolio: PortfolioData = portfolioJson

function ExternalLink({ link }: { link: ProjectLink }) {
  return (
    <a href={link.url} target="_blank" rel="noreferrer">
      {link.label}<ArrowUpRightIcon />
    </a>
  )
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`))
}

function App() {
  useScrollReveal()

  const resumeUrl = `${import.meta.env.BASE_URL}${portfolio.profile.resumePath}`
  const formId = import.meta.env.VITE_FORMSPREE_FORM_ID?.trim() || 'xyekogvb'

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Navigation />

      <main id="main-content">
        <section id="about" className="hero-section" aria-labelledby="hero-title">
          <div className="container-shell hero-grid">
            <div className="hero-copy" data-reveal>
              <div className="availability-pill">
                <span aria-hidden="true" />
                {portfolio.profile.availability}
              </div>
              <p className="hero-role">{portfolio.profile.role}</p>
              <h1 id="hero-title">{portfolio.profile.heroIntro}</h1>
              <p className="hero-summary">{portfolio.profile.summary}</p>
              <div className="hero-actions">
                <a className="button-primary" href="#contact">
                  Book a free discovery call <ArrowUpRightIcon />
                </a>
                <a className="button-secondary" href="#work">
                  See client results
                </a>
              </div>
              <ul className="trust-list" aria-label="Working with me">
                {portfolio.trustPoints.map((point) => (
                  <li key={point.title}>
                    <CheckIcon />
                    <span>
                      <strong>{point.title}</strong>
                      {point.detail}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="hero-meta">
                <span><LocationIcon />{portfolio.profile.location} · {portfolio.profile.timezone}</span>
                <a href={`mailto:${portfolio.profile.email}`}><MailIcon />{portfolio.profile.email}</a>
              </div>
              <div className="social-links" aria-label="Social profiles">
                {portfolio.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target={social.url.startsWith('http') ? '_blank' : undefined}
                    rel={social.url.startsWith('http') ? 'noreferrer' : undefined}
                    aria-label={social.url.startsWith('http') ? `${social.label} (opens in a new tab)` : social.label}
                  >
                    <SocialIcon type={social.icon} />
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
            <HeroVisual />
          </div>
        </section>

        <section className="metrics-section" aria-label="Results for clients">
          <div className="container-shell metrics-grid" data-reveal>
            {portfolio.metrics.map((metric) => (
              <article key={metric.label} className="metric-card">
                <strong>{metric.value}</strong>
                <h2>{metric.label}</h2>
                <p>{metric.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="page-section" aria-labelledby="services-title">
          <div className="container-shell">
            <SectionHeading
              id="services-title"
              eyebrow="Services"
              title="How I can help your business."
              description="Whether you want customers answered faster, manual steps automated, or a slow system fixed, I build software that solves the problem and keeps working after launch."
            />
            <div className="services-grid" data-reveal>
              {portfolio.services.map((service, index) => (
                <article key={service.title} className="service-card">
                  <span className="service-index" aria-hidden="true">0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p className="service-summary">{service.summary}</p>
                  <ul className="service-deliverables">
                    {service.deliverables.map((item) => <li key={item}><CheckIcon />{item}</li>)}
                  </ul>
                  <p className="service-proof"><span>Proof</span>{service.proof}</p>
                </article>
              ))}
            </div>

            <div id="skills" className="tech-strip" data-reveal>
              <h3>Tools I build with</h3>
              <dl>
                {portfolio.skillGroups.map((group) => (
                  <div key={group.name} className="tech-row">
                    <dt>{group.name}</dt>
                    <dd>
                      <ul className="tag-list" aria-label={`${group.name} tools`}>
                        {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                      </ul>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section id="work" className="page-section section-raised" aria-labelledby="work-title">
          <div className="container-shell">
            <SectionHeading
              id="work-title"
              eyebrow="Client results"
              title="Real problems, measurable results."
              description="A few projects, each told the way it happened: the problem, what I built, and the result."
            />
            <div className="projects-list" data-reveal>
              {portfolio.projects.map((project, index) => (
                <article key={project.title} className="project-card">
                  <div className="project-card-copy">
                    <p className="project-number">0{index + 1} · {project.eyebrow}</p>
                    <h3>{project.title}</h3>
                    <dl className="case-study">
                      <div>
                        <dt>The problem</dt>
                        <dd>{project.problem}</dd>
                      </div>
                      <div>
                        <dt>What I built</dt>
                        <dd>{project.solution}</dd>
                      </div>
                    </dl>
                    <p className="project-outcome"><span>Result</span>{project.outcome}</p>
                    <ul className="tag-list" aria-label={`${project.title} technologies`}>
                      {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                    </ul>
                    {project.links.length > 0 ? (
                      <div className="project-links">
                        {project.links.map((link) => <ExternalLink key={link.url} link={link} />)}
                      </div>
                    ) : null}
                  </div>
                  <ProjectVisual visual={project.visual} />
                </article>
              ))}
            </div>

            {portfolio.testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="testimonial" data-reveal>
                <blockquote>
                  <p>“{testimonial.quote}”</p>
                </blockquote>
                <figcaption>
                  <a href={testimonial.url} target="_blank" rel="noreferrer" aria-label={`${testimonial.name} on LinkedIn (opens in a new tab)`}>
                    {testimonial.name}<ArrowUpRightIcon />
                  </a>
                  <span>{testimonial.role}, {testimonial.company}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section id="process" className="page-section" aria-labelledby="process-title">
          <div className="container-shell">
            <SectionHeading
              id="process-title"
              eyebrow="How we work together"
              title="A simple process with no surprises."
              description="You always know what is being built, when it will be ready, and what happens after launch."
            />
            <ol className="process-list" data-reveal>
              {portfolio.process.map((step, index) => (
                <li key={step.title} className="process-step">
                  <span className="process-index" aria-hidden="true">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </li>
              ))}
            </ol>
            <div className="process-cta" data-reveal>
              <p>The first call is free and there’s no obligation.</p>
              <a className="button-primary" href="#contact">
                Book a free discovery call <ArrowUpRightIcon />
              </a>
            </div>
          </div>
        </section>

        <section id="experience" className="page-section section-raised" aria-labelledby="experience-title">
          <div className="container-shell">
            <SectionHeading
              id="experience-title"
              eyebrow="Experience"
              title="Track record."
              description="The teams I’ve built production AI and backend systems for, and what changed for them."
            />
            <div className="experience-list" data-reveal>
              {portfolio.experience.map((experience, index) => (
                <article key={`${experience.company}-${experience.period}`} className="experience-card">
                  <div className="experience-index" aria-hidden="true">0{index + 1}</div>
                  <div className="experience-meta">
                    <p>{experience.period}</p>
                    <span>{experience.location}</span>
                  </div>
                  <div className="experience-content">
                    <p className="experience-type">{experience.employmentType}</p>
                    <h3>{experience.role}</h3>
                    <p className="company-name">{experience.company}</p>
                    <ul>
                      {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="writing" className="page-section" aria-labelledby="writing-title">
          <div className="container-shell">
            <div className="section-heading-row">
              <SectionHeading
                id="writing-title"
                eyebrow="Writing"
                title="Notes from the workbench."
                description="Practical write-ups on how I build and test AI and backend systems."
              />
              <a className="text-link" href="https://medium.com/@linyaungzin99" target="_blank" rel="noreferrer">
                All articles <ArrowUpRightIcon />
              </a>
            </div>
            <div className="articles-grid" data-reveal>
              {portfolio.articles.map((article) => (
                <article key={article.url} className="article-card">
                  <ArticleVisual visual={article.visual} />
                  <div className="article-card-body">
                    <div className="article-meta">
                      <span>{article.category}</span>
                      <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time>
                    </div>
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                    <a href={article.url} target="_blank" rel="noreferrer" aria-label={`Read ${article.title} on Medium`}>
                      {article.readTime}<ArrowUpRightIcon />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="credentials" className="page-section section-raised" aria-labelledby="credentials-title">
          <div className="container-shell">
            <div className="section-heading-row">
              <SectionHeading id="credentials-title" eyebrow="Background" title="Education & credentials." />
              <a className="text-link" href={resumeUrl} download>
                Download résumé (PDF) <DownloadIcon />
              </a>
            </div>
            <div className="credentials-grid" data-reveal>
              <div className="credential-panel credential-panel-wide">
                <h3>Education</h3>
                <div className="credential-stack">
                  {portfolio.education.map((education) => (
                    <article key={education.degree}>
                      <p>{education.degree}</p>
                      <span>{education.institution}</span>
                      <time>{education.period}</time>
                    </article>
                  ))}
                </div>
              </div>
              <div className="credential-panel">
                <h3>Languages</h3>
                <ul className="language-list">
                  {portfolio.languages.map((language) => (
                    <li key={language.name}><span>{language.name}</span><strong>{language.proficiency}</strong></li>
                  ))}
                </ul>
              </div>
              <div className="credential-panel credential-panel-full">
                <h3>Certifications</h3>
                <ul className="certification-list">
                  {portfolio.certifications.map((certification) => (
                    <li key={certification.name}>
                      <span>{certification.name}</span>
                      <small>{certification.issuer} · {certification.issued}</small>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="page-section contact-section" aria-labelledby="contact-title">
          <div className="container-shell contact-grid">
            <div className="contact-copy" data-reveal>
              <p className="section-eyebrow">Contact</p>
              <h2 id="contact-title">Tell me what’s slowing your team down.</h2>
              <p>Share a few details about your project and I’ll reply within 24 hours to set up a free discovery call. No commitment, no hard sell.</p>
              <a className="contact-email" href={`mailto:${portfolio.profile.email}`}>
                <MailIcon />
                <span>
                  <small>Email</small>
                  {portfolio.profile.email}
                </span>
              </a>
              <div className="contact-socials">
                {portfolio.socials.filter((social) => social.icon !== 'mail').map((social) => (
                  <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
                    <SocialIcon type={social.icon} />{social.label}<ArrowUpRightIcon />
                  </a>
                ))}
              </div>
              <p className="contact-hiring">
                Hiring for a full-time role? I’m open to the right AI or backend position.{' '}
                <a href={resumeUrl} download>Download my résumé</a>.
              </p>
            </div>
            <div className="contact-form-shell" data-reveal>
              <ContactForm email={portfolio.profile.email} formId={formId} />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container-shell footer-shell">
          <p>© {new Date().getFullYear()} {portfolio.profile.name}</p>
          <p>AI web apps · Chatbots · Automation · Backend · Bangkok (GMT+7)</p>
          <a href="#about">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App
