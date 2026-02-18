"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import type { LabEntry } from "@/types";

const entries: LabEntry[] = [];

export default function LabClient() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-24 md:px-10">
      <motion.div
        className="status-text mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <span className="pulse-dot mr-1.5 inline-block align-middle" />
        LAB:LOG — ENTRIES:{entries.length}
      </motion.div>

      <motion.h1
        className="font-display text-3xl font-normal tracking-wide md:text-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
      >
        Lab
      </motion.h1>

      <motion.p
        className="mt-6 text-base text-cyber-text-secondary md:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        開発の記録。進捗、設計メモ、試作の過程。
      </motion.p>

      <div className="mt-20">
        {entries.map((entry, i) => (
          <ScrollReveal key={entry.date + entry.title} delay={i * 0.1}>
            <article className="glass-card corner-accent mb-6 p-8">
              <div className="flex items-baseline gap-4">
                <time className="font-mono text-xs text-cyber-text-muted">
                  {entry.date}
                </time>
                <span className="font-mono text-[9px] font-bold tracking-[0.3em] text-cyber-accent">
                  {entry.phase.toUpperCase()}
                </span>
              </div>
              <h2 className="mt-4 text-lg font-medium text-cyber-text">
                {entry.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-cyber-text-secondary">
                {entry.body}
              </p>
              {entry.tags && (
                <div className="mt-5 flex gap-3">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] tracking-wider text-cyber-text-muted"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </ScrollReveal>
        ))}
      </div>
    </main>
  );
}
