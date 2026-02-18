"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const SERVICES = [
  {
    code: "01",
    title: "AIプロダクト開発",
    desc: "能動型AIナビゲーター「Navi」を筆頭に、人間の意思決定を拡張するAIプロダクトを企画・設計・開発しています。",
    status: "ACTIVE",
  },
  {
    code: "02",
    title: "地域DX支援",
    desc: "地域の個人・小規模事業者に向けたITソリューションの導入支援。テクノロジーで日常のオペレーションを改善します。",
    status: "ACTIVE",
  },
  {
    code: "03",
    title: "プロトタイプ開発",
    desc: "アイデアを素早く形にする。小さく作り、検証し、磨き上げるサイクルで、事業仮説を最速で検証します。",
    status: "ACTIVE",
  },
];

export default function ServiceClient() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
      <motion.div
        className="status-text mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <span className="pulse-dot mr-1.5 inline-block align-middle" />
        SERVICE:CATALOG — LINES:{SERVICES.length}
      </motion.div>

      <motion.h1
        className="font-display text-3xl font-normal leading-[1.3] tracking-wide sm:text-4xl lg:text-5xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
      >
        Service
      </motion.h1>

      <motion.p
        className="mt-8 max-w-xl text-sm leading-[2.1] tracking-wide text-cyber-text-secondary sm:text-base"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        テクノロジーの力で、思考と行動の間を設計する。
        <br />
        Nebulabが提供するサービスラインです。
      </motion.p>

      <div className="vertical-divider mx-auto mt-16" />

      <section className="mt-20">
        <ScrollReveal>
          <div className="section-eyebrow-line mb-14">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
              Services
            </span>
          </div>
        </ScrollReveal>

        <div className="grid gap-6">
          {SERVICES.map((service, i) => (
            <ScrollReveal key={service.code} delay={i * 0.12}>
              <div className="glass-card corner-accent p-10">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[9px] font-bold tracking-[0.3em] text-cyber-accent">
                    {service.code}
                  </span>
                  <span className="font-mono text-[10px] tracking-wider text-cyber-text-muted">
                    {service.status}
                  </span>
                </div>
                <h2 className="mt-4 text-lg font-medium tracking-wide text-cyber-text">
                  {service.title}
                </h2>
                <p className="mt-4 text-sm leading-8 text-cyber-text-secondary">
                  {service.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <div className="vertical-divider mx-auto mt-24" />

      <ScrollReveal className="mt-16 text-center">
        <Link
          href="/contact"
          className="inline-block rounded-sm bg-cyber-accent/80 px-10 py-3.5 font-mono text-[11px] tracking-[0.25em] text-white shadow-[0_0_30px_rgba(var(--accent-r),var(--accent-g),var(--accent-b),0.3)] transition-shadow hover:shadow-[0_0_50px_rgba(var(--accent-r),var(--accent-g),var(--accent-b),0.5)]"
        >
          CONTACT →
        </Link>
      </ScrollReveal>
    </main>
  );
}
