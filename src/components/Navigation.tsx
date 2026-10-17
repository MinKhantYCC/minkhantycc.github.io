import { useState } from 'react'
import { CloseIcon, MenuIcon } from './Icons'

const navigationItems = [
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Skills', 'skills'],
  ['Projects', 'projects'],
  ['Writing', 'writing'],
  ['Contact', 'contact'],
] as const

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container-shell nav-shell">
        <a className="brand-mark" href="#about" aria-label="Min Khant, back to top">
          <span>MK</span>
          <i aria-hidden="true" />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigationItems.map(([label, id]) => (
            <a key={id} href={`#${id}`}>{label}</a>
          ))}
        </nav>

        <a className="nav-cta" href="#contact">Let’s talk</a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className={isOpen ? 'mobile-nav mobile-nav-open' : 'mobile-nav'}
        aria-label="Mobile navigation"
      >
        {navigationItems.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setIsOpen(false)}>{label}</a>
        ))}
      </nav>
    </header>
  )
}
