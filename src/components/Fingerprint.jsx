/**
 * Animated biometric scanner — concentric ridges draw in, a scan line
 * sweeps, and an "AUTHENTICATED" badge resolves. Pure decoration.
 */
export default function Fingerprint({id = ""}) {
  const ridges = [20, 32, 44, 56, 68, 80];
  return (
    <div className="fp" aria-hidden="true">
      <div className="fp-frame">
        <span className="fp-corner tl" />
        <span className="fp-corner tr" />
        <span className="fp-corner bl" />
        <span className="fp-corner br" />

        <svg viewBox="0 0 200 210" className="fp-svg">
          <defs>
            <linearGradient id="fpg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#00e5a0" />
              <stop offset="1" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          <g
            className="fp-ridges"
            stroke="url(#fpg)"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            {ridges.map((r, i) => (
              <ellipse
                key={i}
                className="fp-ridge"
                cx="100"
                cy="100"
                rx={r * 0.82}
                ry={r}
                strokeDasharray={`${r * 2.1} ${r * 0.6}`}
                strokeDashoffset={r * 0.3}
                style={{"--i": i}}
              />
            ))}
            <circle className="fp-core" cx="100" cy="100" r="5.5" fill="url(#fpg)" />
          </g>
          <line className="fp-scan" x1="20" x2="180" y1="26" y2="26" stroke="#00e5a0" strokeWidth="2" />
        </svg>

        <div className="fp-badge mono">
          <span className="fp-check">✓</span> AUTHENTICATED
        </div>
      </div>
      {id ? <div className="fp-meta mono">ID // {id}</div> : null}
    </div>
  );
}
