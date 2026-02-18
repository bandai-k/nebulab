"use client";

import { useEffect, useState } from "react";

export default function IntroOverlay() {
  const [phase, setPhase] = useState<"check" | "in" | "hold" | "out" | "done">("check");

  useEffect(() => {
    // Only show once per session
    if (sessionStorage.getItem("intro_seen")) {
      setPhase("done");
      return;
    }

    setPhase("in");

    const t1 = setTimeout(() => setPhase("hold"), 100); // trigger fade-in
    const t2 = setTimeout(() => setPhase("out"), 2600); // start exit
    const t3 = setTimeout(() => {
      setPhase("done");
      sessionStorage.setItem("intro_seen", "1");
    }, 3800); // fully remove

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (phase === "check" || phase === "done") return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ease-out"
      style={{ opacity: phase === "out" ? 0 : 1 }}
    >
      <p
        className="font-display text-3xl tracking-wide text-white transition-all duration-1000 ease-out sm:text-5xl"
        style={{
          opacity: phase === "in" ? 0 : 1,
          transform: phase === "in" ? "translateY(16px)" : "translateY(0)",
        }}
      >
        思考と行動の間を、設計する。
      </p>
      <p
        className="mt-5 font-mono text-[10px] tracking-[0.4em] text-cyber-text-muted transition-all delay-500 duration-1000 ease-out"
        style={{
          opacity: phase === "in" ? 0 : 1,
        }}
      >
        NEBULAB
      </p>
    </div>
  );
}
