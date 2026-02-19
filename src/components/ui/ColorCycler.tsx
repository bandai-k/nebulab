"use client";

import { useEffect } from "react";

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  h /= 360;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => {
    const k = (n + h * 12) % 12;
    return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
  };
  return [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
}

// Full hue cycle over 10 minutes
const CYCLE_MS = 600_000;
// Base HSL: #1556a5 ≈ hsl(213, 76%, 37%)
const BASE_HUE = 213;
const SAT = 0.66;
const LIT = 0.37;

export default function ColorCycler() {
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    if (!mq.matches) return;

    const root = document.documentElement;

    function update() {
      const t = (Date.now() % CYCLE_MS) / CYCLE_MS;
      const hue = (BASE_HUE + t * 360) % 360;
      const [r, g, b] = hslToRgb(hue, SAT, LIT);

      // Brighter version for text
      const [tr, tg, tb] = hslToRgb(hue, SAT + 0.1, LIT + 0.15);

      root.style.setProperty("--accent-r", String(r));
      root.style.setProperty("--accent-g", String(g));
      root.style.setProperty("--accent-b", String(b));
      root.style.setProperty(
        "--color-cyber-accent",
        `rgb(${tr}, ${tg}, ${tb})`,
      );
      root.style.setProperty(
        "--color-cyber-glow",
        `rgba(${r}, ${g}, ${b}, 0.25)`,
      );
    }

    update();
    const id = setInterval(update, 2000); // update every 2s for smooth feel
    return () => clearInterval(id);
  }, []);

  return null;
}
