"use client";

import { motion, type Variants } from "framer-motion";
import type { PropsWithChildren } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 14, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function MotionSection({
  children,
  delay = 0,
}: PropsWithChildren<{ delay?: number }>) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
