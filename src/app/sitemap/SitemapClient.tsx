"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { SITEMAP_SECTIONS } from "@/constants/navigation";

export default function SitemapClient() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
      <motion.div
        className="status-text mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <span className="pulse-dot mr-1.5 inline-block align-middle" />
        NAV:SITEMAP
      </motion.div>

      <motion.h1
        className="font-orbitron text-3xl font-semibold tracking-wide text-glow sm:text-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
      >
        Sitemap
      </motion.h1>

      <div className="mt-16">
        {SITEMAP_SECTIONS.map((section, i) => (
          <ScrollReveal key={section.title} delay={i * 0.1}>
            <section className="border-t border-cyber-border-dim py-10">
              <h2 className="font-orbitron text-xs font-semibold uppercase tracking-[0.2em] text-cyber-accent">
                {section.title}
              </h2>
              <ul className="mt-5 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-mono text-sm text-cyber-text-secondary transition-colors hover:text-cyber-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </ScrollReveal>
        ))}
      </div>
    </main>
  );
}
