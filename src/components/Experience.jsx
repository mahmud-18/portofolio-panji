"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export default function Experience({ experience }) {
  return (
    <section id={experience.id} className="section-shell scroll-mt-24 py-20 md:scroll-mt-28 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow={experience.eyebrow} title={experience.title} intro={experience.intro} />
        </div>

        <div className="relative grid gap-5">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-ink/10 md:block" aria-hidden="true" />
          {experience.roles.map((role, index) => (
            <motion.article
              key={`${role.company}-${role.period}`}
              className="glass-panel relative rounded-[1.75rem] p-6 md:ml-14 md:p-7"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="absolute -left-[3.08rem] top-8 hidden size-3 rounded-full bg-ink shadow-[0_0_0_5px_rgba(8,8,8,0.08)] md:block" aria-hidden="true" />
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.14em] text-ink/45">{role.period}</p>
                  <h3 className="mt-3 font-display text-3xl font-bold text-ink">{role.role}</h3>
                  <p className="mt-1 text-sm font-semibold text-ink/42">{role.company}</p>
                </div>
                <span className="font-display text-3xl font-bold text-ink/14">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <p className="mt-5 leading-7 text-ink/64">{role.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {role.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-ink/10 bg-white px-3 py-2 text-sm font-semibold text-ink/62">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
