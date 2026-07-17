/* Hexagon monogram — the brand mark. */
export default function Hexagon({size = 34, label = "OP", className = ""}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 44"
      className={className}
      role="img"
      aria-label="Om Patel monogram"
    >
      <defs>
        <linearGradient id="hexgrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#00e5a0" />
          <stop offset="1" stopColor="#22d3ee" />
        </linearGradient>
      </defs>
      <path
        d="M20 1.6 L37 11 V33 L20 42.4 L3 33 V11 Z"
        fill="none"
        stroke="url(#hexgrad)"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <text
        x="20"
        y="27"
        textAnchor="middle"
        fontFamily="'Space Grotesk', sans-serif"
        fontSize="13"
        fontWeight="600"
        fill="currentColor"
      >
        {label}
      </text>
    </svg>
  );
}
