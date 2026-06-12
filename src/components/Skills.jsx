"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export default function Skills({ skills }) {
  return (
    <section id={skills.id} className="section-shell scroll-mt-24 py-20 md:scroll-mt-28 md:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow={skills.eyebrow} title={skills.title} intro={skills.intro} />

        <div className="grid gap-4">
          {skills.clusters.map((cluster, index) => (
            <motion.article
              key={cluster.name}
              className="glass-panel rounded-[1.75rem] p-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
                <div>
                  <span className="block h-1.5 w-12 rounded-full" style={{ backgroundColor: cluster.accent }} aria-hidden="true" />
                  <h3 className="mt-5 font-display text-2xl font-bold text-ink md:text-3xl">{cluster.name}</h3>
                  <p className="mt-3 leading-7 text-ink/58">{cluster.summary}</p>
                </div>
                <div className="flex flex-wrap content-start gap-2">
                  {cluster.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-ink/10 bg-white px-3 py-2 text-sm font-semibold text-ink/70">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <motion.div
        className="mt-10 rounded-[1.75rem] border border-ink/10 bg-ink p-5 text-white md:p-6"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/56">{skills.toolchainLabel}</p>
        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-8">
          {skills.toolchain.map((tool) => (
            <div key={tool} className="rounded-2xl border border-white/14 bg-white/[0.06] px-3 py-4 text-center text-sm font-semibold text-white/76">
              {tool}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
