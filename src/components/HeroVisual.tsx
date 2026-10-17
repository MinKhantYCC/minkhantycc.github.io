export function HeroVisual() {
  return (
    <div className="hero-visual" data-reveal aria-hidden="true">
      <div className="hero-visual-canvas">
        <svg viewBox="0 0 620 520" role="presentation">
        <defs>
          <linearGradient id="lineGlow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#5e6ad2" stopOpacity=".15" />
            <stop offset=".5" stopColor="#8f97ff" stopOpacity=".95" />
            <stop offset="1" stopColor="#5e6ad2" stopOpacity=".1" />
          </linearGradient>
          <radialGradient id="nodeGlow">
            <stop offset="0" stopColor="#939aff" stopOpacity=".35" />
            <stop offset="1" stopColor="#5e6ad2" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g opacity=".22" stroke="#4a4d55" strokeWidth="1">
          <path d="M30 82h560M30 164h560M30 246h560M30 328h560M30 410h560" />
          <path d="M110 32v456M210 32v456M310 32v456M410 32v456M510 32v456" />
        </g>

        <circle cx="310" cy="250" r="145" fill="url(#nodeGlow)" />
        <g fill="none" stroke="url(#lineGlow)" strokeWidth="2">
          <path d="M149 120c42 0 50 86 91 86h44" />
          <path d="M149 384c42 0 50-85 91-85h44" />
          <path d="M471 112c-42 0-48 92-94 92h-40" />
          <path d="M471 393c-42 0-48-94-94-94h-40" />
          <path d="M310 101v75M310 326v93" />
        </g>

        <g>
          <circle cx="310" cy="252" r="73" fill="#0f1011" stroke="#373a43" strokeWidth="2" />
          <circle cx="310" cy="252" r="56" fill="#141516" stroke="#5e6ad2" strokeOpacity=".8" />
          <path d="M277 253h66M310 220v66" stroke="#8f97ff" strokeWidth="1.5" strokeDasharray="4 5" />
          <circle cx="310" cy="252" r="12" fill="#5e6ad2" />
          <circle cx="310" cy="252" r="4" fill="#fff" />
        </g>

        <g fill="#141516" stroke="#34343a">
          <rect x="45" y="88" width="104" height="64" rx="10" />
          <rect x="471" y="80" width="104" height="64" rx="10" />
          <rect x="45" y="352" width="104" height="64" rx="10" />
          <rect x="471" y="361" width="104" height="64" rx="10" />
          <rect x="257" y="38" width="106" height="62" rx="10" />
          <rect x="257" y="419" width="106" height="62" rx="10" />
        </g>

        <g
          fill="#f7f8f8"
          fontFamily="Inter, sans-serif"
          fontSize="12"
          fontWeight="600"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          <text x="97" y="120">DOCUMENTS</text>
          <text x="523" y="112">RETRIEVAL</text>
          <text x="97" y="384">FASTAPI</text>
          <text x="523" y="393">TOOLS</text>
          <text x="310" y="69">EMBEDDINGS</text>
          <text x="310" y="450">EVALUATION</text>
        </g>
        <g fill="#8f97ff">
          <circle cx="149" cy="120" r="5" />
          <circle cx="471" cy="112" r="5" />
          <circle cx="149" cy="384" r="5" />
          <circle cx="471" cy="393" r="5" />
          <circle cx="310" cy="100" r="5" />
          <circle cx="310" cy="419" r="5" />
        </g>
        </svg>
      </div>
      <div className="hero-visual-status">
        <span className="status-dot" />
        production system online
      </div>
    </div>
  )
}
