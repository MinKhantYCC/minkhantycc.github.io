export function ProjectVisual({ visual }: { visual: string }) {
  if (visual === 'translation') {
    return (
      <div className="project-visual" aria-hidden="true">
        <svg viewBox="0 0 520 220" role="presentation">
          <g fill="none" stroke="currentColor" strokeWidth="1.4">
            <rect x="28" y="55" width="112" height="110" rx="12" />
            <rect x="204" y="40" width="112" height="140" rx="12" />
            <rect x="380" y="55" width="112" height="110" rx="12" />
            <path d="M140 110h64M316 110h64" strokeDasharray="5 5" />
            <path d="m192 102 12 8-12 8M368 102l12 8-12 8" />
          </g>
          <g fill="currentColor" fontFamily="Inter, sans-serif" textAnchor="middle">
            <text x="84" y="93" fontSize="13" opacity=".65">MYANMAR</text>
            <text x="84" y="126" fontSize="26" fontWeight="700">မင်္ဂလာပါ</text>
            <text x="260" y="88" fontSize="12" opacity=".65">NLLB · LoRA</text>
            <text x="260" y="120" fontSize="22" fontWeight="700">4-bit</text>
            <text x="260" y="144" fontSize="11" opacity=".65">1.3B parameters</text>
            <text x="436" y="93" fontSize="13" opacity=".65">ENGLISH</text>
            <text x="436" y="126" fontSize="18" fontWeight="700">Hello</text>
          </g>
        </svg>
      </div>
    )
  }

  if (visual === 'classification') {
    return (
      <div className="project-visual" aria-hidden="true">
        <svg viewBox="0 0 520 220" role="presentation">
          <g fill="none" stroke="currentColor" strokeWidth="1.4">
            <path d="M54 164V52h418M54 164h418" opacity=".45" />
            <path d="M82 148c42-8 51-61 92-54s51 54 93 36 45-71 88-62 52 46 89 24" />
            <path d="M82 148c42-8 51-61 92-54s51 54 93 36 45-71 88-62 52 46 89 24" stroke="#8f97ff" strokeWidth="3" />
          </g>
          <g fill="#8f97ff">
            <circle cx="82" cy="148" r="5" /><circle cx="174" cy="94" r="5" />
            <circle cx="267" cy="130" r="5" /><circle cx="355" cy="68" r="5" /><circle cx="444" cy="92" r="5" />
          </g>
          <g fill="currentColor" fontFamily="ui-monospace, monospace" fontSize="11">
            <text x="75" y="190">features</text>
            <text x="393" y="190">prediction</text>
            <text x="390" y="48" fontSize="13">accuracy 0.77</text>
          </g>
        </svg>
      </div>
    )
  }

  return (
    <div className="project-visual" aria-hidden="true">
      <svg viewBox="0 0 520 220" role="presentation">
        <g fill="none" stroke="currentColor" strokeWidth="1.4">
          <rect x="26" y="70" width="92" height="80" rx="12" />
          <rect x="214" y="50" width="92" height="120" rx="12" />
          <rect x="402" y="70" width="92" height="80" rx="12" />
          <path d="M118 110h96M306 110h96" strokeDasharray="5 5" />
          <path d="m202 102 12 8-12 8M390 102l12 8-12 8" />
          <circle cx="260" cy="110" r="29" stroke="#8f97ff" strokeWidth="2" />
        </g>
        <g fill="currentColor" fontFamily="Inter, sans-serif" textAnchor="middle">
          <text x="72" y="106" fontSize="12" opacity=".65">PDF</text>
          <text x="72" y="127" fontSize="11">knowledge</text>
          <text x="260" y="114" fontSize="13" fontWeight="700">RAG</text>
          <text x="448" y="106" fontSize="12" opacity=".65">ANSWER</text>
          <text x="448" y="127" fontSize="11">grounded</text>
        </g>
      </svg>
    </div>
  )
}

export function ArticleVisual({ visual }: { visual: string }) {
  return (
    <div className="article-visual" aria-hidden="true">
      {visual === 'indexing' ? (
        <svg viewBox="0 0 180 110" role="presentation">
          <g fill="none" stroke="currentColor">
            <circle cx="34" cy="55" r="8" />
            <circle cx="72" cy="28" r="8" />
            <circle cx="72" cy="82" r="8" />
            <circle cx="110" cy="42" r="8" />
            <circle cx="110" cy="68" r="8" />
            <circle cx="148" cy="55" r="8" />
            <path d="m42 51 22-18m-22 26 22 18m16-47 22 9m-22 39 22-9m16-24 22 8m-22 12 22-8" />
          </g>
          <path d="M34 55 72 28l38 14 38 13" fill="none" stroke="#8f97ff" strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="148" cy="55" r="4" fill="#8f97ff" />
        </svg>
      ) : visual === 'language' ? (
        <svg viewBox="0 0 180 110" role="presentation">
          <path d="M25 30h52v48H25zM103 30h52v48h-52zM77 54h26" fill="none" stroke="currentColor" />
          <text x="51" y="60" textAnchor="middle" fill="currentColor" fontSize="17" fontWeight="700">မြန်</text>
          <text x="129" y="60" textAnchor="middle" fill="currentColor" fontSize="16" fontWeight="700">EN</text>
          <path d="m95 48 8 6-8 6" fill="none" stroke="#8f97ff" strokeWidth="2" />
        </svg>
      ) : visual === 'retrieval' ? (
        <svg viewBox="0 0 180 110" role="presentation">
          <g fill="none" stroke="currentColor">
            <circle cx="38" cy="55" r="9" /><circle cx="90" cy="28" r="9" /><circle cx="90" cy="82" r="9" /><circle cx="142" cy="55" r="9" />
            <path d="m47 51 34-18M47 59l34 18M99 32l34 18M99 78l34-18" />
          </g>
          <circle cx="142" cy="55" r="4" fill="#8f97ff" />
        </svg>
      ) : (
        <svg viewBox="0 0 180 110" role="presentation">
          <path d="M48 70c-14 0-22-9-22-20 0-12 10-21 23-21 7-13 20-20 35-20 21 0 38 14 41 33 16 0 29 11 29 25 0 15-13 26-30 26H51" transform="translate(0 3) scale(.96)" fill="none" stroke="currentColor" />
          <rect x="66" y="43" width="48" height="31" rx="5" fill="none" stroke="#8f97ff" strokeWidth="2" />
          <path d="M76 53h17M76 62h28" stroke="#8f97ff" />
        </svg>
      )}
    </div>
  )
}
