"use client";

import { BriefcaseBusiness, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export default function Experience({ experience = {} }) {
  const {
    id = "experience",
    eyebrow = "Experience",
    title = "Experience timeline",
    intro = "",
    roles = [],
  } = experience || {};

  return (
    <section
      id={id}
      className="relative z-10 scroll-mt-24 bg-ink py-20 text-white md:scroll-mt-28 md:py-28"
    >
      <div className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            intro={intro}
            dark
            className="[&_.eyebrow]:text-white/58 [&_h2]:text-white [&_p:not(.eyebrow)]:text-white/68"
          />

          <div className="grid gap-4">
            {roles.length > 0 ? (
              roles.map((role, index) => (
                <motion.article
                  key={`${role.company || "role"}-${role.period || index}`}
                  className="rounded-2xl border border-white/12 bg-white/[0.04] p-6 shadow-[0_18px_48px_rgba(0,0,0,0.18)] backdrop-blur transition hover:border-white/22 hover:bg-white/[0.07] md:p-7"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.62,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="flex flex-wrap items-start justify-between gap-5">
                    <div>
                      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                        <BriefcaseBusiness size={15} aria-hidden="true" />
                        {role.role}
                      </p>
                      <h3 className="mt-3 font-display text-2xl font-semibold leading-tight text-white md:text-3xl">
                        {role.company}
                      </h3>
                    </div>

                    <p className="flex shrink-0 items-center gap-2 rounded-full border border-white/14 px-3 py-2 text-sm font-semibold text-white/62">
                      <CalendarDays size={16} aria-hidden="true" />
                      {role.period}
                    </p>
                  </div>

                  {role.summary ? (
                    <p className="mt-5 leading-7 text-white/66">
                      {role.summary}
                    </p>
                  ) : null}

                  {role.tags?.length > 0 ? (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {role.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/12 bg-white/[0.05] px-3 py-2 text-sm font-semibold text-white/58"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </motion.article>
              ))
            ) : (
              <div className="rounded-2xl border border-white/12 bg-white/[0.04] p-6 text-white/62">
                No experience data available.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
