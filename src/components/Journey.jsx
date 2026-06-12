"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export default function Journey({ journey }) {
  return (
    <section id={journey.id} className="section-shell scroll-mt-24 py-20 md:scroll-mt-28 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading eyebrow={journey.eyebrow} title={journey.title} intro={journey.body} />
          <motion.div
            className="mt-9 border border-white/14 bg-white/[0.04] p-5"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-acid">{journey.principlesLabel}</p>
            <div className="mt-4 grid gap-3">
              {journey.principles.map((principle) => (
                <p key={principle} className="border-t border-white/12 pt-3 text-sm leading-6 text-paper/72">
                  {principle}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 hidden h-full w-px bg-white/14 md:block" aria-hidden="true" />
          <div className="grid gap-5">
            {journey.chapters.map((chapter, index) => (
              <motion.article
                key={chapter.title}
                className="relative border border-white/12 bg-paper/8 p-5 backdrop-blur-xl md:ml-14 md:p-7"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.65, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="absolute -left-[3.55rem] top-7 hidden size-3 bg-acid md:block" aria-hidden="true" />
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <p className="font-display text-4xl font-semibold text-acid md:text-5xl">{chapter.year}</p>
                  <span className="border border-white/12 px-3 py-1 text-xs font-bold text-paper/48">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold text-paper md:text-3xl">{chapter.title}</h3>
                <p className="mt-4 max-w-2xl leading-7 text-paper/68">{chapter.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
