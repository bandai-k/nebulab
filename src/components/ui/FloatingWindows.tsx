"use client";

import { useEffect, useRef } from "react";

/* ── Window ── */
interface WindowRect {
  x: number;
  y: number;
  w: number;
  h: number;
  life: number;
  maxLife: number;
  phase: "in" | "hold" | "out";
  phaseTime: number;
  opacity: number;
  slides: boolean;
  vx: number;
  vy: number;
}

/* ── Meteor segment ── */
interface Seg {
  x: number; // segment start
  y: number;
  dx: number; // direction: -1, 0, or 1
  dy: number;
  len: number; // accumulated length
}

interface Meteor {
  segs: Seg[];
  speed: number; // px per ms
  tailLen: number;
  width: number;
  brightness: number;
  turnsLeft: number;
  nextTurnDist: number; // distance in current seg before turning
}

/* ── Helpers ── */
function meteorHead(m: Meteor): { x: number; y: number } {
  const s = m.segs[m.segs.length - 1];
  return { x: s.x + s.dx * s.len, y: s.y + s.dy * s.len };
}

function meteorTotalLen(m: Meteor): number {
  let l = 0;
  for (const s of m.segs) l += s.len;
  return l;
}

function pointAtDist(segs: Seg[], dist: number): { x: number; y: number } {
  let rem = dist;
  for (const s of segs) {
    if (rem <= s.len) {
      return { x: s.x + s.dx * rem, y: s.y + s.dy * rem };
    }
    rem -= s.len;
  }
  const last = segs[segs.length - 1];
  return { x: last.x + last.dx * last.len, y: last.y + last.dy * last.len };
}

function hitTest(
  hx: number,
  hy: number,
  windows: WindowRect[],
): boolean {
  for (const w of windows) {
    if (w.phase === "out" || w.opacity < 0.3) continue;
    if (hx >= w.x && hx <= w.x + w.w && hy >= w.y && hy <= w.y + w.h) {
      return true;
    }
  }
  return false;
}

function offScreen(x: number, y: number, W: number, H: number): boolean {
  const m = 60;
  return x < -m || x > W + m || y < -m || y > H + m;
}

/* ── Read accent RGB ── */
function getAccentRgb(): [number, number, number] {
  const s = getComputedStyle(document.documentElement);
  return [
    parseInt(s.getPropertyValue("--accent-r")) || 21,
    parseInt(s.getPropertyValue("--accent-g")) || 86,
    parseInt(s.getPropertyValue("--accent-b")) || 165,
  ];
}

