"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export default function Projects({ projects }) {
  return (
    <section id={projects.id} className="relative z-10 scroll-mt-24 py-20 md:scroll-mt-28 md:py-28">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <SectionHeading eyebrow={projects.eyebrow} title={projects.title} intro={projects.intro} />
          <div className="hidden h-px bg-gradient-to-r from-ink/45 via-ink/15 to-transparent lg:block" aria-hidden="true" />
        </div>

        <div className="mt-12 grid gap-7">
          {projects.items.map((project, index) => (
            <motion.article
              key={project.title}
              className={`glass-panel overflow-hidden rounded-[2rem] ${project.featured ? "lg:grid lg:grid-cols-[1.05fr_0.95fr]" : "lg:grid lg:grid-cols-[0.82fr_1.18fr]"}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.68, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={`relative min-h-[300px] overflow-hidden ${project.featured ? "lg:min-h-[520px]" : "lg:min-h-[420px]"}`}>
                <img className="absolute inset-0 h-full w-full object-cover grayscale transition duration-700 hover:scale-105 hover:grayscale-0" src={project.image.src} alt={project.image.alt} />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-ink/78 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white/78 backdrop-blur-xl">
                  {project.featured ? projects.featuredLabel : projects.projectLabel}
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <p className="font-display text-5xl font-bold text-white/22 md:text-7xl">{project.number}</p>
                  <p className="max-w-48 text-right text-sm font-semibold text-white/74">{project.category}</p>
                </div>
              </div>

              <div className="p-6 md:p-8 lg:p-10">
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/45">{project.category}</p>
                    <h3 className="mt-4 font-display text-3xl font-bold leading-tight text-ink md:text-5xl">{project.title}</h3>
                  </div>
                  <span className="rounded-full border border-ink/10 bg-white px-3 py-2 font-display text-lg font-bold text-ink/45">
                    {project.number}
                  </span>
                </div>

                <div className="mt-8 grid gap-5">
                  {[
                    [projects.labels.problem, project.problem],
                    [projects.labels.solution, project.solution],
                    [projects.labels.outcome, project.outcome]
                  ].map(([label, text]) => (
                    <div key={label} className="grid gap-2 border-t border-ink/10 pt-4 md:grid-cols-[7rem_1fr]">
                      <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-ink/34">{label}</h4>
                      <p className="leading-7 text-ink/64">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-ink/34">{projects.labels.stack}</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full border border-ink/10 bg-white px-3 py-2 text-sm font-semibold text-ink/68">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={project.links.live}
                    className="button-focus inline-flex items-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-bold text-white transition hover:bg-charcoal"
                  >
                    {projects.viewLabel}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                  <a
                    href={project.links.github}
                    className="button-focus inline-flex items-center gap-2 rounded-xl border border-ink/12 bg-white px-5 py-3 text-sm font-bold text-ink/72 transition hover:border-ink hover:text-ink"
                  >
                    {projects.codeLabel}
                    <Github size={16} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
