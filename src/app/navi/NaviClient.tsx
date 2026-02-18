"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    title: "Naviが問いかける",
    body: "ユーザーが何も聞かなくても、Naviは状況を観察し、適切なタイミングで問いを投げかけます。",
  },
  {
    title: "状況を整理する",
    body: "散らばった情報や思考を構造化し、今何が起きているかを明確にします。",
  },
  {
    title: "提案を1つ出す",
    body: "選択肢を10個並べるのではなく、文脈に合った次の一歩を1つだけ提示します。",
  },
  {
    title: "実行は必ず承認制",
    body: "Naviが勝手に動くことはありません。すべての実行は、人間の承認を経て行われます。",
  },
];

export default function NaviClient() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-24 md:px-10">
      <motion.div
        className="status-text mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <span className="pulse-dot mr-1.5 inline-block align-middle" />
        NAVI:SPEC — MODE:OVERVIEW
      </motion.div>

      <motion.h1
        className="font-display text-3xl font-normal leading-[1.4] tracking-wide md:text-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
      >
        答えではなく、
        <br />
        次の一歩を作るAI
      </motion.h1>

      <motion.p
        className="mt-8 text-base leading-8 text-cyber-text-secondary md:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        Naviは機能の集合ではありません。
        <br />
        体験の流れそのものが、Naviの設計です。
      </motion.p>

      <div className="mt-20 grid gap-6 md:grid-cols-2">
        {steps.map((step, i) => (
          <ScrollReveal key={step.title} delay={i * 0.1}>
            <div className="glass-card corner-accent h-full p-8">
              <span className="font-mono text-[9px] font-bold tracking-[0.3em] text-cyber-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 text-base font-medium text-cyber-text">
                {step.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-cyber-text-secondary">
                {step.body}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className="vertical-divider mx-auto mt-24" />

      <ScrollReveal className="mt-16">
        <Link
          href="/demo"
          className="rounded-full border border-cyber-border bg-cyber-accent-dim px-7 py-3 font-mono text-xs font-semibold tracking-wider text-cyber-accent transition-all hover:bg-cyber-accent hover:text-cyber-bg hover:shadow-[0_0_20px_rgba(21,86,165,0.4)]"
        >
          LAUNCH DEMO
        </Link>
      </ScrollReveal>
    </main>
  );
}
