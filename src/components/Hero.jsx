"use client";

import {
  ArrowDown,
  ArrowUpRight,
  Camera,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram: Camera,
  Facebook: Users,
  Email: Mail,
};

const ease = [0.22, 1, 0.36, 1];

export default function Hero({ hero, site }) {
  return (
    <section
      id="top"
      className="section-shell grid min-h-screen items-center pb-12 pt-32 md:pt-28"
    >
      <div className="grid items-center gap-8 lg:grid-cols-[0.96fr_1.04fr]">
        <div className="relative">
          <div
            className="absolute -left-6 top-12 hidden h-40 w-px bg-ink/30 lg:block"
            aria-hidden="true"
          />
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-white px-4 py-2.5 text-xs font-bold text-ink shadow-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="size-2 rounded-full bg-ink" aria-hidden="true" />
            {hero.status}
          </motion.div>

          <motion.h1
            className="mt-8 font-display text-[clamp(3.45rem,8vw,6.7rem)] font-bold leading-[0.86] tracking-tight text-ink text-balance"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease }}
          >
            {hero.name}
          </motion.h1>

          <motion.div
            className="mt-6 flex min-h-9 flex-wrap items-center gap-x-3 gap-y-2 font-display text-lg font-semibold text-ink md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease }}
          >
            {hero.roles.map((role, index) => (
              <span key={role} className="inline-flex items-center gap-3">
                {role}
                {index < hero.roles.length - 1 ? (
                  <span className="text-ink/25">/</span>
                ) : null}
              </span>
            ))}
          </motion.div>

          <motion.p
            className="mt-6 max-w-2xl text-base leading-8 text-ink/70 md:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease }}
          >
            {hero.intro}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32, ease }}
          >
            <a
              href={hero.primaryAction.href}
              className="button-focus inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-ink/90 hover:shadow-xl hover:-translate-y-0.5"
            >
              {hero.primaryAction.label}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              href={hero.secondaryAction.href}
              className="button-focus inline-flex items-center gap-2 rounded-lg border-2 border-ink bg-white px-6 py-3.5 text-sm font-bold text-ink transition hover:bg-ink/5 hover:-translate-y-0.5"
            >
              {hero.secondaryAction.label}
              <Mail size={17} aria-hidden="true" />
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
                  className="button-focus grid size-11 place-items-center rounded-lg border-2 border-ink/30 bg-white text-ink transition hover:border-ink hover:bg-ink hover:text-white hover:-translate-y-0.5"
                  aria-label={social.label}
                >
                  <Icon size={18} aria-hidden="true" />
                </a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[560px]"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.18, ease }}
        >
          <div
            className="absolute -inset-5 rounded-[2.5rem] bg-ink/10 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="absolute -right-4 top-8 hidden h-40 w-40 rounded-[2rem] border border-ink/20 bg-white/50 rotate-6 md:block"
            aria-hidden="true"
          />

          <div className="premium-card relative overflow-hidden rounded-2xl border-2 border-ink/20 bg-white p-1 shadow-xl">
            <div className="overflow-hidden rounded-xl border border-ink/10 bg-gray-100">
              <img
                className="aspect-[4/5] w-full object-cover transition duration-500 hover:scale-105"
                src={site.avatar.src}
                alt={site.avatar.alt}
              />
            </div>
            <div className="absolute left-5 top-5 rounded-lg border-2 border-white bg-ink/90 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-white shadow-lg">
              Personal Brand
            </div>
          </div>

          <motion.div
            className="absolute -bottom-4 left-5 right-5 flex items-center justify-center gap-2 rounded-xl border-2 border-ink/20 bg-white px-4 py-3 text-sm font-semibold text-ink shadow-lg md:left-auto md:right-6"
            whileHover={{ y: -2 }}
          >
            <MapPin size={16} className="text-ink" aria-hidden="true" />
            <span>
              {hero.locationLabel} {site.location}
            </span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="mt-14 grid gap-4 border-t border-ink/15 pt-8 md:grid-cols-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease }}
      >
        {hero.quickStats.map((stat) => (
          <motion.div
            key={stat.label}
            className="rounded-xl border-2 border-ink/15 bg-white p-5 shadow-md transition hover:border-ink/30 hover:shadow-lg"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.22 }}
          >
            <p className="font-display text-4xl font-bold text-ink">
              {stat.value}
            </p>
            <p className="mt-2 text-xs font-bold uppercase tracking-widest text-ink/55">
              {stat.label}
            </p>
          </motion.div>
        ))}
        {hero.focusCards.map((card) => (
          <motion.div
            key={card.label}
            className="rounded-xl border-2 border-ink bg-ink p-5 text-white shadow-lg transition hover:shadow-xl"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.22 }}
          >
            <p className="text-xs font-bold uppercase tracking-widest text-white/60">
              {card.label}
            </p>
            <p className="mt-3 text-sm font-semibold leading-6 text-white">
              {card.value}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <div className="hidden items-center justify-center gap-3 pt-12 text-xs font-bold uppercase tracking-wider text-ink/50 md:flex">
        {hero.scrollLabel}
        <ArrowDown size={16} aria-hidden="true" />
      </div>
    </section>
  );
}
