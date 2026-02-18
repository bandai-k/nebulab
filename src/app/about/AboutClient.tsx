"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { VISION, MISSION, VALUES } from "@/constants/mvv";

export default function AboutClient() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-24 md:px-10">
      <motion.div
        className="status-text mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <span className="pulse-dot mr-1.5 inline-block align-middle" />
        ABOUT:NEBULAB
      </motion.div>

      <motion.h1
        className="font-display text-3xl font-normal leading-[1.3] tracking-wide md:text-4xl lg:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
      >
        About
      </motion.h1>

      <motion.p
        className="mt-8 max-w-xl text-sm leading-[2.1] tracking-wide text-cyber-text-secondary md:text-base"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        「小さく始め、循環をつくる」——
        <br />
        テクノロジーの力で、人間の意思決定を拡張する
        <br />
        AIプロダクトを開発しています。
      </motion.p>

      <div className="vertical-divider mx-auto mt-16" />

      {/* ── Mission / Vision ── */}
      <section className="mt-20">
        <ScrollReveal>
          <div className="section-eyebrow-line mb-12">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
              Mission &amp; Vision
            </span>
          </div>
        </ScrollReveal>

        <div className="grid gap-16 md:grid-cols-2">
          <ScrollReveal>
            <div>
              <span className="font-mono text-[9px] font-bold tracking-[0.3em] text-cyber-accent">
                MISSION
              </span>
              <p className="mt-4 text-lg leading-10 text-cyber-text">
                {MISSION}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div>
              <span className="font-mono text-[9px] font-bold tracking-[0.3em] text-cyber-accent">
                VISION
              </span>
              <p className="mt-4 text-lg leading-10 text-cyber-text">
                {VISION}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="mt-24">
        <ScrollReveal>
          <div className="section-eyebrow-line mb-12">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
              Values
            </span>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {VALUES.map((value, i) => (
            <ScrollReveal key={value.code} delay={i * 0.1}>
              <div className="glass-card corner-accent h-full p-8">
                <span className="font-mono text-[9px] font-bold tracking-[0.3em] text-cyber-accent">
                  {value.code}
                </span>
                <h3 className="mt-3 text-base font-medium text-cyber-text">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-cyber-text-secondary">
                  {value.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </main>
  );
}
