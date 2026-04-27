type HeroVisualProps = {
  className?: string;
  /** Visual seed — different value per page gives a unique star pattern. */
  seed?: number;
};

const TICK_COUNT = 36;
const STAR_COUNT = 90;

const NODES: { id: string; x: number; y: number }[] = [
  { id: "core", x: 300, y: 300 },
  { id: "n1", x: 300, y: 130 },
  { id: "n2", x: 460, y: 240 },
  { id: "n3", x: 470, y: 410 },
  { id: "n4", x: 320, y: 470 },
  { id: "n5", x: 150, y: 420 },
  { id: "n6", x: 130, y: 230 },
];

const EDGES: [string, string][] = [
  ["n1", "core"],
  ["n2", "core"],
  ["n3", "core"],
  ["n4", "core"],
  ["n5", "core"],
  ["n6", "core"],
  ["n1", "n2"],
  ["n2", "n3"],
  ["n3", "n4"],
  ["n4", "n5"],
  ["n5", "n6"],
  ["n6", "n1"],
];

function nodeById(id: string) {
  return NODES.find((n) => n.id === id)!;
}

function generateStars(seed: number) {
  // Simple deterministic LCG so SSR + client output identical values.
  let s = seed * 9301 + 49297;
  const next = () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
  return Array.from({ length: STAR_COUNT }, (_, i) => ({
    x: Math.round(next() * 600),
    y: Math.round(next() * 600),
    r: 0.4 + next() * 0.9,
    o: 0.18 + next() * 0.42,
    delay: (i % 8) * 0.4,
  }));
}

export default function HeroVisual({ className = "", seed = 7 }: HeroVisualProps) {
  const stars = generateStars(seed);

  return (
    <svg
      viewBox="0 0 600 600"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`hero-visual ${className}`.trim()}
    >
      <defs>
        <radialGradient id="hv-core-glow" cx="50%" cy="50%" r="50%">
          <stop
            offset="0%"
            stopColor="rgb(var(--accent-r), var(--accent-g), var(--accent-b))"
            stopOpacity="0.5"
          />
          <stop
            offset="100%"
            stopColor="rgb(var(--accent-r), var(--accent-g), var(--accent-b))"
            stopOpacity="0"
          />
        </radialGradient>
      </defs>

      {/* Soft core glow */}
      <circle cx="300" cy="300" r="180" fill="url(#hv-core-glow)" />

      {/* Concentric orbital rings */}
      <g
        fill="none"
        stroke="rgba(var(--accent-r), var(--accent-g), var(--accent-b), 0.22)"
        strokeWidth="0.6"
      >
        <circle cx="300" cy="300" r="120" />
        <circle cx="300" cy="300" r="200" />
        <circle cx="300" cy="300" r="280" />
      </g>

      {/* Slow-rotating tick ring (outermost) */}
      <g className="hero-orbit-rotate" style={{ transformOrigin: "300px 300px" }}>
        <g stroke="rgba(var(--accent-r), var(--accent-g), var(--accent-b), 0.28)" strokeWidth="0.6">
          {Array.from({ length: TICK_COUNT }).map((_, i) => {
            const a = (i * Math.PI * 2) / TICK_COUNT;
            const r1 = 290;
            const r2 = i % 3 === 0 ? 302 : 296;
            const x1 = 300 + Math.cos(a) * r1;
            const y1 = 300 + Math.sin(a) * r1;
            const x2 = 300 + Math.cos(a) * r2;
            const y2 = 300 + Math.sin(a) * r2;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </g>
      </g>

      {/* Background star field */}
      <g fill="#ffffff">
        {stars.map((s, i) => (
          <circle
            key={i}
            cx={s.x}
            cy={s.y}
            r={s.r}
            opacity={s.o}
            className="hero-star"
            style={{ animationDelay: `${s.delay}s` }}
          />
        ))}
      </g>

      {/* Edges connecting highlighted nodes */}
      <g
        stroke="rgba(var(--accent-r), var(--accent-g), var(--accent-b), 0.38)"
        strokeWidth="0.7"
      >
        {EDGES.map(([a, b], i) => {
          const na = nodeById(a);
          const nb = nodeById(b);
          return <line key={i} x1={na.x} y1={na.y} x2={nb.x} y2={nb.y} />;
        })}
      </g>

      {/* Highlighted nodes with halo + pulse */}
      <g>
        {NODES.map((n, i) => (
          <g key={n.id} className={`hero-node hero-node--${(i % 3) + 1}`}>
            <circle
              cx={n.x}
              cy={n.y}
              r="7"
              fill="rgba(var(--accent-r), var(--accent-g), var(--accent-b), 0.18)"
            />
            <circle
              cx={n.x}
              cy={n.y}
              r="2.4"
              fill="rgb(var(--accent-r), var(--accent-g), var(--accent-b))"
            />
          </g>
        ))}
      </g>

      {/* Crosshair through center — gives "scope" feel */}
      <g
        stroke="rgba(var(--accent-r), var(--accent-g), var(--accent-b), 0.22)"
        strokeWidth="0.5"
      >
        <line x1="300" y1="20" x2="300" y2="60" />
        <line x1="300" y1="540" x2="300" y2="580" />
        <line x1="20" y1="300" x2="60" y2="300" />
        <line x1="540" y1="300" x2="580" y2="300" />
      </g>
    </svg>
  );
}
