import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const iconDefaults = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <path d="M7 17 17 7M7 7h10v10" />
    </svg>
  )
}

export function DownloadIcon(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
    </svg>
  )
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  )
}

export function LocationIcon(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...iconDefaults} {...props}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  )
}

export function SocialIcon({ type, ...props }: IconProps & { type: string }) {
  if (type === 'github') {
    return (
      <svg {...iconDefaults} {...props} viewBox="0 0 24 24">
        <path d="M15 22v-4c.1-1-.3-2-1-2.5 3 0 6-1.5 6-6a4.7 4.7 0 0 0-1.2-3.3A4.4 4.4 0 0 0 18.7 3S17.7 2.7 15 4.2a11 11 0 0 0-6 0C6.3 2.7 5.3 3 5.3 3a4.4 4.4 0 0 0-.1 3.2A4.7 4.7 0 0 0 4 9.5c0 4.5 3 6 6 6-.5.4-.8 1-.9 1.7-.1.8 0 3.8 0 4.8M9 19c-3 .9-3-1.5-4.2-2" />
      </svg>
    )
  }

  if (type === 'linkedin') {
    return (
      <svg {...iconDefaults} {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  }

  if (type === 'medium') {
    return (
      <svg {...iconDefaults} {...props} fill="currentColor" stroke="none">
        <path d="M2 5.5a.7.7 0 0 0-.2-.6L.3 3.1V2.8H7l5.3 11.6L17 2.8h6.5v.3l-1.3 1.2c-.1.1-.2.3-.1.5v14.3c0 .2 0 .4.1.5l1.3 1.2v.3H17v-.3l1.3-1.2c.1-.1.1-.2.1-.5V7.6l-5.9 13.5H12L5.1 7.6v9.7c0 .4.1.8.3 1.1l1.7 2.1v.3H2.2v-.3l1.7-2.1c.2-.3.3-.7.3-1.1V5.5Z" />
      </svg>
    )
  }

  return <MailIcon {...props} />
}
