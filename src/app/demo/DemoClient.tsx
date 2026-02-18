"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function DemoClient() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
      <motion.div
        className="status-text mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <span className="pulse-dot mr-1.5 inline-block align-middle" />
        NAVI:DEMO — BUILD:PROTOTYPE
      </motion.div>

      <motion.h1
        className="font-display text-3xl font-normal tracking-wide sm:text-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
      >
        Demo
      </motion.h1>

      <motion.div
        className="glass-card corner-accent mt-10 p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <p className="text-base leading-8 text-cyber-text-secondary">
          このデモは完成品ではありません。
          <br />
          体験の核だけを公開しています。
        </p>
      </motion.div>

      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <a
          href="#"
          className="rounded-full border border-cyber-border bg-cyber-accent-dim px-7 py-3 font-mono text-xs font-semibold tracking-wider text-cyber-accent transition-all hover:bg-cyber-accent hover:text-cyber-bg hover:shadow-[0_0_20px_rgba(21,86,165,0.4)]"
        >
          LAUNCH DEMO
        </a>
      </motion.div>

      <div className="vertical-divider mx-auto mt-24" />

      <ScrollReveal className="mt-16">
        <Link
          href="/navi"
          className="font-mono text-sm tracking-wider text-cyber-text-secondary transition-colors hover:text-cyber-accent"
        >
          ← Naviについて
        </Link>
      </ScrollReveal>
    </main>
  );
}
