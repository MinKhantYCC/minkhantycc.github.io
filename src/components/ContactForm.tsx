import { useState, type FormEvent } from 'react'
import { ArrowUpRightIcon, CheckIcon, MailIcon } from './Icons'

interface ContactFormProps {
  email: string
  formId?: string
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

function getField(formData: FormData, field: string) {
  return String(formData.get(field) ?? '').trim()
}

export function ContactForm({ email, formId }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  if (!formId) {
    return (
      <div className="contact-fallback" data-testid="contact-fallback">
        <div className="contact-fallback-icon"><MailIcon /></div>
        <p className="contact-fallback-kicker">Direct email</p>
        <h3>Start a conversation</h3>
        <p>The contact form activates when Formspree is configured. Email works right now.</p>
        <a className="button-primary" href={`mailto:${email}`}>
          Email Min <ArrowUpRightIcon />
        </a>
      </div>
    )
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const name = getField(formData, 'name')
    const senderEmail = getField(formData, 'email')
    const subject = getField(formData, 'subject')
    const message = getField(formData, 'message')

    if (!name || !senderEmail || !subject || !message) {
      setErrorMessage('Please complete every field before sending.')
      setStatus('error')
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (!response.ok) {
        throw new Error('Formspree rejected the submission')
      }

      form.reset()
      setStatus('success')
    } catch {
      setErrorMessage(`The message could not be sent. Please email ${email} instead.`)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-success" role="status">
        <div className="success-icon"><CheckIcon /></div>
        <p className="contact-fallback-kicker">Message sent</p>
        <h3>Thank you for reaching out.</h3>
        <p>I’ll reply as soon as I can.</p>
        <button className="button-secondary" type="button" onClick={() => setStatus('idle')}>
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required placeholder="Your name" />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required placeholder="you@company.com" />
        </label>
      </div>
      <label>
        <span>Subject</span>
        <input name="subject" type="text" required placeholder="Role, project, or collaboration" />
      </label>
      <label>
        <span>Message</span>
        <textarea name="message" rows={5} required placeholder="Tell me a little about what you’re building." />
      </label>
      <label className="honeypot" aria-hidden="true">
        Do not fill this field
        <input name="_gotcha" type="text" tabIndex={-1} autoComplete="off" />
      </label>
      {status === 'error' ? <p className="form-error" role="alert">{errorMessage}</p> : null}
      <button className="button-primary form-submit" type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send message'}
        {status === 'submitting' ? null : <ArrowUpRightIcon />}
      </button>
    </form>
  )
}
