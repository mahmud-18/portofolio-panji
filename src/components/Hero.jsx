"use client";

import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Email: Mail
};

const ease = [0.22, 1, 0.36, 1];

export default function Hero({ hero, site }) {
  return (
    <section id="top" className="section-shell grid min-h-screen items-center pb-12 pt-28 md:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/80 px-3 py-2 text-xs font-semibold text-ink/62 shadow-panel backdrop-blur-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="size-2 rounded-full bg-ink" aria-hidden="true" />
            {hero.status}
          </motion.div>

          <motion.h1
            className="mt-8 font-display text-[clamp(3.35rem,8vw,6.4rem)] font-bold leading-[0.9] tracking-normal text-ink text-balance"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease }}
          >
            {hero.name}
          </motion.h1>

          <motion.div
            className="mt-6 flex min-h-9 flex-wrap items-center gap-x-3 gap-y-2 font-display text-xl font-semibold text-ink/68 md:text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
          >
            {hero.roles.map((role, index) => (
              <span key={role} className="inline-flex items-center gap-3">
                {role}
                {index < hero.roles.length - 1 ? <span className="text-ink/18">/</span> : null}
              </span>
            ))}
          </motion.div>

          <motion.p
            className="mt-7 max-w-2xl text-base leading-8 text-ink/62 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
          >
            {hero.intro}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease }}
          >
            <a
              href={hero.primaryAction.href}
              className="button-focus inline-flex items-center gap-2 rounded-xl bg-ink px-6 py-4 text-sm font-bold text-white shadow-panel transition hover:-translate-y-0.5 hover:bg-charcoal"
            >
              {hero.primaryAction.label}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              href={hero.secondaryAction.href}
              className="button-focus inline-flex items-center gap-2 rounded-xl border border-ink/14 bg-white px-6 py-4 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:border-ink"
            >
              {hero.secondaryAction.label}
              <Download size={17} aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
          >
            {hero.socials.map((social) => {
              const Icon = socialIcons[social.label] || ArrowUpRight;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  className="button-focus grid size-11 place-items-center rounded-xl border border-ink/10 bg-white text-ink/62 transition hover:border-ink hover:text-ink"
                  aria-label={social.label}
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[470px]"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease }}
        >
          <div className="absolute -inset-8 rounded-full bg-ink/[0.045] blur-3xl" aria-hidden="true" />
          <div className="absolute -right-6 top-10 h-36 w-36 rounded-full border border-ink/10 bg-white/70" aria-hidden="true" />

          <div className="relative overflow-hidden rounded-full border border-ink/15 bg-white p-2 shadow-[0_32px_90px_rgba(8,8,8,0.16)]">
            <div className="overflow-hidden rounded-full border border-ink/10 bg-smoke">
              <img className="aspect-square w-full object-cover grayscale" src={site.avatar.src} alt={site.avatar.alt} />
            </div>
          </div>

          <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-2xl border border-ink/10 bg-bone/92 px-4 py-3 text-sm font-semibold text-ink/72 shadow-panel backdrop-blur-xl">
            <MapPin size={15} className="text-ink" aria-hidden="true" />
            <span>
              {hero.locationLabel} {site.location}
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-14 grid gap-5 border-t border-ink/10 pt-6 sm:grid-cols-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease }}
      >
        {hero.quickStats.map((stat) => (
          <div key={stat.label} className="rounded-2xl border border-ink/10 bg-white/70 p-4 shadow-[0_16px_44px_rgba(8,8,8,0.06)]">
            <p className="font-display text-3xl font-bold text-ink">{stat.value}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink/42">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      <div className="hidden items-center justify-center gap-3 pt-10 text-xs font-semibold uppercase tracking-[0.22em] text-ink/34 md:flex">
        {hero.scrollLabel}
        <ArrowDown size={14} aria-hidden="true" />
      </div>
    </section>
  );
}
