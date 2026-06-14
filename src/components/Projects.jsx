"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export default function Projects({ projects = {} }) {
  // Fallback untuk undefined
  const safeProjects = projects || {};
  const {
    id = "work",
    eyebrow = "Work Experience",
    title = "Experience",
    intro = "",
    items = [],
    featuredLabel = "Featured Experience",
    projectLabel = "Experience",
    labels = {
      problem: "Role Context",
      solution: "Contribution",
      outcome: "Professional Value",
      stack: "Related Skills",
    },
  } = safeProjects;

  // Jika tidak ada items
  if (!items || items.length === 0) {
    return (
      <section
        id={id}
        className="relative z-10 scroll-mt-24 bg-white py-20 md:scroll-mt-28 md:py-28"
      >
        <div className="section-shell">
          <div className="text-center">
            <h2 className="font-display text-4xl font-bold text-ink">
              {title}
            </h2>
            <p className="mt-4 text-ink/60">No projects available</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id={id}
      className="relative z-10 scroll-mt-24 bg-white py-20 md:scroll-mt-28 md:py-28"
    >
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
          <div
            className="hidden h-px bg-gradient-to-r from-ink/20 via-ink/8 to-transparent lg:block"
            aria-hidden="true"
          />
        </div>

        <div className="mt-16 grid gap-8">
          {items.map((project, index) => (
            <motion.article
              key={project.title || index}
              className={`group premium-card overflow-hidden rounded-2xl border border-ink/12 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition hover:border-ink/20 hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] ${
                project.featured
                  ? "lg:grid lg:grid-cols-[1.05fr_0.95fr]"
                  : "lg:grid lg:grid-cols-[0.82fr_1.18fr]"
              }`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.68,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Image Section */}
              <div
                className={`relative min-h-[300px] overflow-hidden bg-gradient-to-br from-ink/5 to-ink/10 ${
                  project.featured ? "lg:min-h-[520px]" : "lg:min-h-[420px]"
                }`}
              >
                {project.image && (
                  <>
                    <motion.img
                      className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 group-hover:grayscale-0"
                      src={project.image.src}
                      alt={project.image.alt || project.title}
                      whileHover={{ scale: 1.06 }}
                      transition={{
                        duration: 0.55,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/30 to-transparent group-hover:from-white/85 transition duration-500" />
                  </>
                )}

                {/* Badge */}
                <div className="absolute left-6 top-6 rounded-full border border-ink/15 bg-white px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-ink/62">
                  {project.featured ? featuredLabel : projectLabel}
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
                  <motion.p
                    className="font-display text-6xl font-bold text-ink/12 md:text-7xl transition group-hover:text-ink/20"
                    whileHover={{ scale: 1.05 }}
                  >
                    {project.number}
                  </motion.p>
                  <p className="max-w-48 text-right text-sm font-semibold text-ink/56 group-hover:text-ink/72 transition">
                    {project.category}
                  </p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-10 lg:p-12">
                <div className="flex flex-wrap items-start justify-between gap-6">
                  <div className="flex-1">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink/45">
                      {project.category}
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-bold leading-tight text-ink md:text-4xl lg:text-5xl">
                      {project.title}
                    </h3>
                  </div>
                  <motion.span
                    className="mt-1 rounded-full border-2 border-cyan-400 bg-transparent px-4 py-2 font-display text-lg font-bold text-cyan-500 transition"
                    whileHover={{
                      rotate: -4,
                      scale: 1.08,
                      backgroundColor: "rgba(34, 211, 238, 0.1)",
                    }}
                  >
                    {project.number}
                  </motion.span>
                </div>

                {/* Problem, Solution, Outcome */}
                <div className="mt-10 grid gap-6">
                  {[
                    [labels.problem, project.problem],
                    [labels.solution, project.solution],
                    [labels.outcome, project.outcome],
                  ].map(([label, text]) => (
                    <motion.div
                      key={label}
                      className="grid gap-2 border-t border-ink/8 pt-5 md:grid-cols-[8rem_1fr]"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-ink/40">
                        {label}
                      </h4>
                      <p className="leading-7 text-ink/68">{text}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Stack Tags */}
                {project.stack && project.stack.length > 0 && (
                  <div className="mt-10">
                    <h4 className="text-xs font-bold uppercase tracking-[0.18em] text-ink/40">
                      {labels.stack}
                    </h4>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((item, i) => (
                        <motion.span
                          key={item}
                          className="rounded-full border border-ink/12 bg-ink/[0.03] px-3 py-2 text-sm font-semibold text-ink/64 transition hover:border-cyan-400 hover:bg-cyan-400/5 hover:text-cyan-600"
                          whileHover={{ scale: 1.05, y: -2 }}
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.04 }}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
