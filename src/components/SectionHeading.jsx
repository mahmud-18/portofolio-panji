import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, intro, dark = false, className = "" }) {
  return (
    <motion.div
      className={`max-w-3xl ${className}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className={dark ? "eyebrow text-ink/65" : "eyebrow"}>{eyebrow}</p>
      <h2
        className={`mt-5 font-display text-4xl font-semibold leading-[0.96] text-balance md:text-6xl ${
          dark ? "text-ink" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p className={`mt-6 max-w-2xl text-base leading-8 md:text-lg ${dark ? "text-ink/68" : "text-ink/62"}`}>
          {intro}
        </p>
      ) : null}
    </motion.div>
  );
}
