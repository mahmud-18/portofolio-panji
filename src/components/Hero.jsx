"use client";

import { ArrowDown, ArrowUpRight, Camera, Github, Linkedin, Mail, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram: Camera,
  Facebook: Users,
  Email: Mail
};

const ease = [0.22, 1, 0.36, 1];

export default function Hero({ hero, site }) {
  return (
    <section id="top" className="section-shell grid min-h-screen items-center pb-12 pt-32 md:pt-28">
      <div className="grid items-center gap-8 lg:grid-cols-[0.96fr_1.04fr]">
        <div className="relative">
          <div className="absolute -left-6 top-12 hidden h-40 w-px bg-ink/20 lg:block" aria-hidden="true" />
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
            className="mt-7 font-display text-[clamp(3.45rem,8vw,6.7rem)] font-bold leading-[0.86] tracking-normal text-ink text-balance"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08, ease }}
          >
            {hero.name}
          </motion.h1>

          <motion.div
            className="mt-6 flex min-h-9 flex-wrap items-center gap-x-3 gap-y-2 font-display text-lg font-semibold text-ink/68 md:text-2xl"
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
            className="mt-6 max-w-2xl text-base leading-8 text-ink/62 md:text-lg"
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
              className="button-focus inline-flex items-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-bold text-white shadow-panel transition hover:-translate-y-0.5 hover:bg-charcoal"
            >
              {hero.primaryAction.label}
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>
            <a
              href={hero.secondaryAction.href}
              className="button-focus inline-flex items-center gap-2 rounded-full border border-ink/14 bg-white px-6 py-4 text-sm font-bold text-ink transition hover:-translate-y-0.5 hover:border-ink"
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
                  className="button-focus grid size-11 place-items-center rounded-full border border-ink/10 bg-white text-ink/62 transition hover:-translate-y-0.5 hover:border-ink hover:text-ink"
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
          <div className="absolute -inset-5 rounded-[2.5rem] bg-ink/[0.045] blur-3xl" aria-hidden="true" />
          <div className="absolute -right-4 top-8 hidden h-40 w-40 rounded-[2rem] border border-ink/10 bg-white/70 rotate-6 md:block" aria-hidden="true" />

          <div className="premium-card relative overflow-hidden rounded-[2.2rem] border border-ink/12 bg-white p-3 shadow-[0_32px_90px_rgba(8,8,8,0.16)]">
            <div className="overflow-hidden rounded-[1.6rem] border border-ink/10 bg-smoke">
              <img className="aspect-[4/5] w-full object-cover grayscale transition duration-700 hover:grayscale-0" src={site.avatar.src} alt={site.avatar.alt} />
            </div>
            <div className="absolute left-6 top-6 rounded-full border border-white/40 bg-white/78 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-ink/70 backdrop-blur-xl">
              Personal Brand
            </div>
          </div>

          <div className="absolute -bottom-4 left-5 right-5 flex items-center justify-center gap-2 rounded-2xl border border-ink/10 bg-bone/92 px-4 py-3 text-sm font-semibold text-ink/72 shadow-panel backdrop-blur-xl md:left-auto md:right-6">
            <MapPin size={15} className="text-ink" aria-hidden="true" />
            <span>
              {hero.locationLabel} {site.location}
            </span>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="mt-10 grid gap-3 border-t border-ink/10 pt-5 md:grid-cols-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5, ease }}
      >
        {hero.quickStats.map((stat) => (
          <motion.div
            key={stat.label}
            className="premium-card rounded-[1.4rem] border border-ink/10 bg-white/72 p-4 shadow-[0_16px_44px_rgba(8,8,8,0.06)] md:col-span-1"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.22 }}
          >
            <p className="font-display text-3xl font-bold text-ink">{stat.value}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink/42">{stat.label}</p>
          </motion.div>
        ))}
        {hero.focusCards.map((card) => (
          <motion.div
            key={card.label}
            className="premium-card rounded-[1.4rem] border border-ink/10 bg-ink p-4 text-white shadow-[0_18px_54px_rgba(8,8,8,0.14)] md:col-span-1"
            whileHover={{ y: -4 }}
            transition={{ duration: 0.22 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-white/42">{card.label}</p>
            <p className="mt-3 text-sm font-semibold leading-6 text-white/86">{card.value}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="hidden items-center justify-center gap-3 pt-10 text-xs font-semibold uppercase tracking-[0.22em] text-ink/34 md:flex">
        {hero.scrollLabel}
        <ArrowDown size={14} aria-hidden="true" />
      </div>
    </section>
  );
}
