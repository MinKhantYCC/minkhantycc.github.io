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
  description: string
  outcome: string
  visual: string
  technologies: string[]
  links: ProjectLink[]
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
    email: string
    availability: string
    heroIntro: string
    summary: string
    resumePath: string
  }
  socials: SocialLink[]
  metrics: Metric[]
  experience: ExperienceEntry[]
  skillGroups: SkillGroup[]
  projects: Project[]
  articles: Article[]
  education: EducationEntry[]
  certifications: Certification[]
  languages: Language[]
}
