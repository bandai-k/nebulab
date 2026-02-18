"use client";

import { motion } from "framer-motion";
import { BRAND } from "@/constants/brand";

export default function ContactClient() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-24 sm:px-10">
      <motion.div
        className="status-text mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <span className="pulse-dot mr-1.5 inline-block align-middle" />
        CHANNEL:MAIL — STATUS:OPEN
      </motion.div>

      <motion.h1
        className="font-display text-3xl font-normal tracking-wide sm:text-4xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
      >
        Contact
      </motion.h1>

      <motion.p
        className="mt-6 text-base text-cyber-text-secondary sm:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        ご連絡はメールでお願いします。
      </motion.p>

      <motion.div
        className="glass-card corner-accent mt-12 p-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
      >
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.3em] text-cyber-accent">
          Email
        </span>
        <div className="mt-4">
          <a
            href={BRAND.emailMailto}
            className="font-mono text-lg text-cyber-accent transition-colors hover:text-white"
          >
            {BRAND.email}
          </a>
        </div>
      </motion.div>
    </main>
  );
}
