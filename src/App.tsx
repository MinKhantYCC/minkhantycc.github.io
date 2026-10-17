import { ContactForm } from './components/ContactForm'
import { HeroVisual } from './components/HeroVisual'
import { ArrowUpRightIcon, DownloadIcon, LocationIcon, MailIcon, SocialIcon } from './components/Icons'
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
                  Start a conversation <ArrowUpRightIcon />
                </a>
                <a className="button-secondary" href={resumeUrl} download>
                  Download résumé <DownloadIcon />
                </a>
              </div>
              <div className="hero-meta">
                <span><LocationIcon />{portfolio.profile.location}</span>
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

        <section className="metrics-section" aria-label="Selected career impact">
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

        <section id="experience" className="page-section" aria-labelledby="experience-title">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Experience"
              title="Systems built for real constraints."
              description="Work across production AI, high-volume data services, and applied machine learning—with outcomes measured in reliability, latency, and time saved."
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

        <section id="skills" className="page-section section-raised" aria-labelledby="skills-title">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Skills"
              title="A practical AI and backend toolkit."
              description="The technologies I use to move from an uncertain problem to a monitored, testable production system."
            />
            <div className="skills-grid" data-reveal>
              {portfolio.skillGroups.map((group, index) => (
                <article key={group.name} className={index === 0 ? 'skill-card skill-card-featured' : 'skill-card'}>
                  <div className="skill-card-heading">
                    <span>0{index + 1}</span>
                    <h3>{group.name}</h3>
                  </div>
                  <ul>
                    {group.skills.map((skill) => <li key={skill}>{skill}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="page-section" aria-labelledby="projects-title">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Selected projects"
              title="Evidence, not just experiments."
              description="Three projects that show how I evaluate models, engineer supporting systems, and communicate measurable results."
            />
            <div className="projects-list" data-reveal>
              {portfolio.projects.map((project, index) => (
                <article key={project.title} className="project-card">
                  <div className="project-card-copy">
                    <p className="project-number">0{index + 1} · {project.eyebrow}</p>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <p className="project-outcome">{project.outcome}</p>
                    <ul className="tag-list" aria-label={`${project.title} technologies`}>
                      {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                    </ul>
                    <div className="project-links">
                      {project.links.map((link) => <ExternalLink key={link.url} link={link} />)}
                    </div>
                  </div>
                  <ProjectVisual visual={project.visual} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="writing" className="page-section section-raised" aria-labelledby="writing-title">
          <div className="container-shell">
            <div className="section-heading-row">
              <SectionHeading
                eyebrow="Writing"
                title="Notes from the workbench."
                description="Practical walkthroughs and technical explorations from model tuning to production deployment."
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

        <section id="credentials" className="page-section" aria-labelledby="credentials-title">
          <div className="container-shell">
            <SectionHeading eyebrow="Credentials" title="A foundation built across disciplines." />
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
              <h2 id="contact-title">Let’s build something reliable.</h2>
              <p>If you’re hiring for an AI or backend role, or need help making an AI workflow production-ready, I’d like to hear about it.</p>
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
          <p>AI systems · Backend architecture · Bangkok</p>
          <a href="#about">Back to top ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App
