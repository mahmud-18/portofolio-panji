"use client";

import { ArrowUpRight, Camera, Github, Linkedin, Mail, MapPin, Users } from "lucide-react";
import { motion } from "framer-motion";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram: Camera,
  Facebook: Users,
  Email: Mail
};

export default function ContactFooter({ contact, footer, site }) {
  return (
    <footer id={contact.id} className="relative z-10 scroll-mt-24 border-t border-ink bg-ink text-white md:scroll-mt-28">
      <div className="section-shell py-20 md:py-28">
        <motion.div
          className="grid gap-8 rounded-[2rem] border border-white/12 bg-gradient-to-br from-white/[0.12] via-white/[0.055] to-white/[0.02] p-6 shadow-2xl backdrop-blur-2xl md:p-8 lg:grid-cols-[0.95fr_1.05fr]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="eyebrow text-white/64 before:bg-white before:shadow-none">{contact.eyebrow}</p>
            <h2 className="mt-5 font-display text-4xl font-bold leading-[0.96] text-white text-balance md:text-6xl">
              {contact.title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/64">{contact.intro}</p>

            <div className="mt-8 grid gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="button-focus inline-flex items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.06] p-5 text-sm font-semibold text-white/78 transition hover:border-white hover:text-white"
              >
                <Mail size={18} aria-hidden="true" />
                <span>
                  {contact.emailLabel}: {contact.email}
                </span>
              </a>
              <div className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-sm font-semibold text-white/78">
                <MapPin size={18} className="text-white" aria-hidden="true" />
                <span>
                  {contact.locationLabel}: {contact.location}
                </span>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/38">{contact.socialsLabel}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {contact.socials.map((social) => {
                  const Icon = socialIcons[social.label] || ArrowUpRight;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="button-focus inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.055] px-4 py-3 text-sm font-bold text-white/70 transition hover:border-white hover:text-white"
                    >
                      <Icon size={16} aria-hidden="true" />
                      {social.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <form className="rounded-[1.5rem] border border-white/12 bg-black/36 p-5 md:p-6">
            <h3 className="font-display text-3xl font-bold text-white">{contact.form.title}</h3>
            <div className="mt-6 grid gap-4">
              <label className="grid gap-2 text-sm font-semibold text-white/64">
                {contact.form.nameLabel}
                <input className="rounded-xl border border-white/12 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-white" name="name" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-white/64">
                {contact.form.emailLabel}
                <input className="rounded-xl border border-white/12 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-white" name="email" type="email" />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-white/64">
                {contact.form.messageLabel}
                <textarea className="min-h-32 resize-none rounded-xl border border-white/12 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-white/25 focus:border-white" name="message" />
              </label>
              <button
                className="button-focus inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-4 text-sm font-bold text-ink transition hover:bg-paper"
                type="button"
              >
                {contact.form.buttonLabel}
                <ArrowUpRight size={16} aria-hidden="true" />
              </button>
            </div>
          </form>
        </motion.div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-sm text-white/42 md:flex-row md:items-center md:justify-between">
          <p>{footer.note}</p>
          <p>
            {footer.copyright} / {site.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
