type IconProps = {
  name: string
  size?: number
  className?: string
}

/** Iconos en línea (sin dependencias). Trazo que hereda el color del texto. */
const stroke: Record<string, JSX.Element> = {
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="3.2" />
      <path d="M2.5 19.5c0-3.3 2.9-5.2 6.5-5.2s6.5 1.9 6.5 5.2" />
      <path d="M16.5 6.4a3 3 0 0 1 0 5.7" />
      <path d="M18 14.5c2.2.5 3.5 2 3.5 4.3" />
    </>
  ),
  child: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 10h.01M15 10h.01" />
      <path d="M9 14.5c.9.8 2 1.2 3 1.2s2.1-.4 3-1.2" />
    </>
  ),
  arrow: <path d="M5 12h13M13 6l6 6-6 6" />,
  arrowUp: <path d="M7 17 17 7M8.5 7H17v8.5" />,
  chevron: <path d="M6 9.5l6 6 6-6" />,
  check: <path d="M5 12.5l4.2 4.2L19 7" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="16" rx="2.5" />
      <path d="M8 3v4M16 3v4M3.5 10h17" />
    </>
  ),
  video: (
    <>
      <rect x="3" y="6" width="13" height="12" rx="2.5" />
      <path d="M16 10l5-3v10l-5-3z" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21c4.5-4.2 7-7.6 7-11a7 7 0 1 0-14 0c0 3.4 2.5 6.8 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
  heart: <path d="M12 20s-7-4.4-9.2-8.6C1.3 8.5 2.7 5 6 5c2 0 3.2 1.2 4 2.4C10.8 6.2 12 5 14 5c3.3 0 4.7 3.5 3.2 6.4C19 15.6 12 20 12 20z" />,
  sparkle: <path d="M12 3l1.8 5.6L19.5 10l-5.7 1.4L12 17l-1.8-5.6L4.5 10l5.7-1.4z" />,
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </>
  ),
  book: (
    <>
      <path d="M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15.5H6.5A1.5 1.5 0 0 0 5 20z" />
      <path d="M5 18.5h14" />
    </>
  ),
  message: (
    <>
      <path d="M4 5.5h16v11H9l-4 3.5v-3.5H4z" />
    </>
  ),
}

const filled: Record<string, JSX.Element> = {
  play: <path d="M8 5.2v13.6L19 12z" />,
  quote: (
    <path d="M10 6c-2.6 0-4.3 2-4.3 4.7V18H11v-6.4H8.2C8.4 9.9 9 9.2 10 9zM20 6c-2.6 0-4.3 2-4.3 4.7V18H21v-6.4h-2.8c.2-1.7.8-2.4 1.8-2.6z" />
  ),
  whatsapp: (
    <path d="M17.6 6.3A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.9 11.9L4 20l4.2-1.1A7.93 7.93 0 0 0 12 19.9 7.94 7.94 0 0 0 17.6 6.3ZM12 18.6a6.6 6.6 0 0 1-3.4-.9l-.24-.15-2.5.65.67-2.43-.16-.25A6.6 6.6 0 1 1 12 18.6Zm3.6-4.95c-.2-.1-1.17-.58-1.35-.64s-.31-.1-.44.1-.5.64-.62.77-.23.15-.43.05a5.4 5.4 0 0 1-1.6-1 6 6 0 0 1-1.1-1.37c-.12-.2 0-.31.09-.41s.2-.23.3-.35a1.36 1.36 0 0 0 .2-.33.37.37 0 0 0 0-.35c0-.1-.44-1.06-.6-1.45s-.32-.33-.44-.34h-.38a.72.72 0 0 0-.52.24 2.18 2.18 0 0 0-.68 1.62 3.79 3.79 0 0 0 .8 2 8.7 8.7 0 0 0 3.33 2.94c.47.2.83.32 1.11.41a2.69 2.69 0 0 0 1.23.08 2 2 0 0 0 1.31-.93 1.63 1.63 0 0 0 .11-.92c-.04-.09-.17-.14-.37-.24Z" />
  ),
  youtube: (
    <path d="M21.6 7.2c-.2-.9-.9-1.6-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.8c.2.9.9 1.6 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.6.4-4.8.4-4.8s0-3.2-.4-4.8zM10 15V9l5 3z" />
  ),
  facebook: (
    <path d="M14 9V7.5c0-.8.2-1.3 1.4-1.3H17V3.2C16.4 3.1 15.4 3 14.3 3 11.9 3 10.3 4.5 10.3 7.1V9H8v3.2h2.3V21H14v-8.8h2.5l.4-3.2z" />
  ),
}

export function Icon({ name, size = 22, className }: IconProps) {
  const isFilled = name in filled
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      fill={isFilled ? 'currentColor' : 'none'}
      stroke={isFilled ? 'none' : 'currentColor'}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {isFilled ? filled[name] : stroke[name] ?? stroke.user}
    </svg>
  )
}
