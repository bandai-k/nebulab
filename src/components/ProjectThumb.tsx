import type { Project } from "@/data/projects";

type ProjectThumbProps = {
  project: Project;
  className?: string;
};

function hashSeed(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function makeRng(seed: number) {
  let s = (seed * 9301 + 49297) || 1;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

const VIEW_W = 600;
const VIEW_H = 340;

/* ─────────────  ORBIT (AI PRODUCT)  ───────────── */
function OrbitPattern({ seed }: { seed: number }) {
  const rng = makeRng(seed);
  const stars = Array.from({ length: 28 }, () => ({
    x: Math.round(rng() * VIEW_W),
    y: Math.round(rng() * VIEW_H),
    r: 0.4 + rng() * 0.7,
    o: 0.18 + rng() * 0.4,
  }));

  const cx = 300;
  const cy = 170;
  // 4 satellite nodes around center, angles seeded
  const baseAngle = rng() * Math.PI * 2;
  const nodes = Array.from({ length: 4 }, (_, i) => {
    const a = baseAngle + (i * Math.PI * 2) / 4 + (rng() - 0.5) * 0.6;
    const radius = 90 + rng() * 60;
    return {
      x: cx + Math.cos(a) * radius,
      y: cy + Math.sin(a) * radius * 0.55,
    };
  });

  return (
    <>
      {/* Concentric orbits */}
      <g
        fill="none"
        stroke="rgba(var(--accent-r), var(--accent-g), var(--accent-b), 0.22)"
        strokeWidth="0.5"
      >
        <ellipse cx={cx} cy={cy} rx="80" ry="44" />
        <ellipse cx={cx} cy={cy} rx="140" ry="78" />
        <ellipse cx={cx} cy={cy} rx="200" ry="110" />
      </g>

      {/* Stars */}
      <g fill="#ffffff">
        {stars.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r={s.r} opacity={s.o} />
        ))}
      </g>

      {/* Edges */}
      <g
        stroke="rgba(var(--accent-r), var(--accent-g), var(--accent-b), 0.35)"
        strokeWidth="0.6"
      >
        {nodes.map((n, i) => (
          <line key={i} x1={cx} y1={cy} x2={n.x} y2={n.y} />
        ))}
      </g>

      {/* Nodes */}
      <g>
        {nodes.map((n, i) => (
          <g key={i}>
            <circle
              cx={n.x}
              cy={n.y}
              r="6"
              fill="rgba(var(--accent-r), var(--accent-g), var(--accent-b), 0.18)"
            />
            <circle
              cx={n.x}
              cy={n.y}
              r="2.2"
              fill="rgb(var(--accent-r), var(--accent-g), var(--accent-b))"
            />
          </g>
        ))}
        {/* Center core */}
        <circle
          cx={cx}
          cy={cy}
          r="9"
          fill="rgba(var(--accent-r), var(--accent-g), var(--accent-b), 0.15)"
        />
        <circle
          cx={cx}
          cy={cy}
          r="3"
          fill="rgb(var(--accent-r), var(--accent-g), var(--accent-b))"
        />
      </g>
    </>
  );
}

/* ─────────────  CONTOUR (LOCAL × TECH)  ───────────── */
function ContourPattern({ seed }: { seed: number }) {
  const rng = makeRng(seed);
  const cx = 200 + Math.round(rng() * 200); // 200..400
  const cy = 100 + Math.round(rng() * 140); // 100..240
  const layers = 7;
  const stars = Array.from({ length: 18 }, () => ({
    x: Math.round(rng() * VIEW_W),
    y: Math.round(rng() * VIEW_H),
    r: 0.4 + rng() * 0.6,
    o: 0.15 + rng() * 0.3,
  }));

  return (
    <>
      <g
        fill="none"
        stroke="rgba(var(--accent-r), var(--accent-g), var(--accent-b), 0.4)"
        strokeWidth="0.55"
      >
        {Array.from({ length: layers }).map((_, i) => {
          const rx = 40 + i * 55;
          const ry = 26 + i * 36;
          const opacity = Math.max(0.1, 1 - i * 0.13);
          return (
            <ellipse
              key={i}
              cx={cx}
              cy={cy}
              rx={rx}
              ry={ry}
              opacity={opacity}
            />
          );
        })}
      </g>

      {/* Background stars (like map markers) */}
      <g fill="#ffffff">
        {stars.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r={s.r} opacity={s.o} />
        ))}
      </g>

      {/* Anchor point */}
      <g>
        <circle
          cx={cx}
          cy={cy}
          r="8"
          fill="rgba(var(--accent-r), var(--accent-g), var(--accent-b), 0.18)"
        />
        <circle
          cx={cx}
          cy={cy}
          r="2.6"
          fill="rgb(var(--accent-r), var(--accent-g), var(--accent-b))"
        />
        <line
          x1={cx}
          y1={cy - 14}
          x2={cx}
          y2={cy + 14}
          stroke="rgba(var(--accent-r), var(--accent-g), var(--accent-b), 0.5)"
          strokeWidth="0.6"
        />
        <line
          x1={cx - 14}
          y1={cy}
          x2={cx + 14}
          y2={cy}
          stroke="rgba(var(--accent-r), var(--accent-g), var(--accent-b), 0.5)"
          strokeWidth="0.6"
        />
      </g>
    </>
  );
}

