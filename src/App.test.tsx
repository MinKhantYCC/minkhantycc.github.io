import axe from 'axe-core'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('portfolio application', () => {
  it('renders every required section from portfolio data', () => {
    render(<App />)

    for (const id of ['about', 'services', 'skills', 'work', 'process', 'experience', 'writing', 'credentials', 'contact']) {
      expect(document.getElementById(id)).toBeInTheDocument()
    }

    expect(screen.getByRole('heading', { level: 1, name: 'AI tools that take busywork off your team.' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'AI chatbots & assistants' })).toBeInTheDocument()
    expect(screen.getByText('WhatsApp AI Customer Assistant')).toBeInTheDocument()
    expect(screen.getByText('Alferd RAG Document Assistant')).toBeInTheDocument()
    expect(screen.getByText(/one of the most talented and adaptable engineers/)).toBeInTheDocument()
    expect(screen.getByText('Project Manager, Canopus Can-Trading Co., Ltd.')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '30 days of support' })).toBeInTheDocument()
    expect(screen.getByText('FAISS Indexing Methods in Practice')).toBeInTheDocument()
    expect(screen.getByText('Fine-Tuning Meta’s NLLB-200 (1.3B)')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send project details' })).toBeInTheDocument()
    expect(screen.queryByTestId('contact-fallback')).not.toBeInTheDocument()
  })

  it('leads with a discovery call and keeps the résumé available', () => {
    render(<App />)

    const callLinks = screen.getAllByRole('link', { name: /book a free discovery call/i })
    expect(callLinks.length).toBeGreaterThan(0)
    for (const link of callLinks) {
      expect(link).toHaveAttribute('href', '#contact')
    }

    const resumeLinks = screen.getAllByRole('link', { name: /résumé/i })
    expect(resumeLinks.length).toBeGreaterThan(0)
    for (const link of resumeLinks) {
      expect(link).toHaveAttribute('href', '/resume/min-khant-resume.pdf')
      expect(link).toHaveAttribute('download')
    }

    const testimonialLink = screen.getByRole('link', { name: 'Hlan Pyae on LinkedIn (opens in a new tab)' })
    expect(testimonialLink).toHaveAttribute('target', '_blank')
    expect(testimonialLink).toHaveAttribute('rel', 'noreferrer')

    const githubLink = screen.getByRole('link', { name: 'GitHub (opens in a new tab)' })
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noreferrer')

    const faissArticleLink = screen.getByRole('link', { name: 'Read FAISS Indexing Methods in Practice on Medium' })
    expect(faissArticleLink).toHaveAttribute('target', '_blank')
    expect(faissArticleLink).toHaveAttribute('rel', 'noreferrer')
  })

  it('opens and closes the mobile navigation', async () => {
    const user = userEvent.setup()
    render(<App />)

    const menuButton = screen.getByRole('button', { name: 'Open navigation menu' })
    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')

    const mobileNavigation = screen.getByRole('navigation', { name: 'Mobile navigation' })
    const contactLink = mobileNavigation.querySelector('a[href="#contact"]')
    expect(contactLink).toBeInTheDocument()
    await user.click(contactLink!)
    expect(screen.getByRole('button', { name: 'Open navigation menu' })).toHaveAttribute('aria-expanded', 'false')
  })

  it('has no detectable automated accessibility violations', async () => {
    const { container } = render(<App />)
    const results = await axe.run(container, {
      rules: {
        'color-contrast': { enabled: false },
      },
    })
    expect(results.violations).toEqual([])
  })
})
