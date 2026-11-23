export interface SocialLink {
  label: string
  url: string
  icon: string
}

export interface Metric {
  value: string
  label: string
  detail: string
}

export interface ExperienceEntry {
  role: string
  company: string
  employmentType: string
  location: string
  period: string
  highlights: string[]
}

export interface SkillGroup {
  name: string
  skills: string[]
}

export interface ProjectLink {
  label: string
  url: string
}

export interface Project {
  title: string
  eyebrow: string
  problem: string
  solution: string
  outcome: string
  visual: string
  technologies: string[]
  links: ProjectLink[]
}

export interface TrustPoint {
  title: string
  detail: string
}

export interface Service {
  title: string
  summary: string
  deliverables: string[]
  proof: string
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
  url: string
}

export interface ProcessStep {
  title: string
  detail: string
}

export interface Article {
  title: string
  excerpt: string
  category: string
  publishedAt: string
  readTime: string
  url: string
  visual: string
}

export interface EducationEntry {
  degree: string
  institution: string
  period: string
}

export interface Certification {
  name: string
  issuer: string
  issued: string
}

export interface Language {
  name: string
  proficiency: string
}

export interface PortfolioData {
  seo: {
    title: string
    description: string
  }
  profile: {
    name: string
    role: string
    location: string
    timezone: string
    email: string
    availability: string
    heroIntro: string
    summary: string
    resumePath: string
  }
  socials: SocialLink[]
  trustPoints: TrustPoint[]
  metrics: Metric[]
  services: Service[]
  projects: Project[]
  testimonials: Testimonial[]
  process: ProcessStep[]
  experience: ExperienceEntry[]
  skillGroups: SkillGroup[]
  articles: Article[]
  education: EducationEntry[]
  certifications: Certification[]
  languages: Language[]
}