/* ─────────────  SHAPE (EC BRAND)  ───────────── */
function ShapePattern({ seed }: { seed: number }) {
  const rng = makeRng(seed);
  const stripes = 24;
  const offset = rng() * 40;
  const gradId = `shape-grad-${seed}`;

  return (
    <>
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop
            offset="0%"
            stopColor="rgb(var(--accent-r), var(--accent-g), var(--accent-b))"
            stopOpacity="0.32"
          />
          <stop
            offset="100%"
            stopColor="rgb(var(--accent-r), var(--accent-g), var(--accent-b))"
            stopOpacity="0"
          />
        </linearGradient>
      </defs>

      {/* Sweeping curve fill */}
      <path
        d={`M 0 ${200 + offset} Q 150 ${100 - offset / 2} 300 ${
          180 + offset / 3
        } T 600 ${140 - offset / 4} L 600 ${VIEW_H} L 0 ${VIEW_H} Z`}
        fill={`url(#${gradId})`}
      />

      {/* Layered curves */}
      <g
        fill="none"
        stroke="rgba(var(--accent-r), var(--accent-g), var(--accent-b), 0.4)"
        strokeWidth="0.55"
      >
        <path
          d={`M 0 ${220 + offset} Q 150 ${130 - offset / 2} 300 ${
            200 + offset / 3
          } T 600 ${170 - offset / 4}`}
        />
        <path
          d={`M 0 ${260 + offset} Q 150 ${170 - offset / 2} 300 ${
            240 + offset / 3
          } T 600 ${210 - offset / 4}`}
          opacity="0.5"
        />
      </g>

      {/* Vertical stripes (warp/weave hint) */}
      <g
        stroke="rgba(255,255,255,0.05)"
        strokeWidth="0.5"
      >
        {Array.from({ length: stripes }).map((_, i) => {
          const x = (VIEW_W / stripes) * i + 4;
          return <line key={i} x1={x} y1={0} x2={x} y2={VIEW_H} />;
        })}
      </g>

      {/* Single accent mark */}
      <g>
        <circle
          cx={Math.round(rng() * 400) + 100}
          cy={Math.round(rng() * 100) + 80}
          r="3"
          fill="rgb(var(--accent-r), var(--accent-g), var(--accent-b))"
        />
      </g>
    </>
  );
}

export default function ProjectThumb({ project, className = "" }: ProjectThumbProps) {
  const seed = hashSeed(project.id);

  return (
    <svg
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className={`block h-full w-full ${className}`.trim()}
    >
      {/* Backdrop */}
      <rect width={VIEW_W} height={VIEW_H} fill="rgba(255,255,255,0.015)" />

      {project.category === "AI PRODUCT" && <OrbitPattern seed={seed} />}
      {project.category === "LOCAL × TECH" && <ContourPattern seed={seed} />}
      {project.category === "EC BRAND" && <ShapePattern seed={seed} />}

      {/* Corner mono label — gives a "specimen tag" feel */}
      <g
        fill="rgba(255,255,255,0.4)"
        fontFamily="'Fragment Mono', monospace"
        fontSize="10"
        letterSpacing="2"
      >
        <text x="20" y="28">{`ID:${project.id.toUpperCase()}`}</text>
      </g>
      <g
        fill="rgba(255,255,255,0.3)"
        fontFamily="'Fragment Mono', monospace"
        fontSize="10"
        letterSpacing="2"
      >
        <text x={VIEW_W - 20} y={VIEW_H - 16} textAnchor="end">
          {project.category}
        </text>
      </g>
    </svg>
  );
}
