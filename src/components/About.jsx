"use client";

import { Mail, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export default function About({ about, site }) {
  return (
    <section id={about.id} className="section-shell scroll-mt-24 py-20 md:scroll-mt-28 md:py-28">
      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28">
          <SectionHeading eyebrow={about.eyebrow} title={about.title} intro={about.subtitle} />

          <motion.div
            className="glass-panel mt-8 overflow-hidden rounded-[2rem] p-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="overflow-hidden rounded-[1.5rem]">
              <img className="aspect-[4/5] w-full object-cover grayscale" src={site.avatar.src} alt={site.avatar.alt} />
            </div>
            <div className="mt-5 grid gap-3">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/45">{about.nameLabel}</p>
                  <h3 className="mt-1 font-display text-3xl font-bold text-ink">{site.fullName}</h3>
                </div>
                <Sparkles className="text-ink" size={22} aria-hidden="true" />
              </div>
              <p className="text-sm text-ink/54">{site.role}</p>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-6">
          <motion.article
            className="glass-panel rounded-[2rem] p-6 md:p-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid gap-5">
              {about.body.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-ink/66 md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.article>

          <div className="grid gap-4 md:grid-cols-3">
            {about.details.map((detail, index) => (
              <motion.div
                key={detail.label}
                className="rounded-2xl border border-ink/10 bg-white/70 p-5 shadow-[0_16px_44px_rgba(8,8,8,0.05)]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/38">{detail.label}</p>
                <p className="mt-3 text-sm font-semibold leading-6 text-ink/72">{detail.value}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="rounded-[2rem] border border-ink/10 bg-white/80 p-6 shadow-[0_18px_56px_rgba(8,8,8,0.06)]"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid gap-3">
              {about.highlights.map((highlight, index) => (
                <div key={highlight} className="flex items-start gap-3 border-t border-ink/10 pt-3 first:border-t-0 first:pt-0">
                  <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-ink text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="leading-7 text-ink/72">{highlight}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={`mailto:${site.email}`}
              className="button-focus inline-flex items-center gap-3 rounded-2xl border border-ink/10 bg-white/70 p-5 text-sm font-semibold text-ink/68 transition hover:border-ink hover:text-ink"
            >
              <Mail size={18} aria-hidden="true" />
              {site.email}
            </a>
            <div className="inline-flex items-center gap-3 rounded-2xl border border-ink/10 bg-white/70 p-5 text-sm font-semibold text-ink/68">
              <MapPin size={18} className="text-ink" aria-hidden="true" />
              {site.location}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
