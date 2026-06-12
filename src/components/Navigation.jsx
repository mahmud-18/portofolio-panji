"use client";

import { useState } from "react";
import { Briefcase, Download, Home, Mail, Menu, Rocket, User, X, Zap } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const iconMap = {
  home: Home,
  user: User,
  zap: Zap,
  rocket: Rocket,
  briefcase: Briefcase,
  mail: Mail
};

export default function Navigation({ nav, site }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-ink/10 bg-bone/78 backdrop-blur-2xl">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 text-ink" aria-label={nav.label}>
        <a className="button-focus flex items-center gap-2 font-display text-lg font-bold tracking-wide" href="#top" aria-label={site.fullName}>
          <span className="text-ink/45">~</span>
          <span>{site.fullName.split(" ")[0].toUpperCase()}</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {nav.items.map((item) => {
            const Icon = iconMap[item.icon] || Home;

            return (
              <a
                key={item.href}
                href={item.href}
                className="button-focus group inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium text-ink/62 transition hover:bg-ink/5 hover:text-ink"
              >
                <Icon size={15} className="text-ink/42 transition group-hover:text-ink" aria-hidden="true" />
                {item.label}
              </a>
            );
          })}
        </div>

        <a
          href={nav.cta.href}
          className="button-focus hidden items-center gap-2 rounded-full border border-ink bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-transparent hover:text-ink md:inline-flex"
        >
          {nav.cta.label}
          <Download size={15} aria-hidden="true" />
        </a>

        <button
          className="button-focus grid size-10 place-items-center rounded-full border border-ink/12 bg-white text-ink lg:hidden"
          type="button"
          aria-label={open ? nav.menuCloseLabel : nav.menuOpenLabel}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="mx-4 mb-4 rounded-2xl border border-ink/10 bg-bone/96 p-3 text-ink shadow-2xl backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="grid gap-1">
              {nav.items.map((item) => {
                const Icon = iconMap[item.icon] || Home;

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="button-focus flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-ink/72 hover:bg-ink/5"
                    onClick={() => setOpen(false)}
                  >
                    <Icon size={17} className="text-ink" aria-hidden="true" />
                    {item.label}
                  </a>
                );
              })}
              <a
                href={nav.cta.href}
                className="button-focus mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-4 py-3 text-sm font-bold text-white"
              >
                {nav.cta.label}
                <Download size={15} aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