export default function FloatingWindows() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    let acR = 21, acG = 86, acB = 165;
    let colorTick = 0;
    function refreshColor() { [acR, acG, acB] = getAccentRgb(); }
    refreshColor();

    /* ═══════════ Windows ═══════════ */
    const windows: WindowRect[] = [];
    const MAX_WIN = 18;
    const WIN_INT = 600;
    let lastWin = 0;

    function spawnWin(now: number) {
      const w = 40 + Math.random() * 200;
      const h = 30 + Math.random() * 130;
      const sl = Math.random() < 0.15;
      const a = Math.random() * Math.PI * 2;
      const sp = 0.008 + Math.random() * 0.015;
      windows.push({
        x: Math.random() * (W - w), y: Math.random() * (H - h), w, h,
        life: 0, maxLife: 3000 + Math.random() * 5000,
        phase: "in", phaseTime: 0, opacity: 0,
        slides: sl,
        vx: sl ? Math.cos(a) * sp : 0,
        vy: sl ? Math.sin(a) * sp : 0,
      });
      lastWin = now;
    }

    for (let i = 0; i < 8; i++) {
      const w = 40 + Math.random() * 200;
      const h = 30 + Math.random() * 130;
      const sl = Math.random() < 0.15;
      const a = Math.random() * Math.PI * 2;
      const sp = 0.008 + Math.random() * 0.015;
      windows.push({
        x: Math.random() * (W - w), y: Math.random() * (H - h), w, h,
        life: Math.random() * 3000, maxLife: 3000 + Math.random() * 5000,
        phase: "hold", phaseTime: 0, opacity: 0.6 + Math.random() * 0.4,
        slides: sl,
        vx: sl ? Math.cos(a) * sp : 0,
        vy: sl ? Math.sin(a) * sp : 0,
      });
    }

    /* ═══════════ Meteors ═══════════ */
    const meteors: Meteor[] = [];
    const MAX_MET = 12;
    const MET_INT = 400;
    let lastMet = 0;

    function pickDir(): { dx: number; dy: number } {
      const dirs = [
        { dx: 1, dy: 0 }, { dx: -1, dy: 0 },
        { dx: 0, dy: 1 }, { dx: 0, dy: -1 },
      ];
      return dirs[Math.floor(Math.random() * 4)];
    }

    function perpDir(dx: number, dy: number): { dx: number; dy: number } {
      // 90° turn: if horizontal → vertical, if vertical → horizontal
      if (dx !== 0) return { dx: 0, dy: Math.random() < 0.5 ? 1 : -1 };
      return { dx: Math.random() < 0.5 ? 1 : -1, dy: 0 };
    }

    function spawnMet(now: number) {
      const { dx, dy } = pickDir();

      // Start from a screen edge aligned with direction
      let x: number, y: number;
      if (dx > 0) { x = -10; y = Math.random() * H; }
      else if (dx < 0) { x = W + 10; y = Math.random() * H; }
      else if (dy > 0) { x = Math.random() * W; y = -10; }
      else { x = Math.random() * W; y = H + 10; }

      const turns = Math.floor(Math.random() * 7); // 0–6 turns

      meteors.push({
        segs: [{ x, y, dx, dy, len: 0 }],
        speed: 0.12 + Math.random() * 0.25,
        tailLen: 40 + Math.random() * 80,
        width: 1 + Math.random() * 1.5,
        brightness: 0.5 + Math.random() * 0.5,
        turnsLeft: turns,
        nextTurnDist: 80 + Math.random() * 250,
      });
      lastMet = now;
    }

    for (let i = 0; i < 5; i++) spawnMet(0);

    /* ═══════════ Draw ═══════════ */
    let raf: number;
    let prev = performance.now();

    function drawMeteor(m: Meteor) {
      const total = meteorTotalLen(m);
      const tailStart = Math.max(0, total - m.tailLen);
      const visLen = total - tailStart;
      if (visLen <= 0) return;

      const mr = Math.min(255, acR + 100);
      const mg = Math.min(255, acG + 100);
      const mb = Math.min(255, acB + 90);

      // Trail: opacity fades from 0 at tail to bright at head
      const steps = 16;
      ctx!.lineWidth = m.width;
      for (let s = 0; s < steps; s++) {
        const t0 = s / steps;
        const t1 = (s + 1) / steps;
        const p0 = pointAtDist(m.segs, tailStart + visLen * t0);
        const p1 = pointAtDist(m.segs, tailStart + visLen * t1);
        const alpha = t1 * m.brightness * 0.4;

        ctx!.strokeStyle = `rgba(${mr}, ${mg}, ${mb}, ${alpha})`;
        ctx!.beginPath();
        ctx!.moveTo(p0.x, p0.y);
        ctx!.lineTo(p1.x, p1.y);
        ctx!.stroke();
      }
    }

    function draw(now: number) {
      const dt = now - prev;
      prev = now;

      colorTick++;
      if (colorTick % 120 === 0) refreshColor();

      ctx!.clearRect(0, 0, W, H);

      if (windows.length < MAX_WIN && now - lastWin > WIN_INT) spawnWin(now);
      if (meteors.length < MAX_MET && now - lastMet > MET_INT) spawnMet(now);

      /* ── Update & draw meteors ── */
      for (let i = meteors.length - 1; i >= 0; i--) {
        const m = meteors[i];
        const travel = m.speed * dt;
        const cur = m.segs[m.segs.length - 1];
        cur.len += travel;

        // Turn check
        if (m.turnsLeft > 0 && cur.len >= m.nextTurnDist) {
          const head = meteorHead(m);
          const nd = perpDir(cur.dx, cur.dy);
          m.segs.push({ x: head.x, y: head.y, dx: nd.dx, dy: nd.dy, len: 0 });
          m.turnsLeft--;
          m.nextTurnDist = 60 + Math.random() * 220;
        }

        const head = meteorHead(m);

        // Remove: off-screen or hit window
        if (offScreen(head.x, head.y, W, H) || hitTest(head.x, head.y, windows)) {
          meteors.splice(i, 1);
          continue;
        }

        drawMeteor(m);
      }

      /* ── Update & draw windows ── */
      const fadeIn = 700, fadeOut = 900;

      for (let i = windows.length - 1; i >= 0; i--) {
        const win = windows[i];
        win.life += dt;
        win.phaseTime += dt;

        if (win.slides) { win.x += win.vx * dt; win.y += win.vy * dt; }

        if (win.phase === "in") {
          win.opacity = Math.min(1, win.phaseTime / fadeIn);
          if (win.phaseTime >= fadeIn) { win.phase = "hold"; win.phaseTime = 0; }
        } else if (win.phase === "hold") {
          win.opacity = 1;
          if (win.life >= win.maxLife - fadeOut) { win.phase = "out"; win.phaseTime = 0; }
        } else {
          win.opacity = Math.max(0, 1 - win.phaseTime / fadeOut);
          if (win.phaseTime >= fadeOut) { windows.splice(i, 1); continue; }
        }

        const al = win.opacity * 0.12;
        const sc =
          win.phase === "in" ? 0.85 + 0.15 * (win.phaseTime / fadeIn)
            : win.phase === "out" ? 1 - 0.1 * (win.phaseTime / fadeOut)
              : 1;

        const sw = win.w * sc, sh = win.h * sc;
        const sx = win.x + (win.w - sw) / 2, sy = win.y + (win.h - sh) / 2;

        ctx!.fillStyle = `rgba(${acR}, ${acG}, ${acB}, ${al * 0.3})`;
        ctx!.fillRect(sx, sy, sw, sh);

        ctx!.strokeStyle = `rgba(${acR}, ${acG}, ${acB}, ${al})`;
        ctx!.lineWidth = 1;
        ctx!.strokeRect(sx + 0.5, sy + 0.5, sw - 1, sh - 1);

        const cl = Math.min(12, sw * 0.2);
        ctx!.strokeStyle = `rgba(${acR}, ${acG}, ${acB}, ${al * 2})`;
        ctx!.beginPath();
        ctx!.moveTo(sx, sy + cl); ctx!.lineTo(sx, sy); ctx!.lineTo(sx + cl, sy);
        ctx!.stroke();
        ctx!.beginPath();
        ctx!.moveTo(sx + sw, sy + sh - cl); ctx!.lineTo(sx + sw, sy + sh); ctx!.lineTo(sx + sw - cl, sy + sh);
        ctx!.stroke();
      }

      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);

    const onResize = () => {
      W = canvas!.width = window.innerWidth;
      H = canvas!.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
