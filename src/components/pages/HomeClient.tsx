"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { VISION, MISSION, VALUES } from "@/constants/mvv";
import { BRAND } from "@/constants/brand";

export default function HomeClient() {
  return (
    <main>
      {/* ── Hero: full-screen ── */}
      <section className="relative flex min-h-[100dvh] flex-col justify-end px-6 pb-20 pt-40 sm:px-10">
        <div className="mx-auto w-full max-w-5xl">
          <motion.div
            className="status-text mb-10 flex flex-wrap gap-x-4 gap-y-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span>SYS:ONLINE</span>
            <span>
              <span className="pulse-dot mr-1.5 inline-block align-middle" />
              PROJECTS:ACTIVE
            </span>
            <span>LAB:OPEN</span>
          </motion.div>

          <motion.h1
            className="font-display text-4xl font-normal leading-[1.3] tracking-wide sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            思考と行動の間を
            <br />
            設計するラボ
          </motion.h1>

          <motion.p
            className="mt-8 max-w-xl text-sm leading-[2.1] tracking-wide text-cyber-text-secondary sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            AIに質問するのではなく、AIが動いて、結果を持って帰ってくる。
            <br />
            Nebulabは、人間の意思決定を拡張するAIプロダクトを開発しています。
          </motion.p>

          <motion.div
            className="mt-12 flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link
              href="/demo"
              className="rounded-full border border-cyber-border bg-cyber-accent-dim px-8 py-3.5 font-mono text-xs font-semibold tracking-wider text-cyber-accent transition-all hover:bg-cyber-accent hover:text-cyber-bg hover:shadow-[0_0_20px_rgba(21,86,165,0.4)]"
            >
              LAUNCH DEMO
            </Link>
            <Link
              href="/navi"
              className="font-mono text-sm tracking-wider text-cyber-text-secondary transition-colors hover:text-cyber-accent"
            >
              About Navi →
            </Link>
          </motion.div>
        </div>

        {/* vertical divider */}
        <motion.div
          className="vertical-divider mx-auto mt-16"
          initial={{ opacity: 0, scaleY: 0 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 1, delay: 2 }}
          style={{ transformOrigin: "top" }}
        />
      </section>

      {/* ── Mission / Vision ── */}
      <section className="mx-auto max-w-5xl px-6 py-32 sm:px-10">
        <div className="grid gap-20 md:grid-cols-2">
          <ScrollReveal>
            <div>
              <div className="section-eyebrow-line">
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
                  Mission
                </span>
              </div>
              <p className="mt-8 text-xl leading-10 text-cyber-text sm:text-2xl">
                {MISSION}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div>
              <div className="section-eyebrow-line">
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
                  Vision
                </span>
              </div>
              <p className="mt-8 text-xl leading-10 text-cyber-text sm:text-2xl">
                {VISION}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="border-y border-cyber-border-dim">
        <div className="mx-auto max-w-5xl px-6 py-32 sm:px-10">
          <ScrollReveal>
            <div className="section-eyebrow-line mb-14">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
                Values
              </span>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-3">
            {VALUES.map((value, i) => (
              <ScrollReveal key={value.code} delay={i * 0.12}>
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
        </div>
      </section>

      {/* ── Products ── */}
      <section className="mx-auto max-w-5xl px-6 py-32 sm:px-10" id="products">
        <ScrollReveal>
          <div className="section-eyebrow-line mb-14">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
              Products
            </span>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Navi — flagship */}
          <ScrollReveal delay={0.1}>
            <div className="glass-card corner-accent h-full p-10">
              <div className="flex items-center gap-3">
                <span className="pulse-dot" />
                <span className="font-display text-lg tracking-wider text-cyber-accent">
                  Navi
                </span>
              </div>
              <div className="mt-1">
                <span className="font-mono text-[10px] tracking-wider text-cyber-text-muted">
                  ACTIVE — PROTOTYPE
                </span>
              </div>
              <p className="mt-6 text-sm leading-7 text-cyber-text-secondary">
                能動型AIナビゲーター。ユーザーが質問する前に状況を読み、次の一歩を提案する。
                実行はすべて承認制。判断は常に人間が行う。
              </p>
              <div className="mt-8 flex items-center gap-5">
                <Link
                  href="/navi"
                  className="font-mono text-xs tracking-wider text-cyber-accent transition-colors hover:text-white"
                >
                  詳細 →
                </Link>
                <Link
                  href="/demo"
                  className="font-mono text-xs tracking-wider text-cyber-text-secondary transition-colors hover:text-cyber-accent"
                >
                  デモ →
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* NebulaPlace — teaser */}
          <ScrollReveal delay={0.2}>
            <div className="glass-card h-full p-10" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
              <div className="flex items-center gap-3">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyber-text-muted" />
                <span className="font-display text-lg tracking-wider text-cyber-text-muted">
                  NebulaPlace
                </span>
              </div>
              <div className="mt-1">
                <span className="font-mono text-[10px] tracking-wider text-cyber-text-muted">
                  CONCEPT
                </span>
              </div>
              <p className="mt-6 text-sm leading-7 text-cyber-text-muted">
                フリーランス・副業——小さく動く人たちのための場所。構想中。
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Status ── */}
      <section className="border-t border-cyber-border-dim">
        <div className="mx-auto max-w-5xl px-6 py-32 sm:px-10">
          <ScrollReveal>
            <div className="section-eyebrow-line mb-10">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
                Status
              </span>
            </div>
            <div className="glass-card corner-accent p-10">
              <p className="text-base leading-8 text-cyber-text-secondary sm:text-lg">
                Nebulabは現在、複数のAIプロダクトを同時に開発・検証しています。
                <br />
                小さく作り、試し、壊し、また作る。このサイクルを高速で回しています。
              </p>
              <div className="status-text mt-8">
                NAVI:PROTOTYPE — STEALTH:R&amp;D — LAB:PUBLIC
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-6 py-24 text-center sm:px-10">
        <ScrollReveal>
          <div className="relative mx-auto inline-block max-w-lg rounded-sm px-12 py-16 sm:px-20">
            {/* gradient border overlay */}
            <div
              className="pointer-events-none absolute inset-0 rounded-sm"
              style={{
                background:
                  "linear-gradient(135deg, rgba(var(--accent-r),var(--accent-g),var(--accent-b),0.25), transparent, rgba(var(--accent-r),var(--accent-g),var(--accent-b),0.15))",
              }}
            />
            <div className="absolute inset-[1px] rounded-sm bg-cyber-bg/80 backdrop-blur-xl" />

            <div className="relative">
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.4em] text-cyber-accent">
                Contact
              </span>
              <p className="mt-6 font-display text-2xl tracking-wide text-cyber-text sm:text-3xl">
                お問い合わせ
              </p>
              <p className="mt-6 text-sm leading-8 text-cyber-text-secondary">
                サービスのご相談・事業提携など、
                <br />
                お気軽にご連絡ください。
              </p>
              <a
                href={BRAND.emailMailto}
                className="mt-8 inline-block rounded-sm bg-cyber-accent/80 px-10 py-3.5 font-mono text-[11px] tracking-[0.25em] text-white shadow-[0_0_30px_rgba(var(--accent-r),var(--accent-g),var(--accent-b),0.3)] transition-shadow hover:shadow-[0_0_50px_rgba(var(--accent-r),var(--accent-g),var(--accent-b),0.5)]"
              >
                CONTACT →
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
