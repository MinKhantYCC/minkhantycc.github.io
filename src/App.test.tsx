import axe from 'axe-core'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

describe('portfolio application', () => {
  it('renders every required section from portfolio data', () => {
    render(<App />)

    for (const id of ['about', 'experience', 'skills', 'projects', 'writing', 'credentials', 'contact']) {
      expect(document.getElementById(id)).toBeInTheDocument()
    }

    expect(screen.getByRole('heading', { name: 'I build AI systems that survive production.' })).toBeInTheDocument()
    expect(screen.getByText('Alferd RAG Document Assistant')).toBeInTheDocument()
    expect(screen.getByText('FAISS Indexing Methods in Practice')).toBeInTheDocument()
    expect(screen.getByText('Fine-Tuning Meta’s NLLB-200 (1.3B)')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send message' })).toBeInTheDocument()
    expect(screen.queryByTestId('contact-fallback')).not.toBeInTheDocument()
  })

  it('links to the résumé and protects external links', () => {
    render(<App />)

    const resumeLink = screen.getByRole('link', { name: /download résumé/i })
    expect(resumeLink).toHaveAttribute('href', '/resume/min-khant-resume.pdf')
    expect(resumeLink).toHaveAttribute('download')

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
