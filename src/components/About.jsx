"use client";

import { Mail, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

export default function About({ about, site }) {
  return (
    <section
      id={about.id}
      className="section-shell scroll-mt-24 py-20 md:scroll-mt-28 md:py-28"
    >
      <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28">
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.title}
            intro={about.subtitle}
          />

          <motion.div
            className="mt-10 overflow-hidden rounded-2xl border-2 border-ink/20 bg-white shadow-xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="overflow-hidden rounded-lg bg-gray-100">
              <img
                className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-105"
                src={site.avatar.src}
                alt={site.avatar.alt}
              />
            </div>
            <div className="p-6 md:p-7">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-xs font-bold uppercase tracking-widest text-ink/60">
                    {about.nameLabel}
                  </p>
                  <h3 className="mt-2 font-display text-3xl font-bold text-ink">
                    {site.fullName}
                  </h3>
                </div>
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Sparkles className="text-ink" size={24} aria-hidden="true" />
                </motion.div>
              </div>
              <p className="mt-4 font-semibold text-ink/75">{site.role}</p>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-7">
          {/* Body Text */}
          <motion.article
            className="rounded-2xl border-2 border-ink/15 bg-white p-7 md:p-8 shadow-lg"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid gap-6">
              {about.body.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-8 text-ink/75 md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.article>

          {/* Details Grid */}
          <div className="grid gap-4 md:grid-cols-3">
            {about.details.map((detail, index) => (
              <motion.div
                key={detail.label}
                className="rounded-xl border-2 border-ink/15 bg-white p-5 shadow-md transition hover:border-ink/30 hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <p className="text-xs font-bold uppercase tracking-widest text-ink/55">
                  {detail.label}
                </p>
                <p className="mt-3 text-sm font-semibold leading-6 text-ink/80">
                  {detail.value}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Highlights */}
          <motion.div
            className="rounded-2xl border-2 border-ink/15 bg-white p-7 shadow-lg"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid gap-5">
              {about.highlights.map((highlight, index) => (
                <div
                  key={highlight}
                  className="flex items-start gap-4 border-t border-ink/12 pt-5 first:border-t-0 first:pt-0"
                >
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-lg bg-ink text-xs font-bold text-white shadow-md">
                    {index + 1}
                  </span>
                  <p className="leading-7 text-ink/75">{highlight}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Links */}
          <div className="grid gap-3 sm:grid-cols-2">
            <motion.a
              href={`mailto:${site.email}`}
              className="button-focus inline-flex items-center gap-3 rounded-xl border-2 border-ink/20 bg-white p-5 text-sm font-bold text-ink transition hover:border-ink hover:bg-ink hover:text-white hover:shadow-lg"
              whileHover={{ y: -2 }}
            >
              <Mail size={18} aria-hidden="true" />
              {site.email}
            </motion.a>
            <motion.div
              className="inline-flex items-center gap-3 rounded-xl border-2 border-ink/20 bg-white p-5 text-sm font-bold text-ink shadow-md"
              whileHover={{ y: -2 }}
            >
              <MapPin size={18} className="text-ink" aria-hidden="true" />
              {site.location}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
