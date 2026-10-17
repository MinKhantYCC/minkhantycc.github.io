import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, vi } from 'vitest'
import { ContactForm } from './ContactForm'

afterEach(() => {
  vi.unstubAllGlobals()
})

async function fillForm() {
  const user = userEvent.setup()
  await user.type(screen.getByLabelText('Name'), 'Ada Lovelace')
  await user.type(screen.getByLabelText('Email'), 'ada@example.com')
  await user.type(screen.getByLabelText('Subject'), 'AI engineering role')
  await user.type(screen.getByLabelText('Message'), 'I would like to discuss a production AI role.')
  return user
}

describe('ContactForm', () => {
  it('shows a working email fallback without Formspree configuration', () => {
    render(<ContactForm email="minkhant.nexus@gmail.com" />)
    expect(screen.getByTestId('contact-fallback')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /email min/i })).toHaveAttribute('href', 'mailto:minkhant.nexus@gmail.com')
  })

  it('validates required fields before submitting', async () => {
    const user = userEvent.setup()
    const fetchMock = vi.fn()
    vi.stubGlobal('fetch', fetchMock)
    render(<ContactForm email="minkhant.nexus@gmail.com" formId="test-form" />)

    await user.click(screen.getByRole('button', { name: 'Send message' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please complete every field')
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('submits to Formspree and displays the success state', async () => {
    const fetchMock = vi.fn().mockResolvedValue({ ok: true })
    vi.stubGlobal('fetch', fetchMock)
    render(<ContactForm email="minkhant.nexus@gmail.com" formId="test-form" />)
    const user = await fillForm()

    await user.click(screen.getByRole('button', { name: 'Send message' }))
    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1))
    expect(fetchMock).toHaveBeenCalledWith('https://formspree.io/f/test-form', expect.objectContaining({ method: 'POST' }))
    expect(await screen.findByRole('status')).toHaveTextContent('Thank you for reaching out.')
  })

  it('offers an email fallback after a failed submission', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false }))
    render(<ContactForm email="minkhant.nexus@gmail.com" formId="test-form" />)
    const user = await fillForm()

    await user.click(screen.getByRole('button', { name: 'Send message' }))
    expect(await screen.findByRole('alert')).toHaveTextContent('Please email minkhant.nexus@gmail.com instead.')
    expect(screen.getByRole('button', { name: 'Send message' })).toBeEnabled()
  })
})
