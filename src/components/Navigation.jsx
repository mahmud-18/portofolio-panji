"use client";

import { useState, useEffect } from "react";
import {
  Briefcase,
  Home,
  Mail,
  Menu,
  Rocket,
  User,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const iconMap = {
  home: Home,
  user: User,
  zap: Zap,
  rocket: Rocket,
  briefcase: Briefcase,
  mail: Mail,
};

const menuVariants = {
  hidden: {
    opacity: 0,
    y: -30,
    scale: 0.9,
    rotateY: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    scale: 0.9,
    rotateY: -10,
    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20, rotateY: -15 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const menuIconVariants = {
  closed: { rotate: 0, scale: 1 },
  open: { rotate: 90, scale: 1.1 },
};

export default function Navigation({ nav, site }) {
  const [open, setOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar if scrolling up or at top
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      }
      // Hide navbar if scrolling down
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 py-4">
      <motion.nav
        className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between rounded-xl border border-white/10 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 px-6 text-white shadow-2xl"
        aria-label={nav.label}
        animate={{ y: isVisible ? 0 : -120 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <a
          className="button-focus flex items-center gap-2 font-display text-lg font-bold tracking-wide"
          href="#top"
          aria-label={site.fullName}
        >
          <span className="text-white/50">~</span>
          <span>{site.fullName}</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-2 lg:flex">
          {nav.items.map((item) => {
            const Icon = iconMap[item.icon] || Home;

            return (
              <motion.a
                key={item.href}
                href={item.href}
                className="button-focus group inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon
                  size={17}
                  className="text-white/60 transition group-hover:text-white"
                  aria-hidden="true"
                />
                {item.label}
              </motion.a>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <motion.a
          href={nav.cta.href}
          className="button-focus hidden items-center gap-2 rounded-lg bg-white px-5 py-2 text-sm font-bold text-slate-900 transition hover:bg-cyan-400 md:inline-flex"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          {nav.cta.label}
          <Mail size={16} aria-hidden="true" />
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          className="button-focus grid size-10 place-items-center rounded-lg border border-white/20 bg-white/5 text-white transition hover:bg-white/10 lg:hidden"
          type="button"
          aria-label={open ? nav.menuCloseLabel : nav.menuOpenLabel}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          variants={menuIconVariants}
          animate={open ? "open" : "closed"}
          transition={{ duration: 0.3 }}
        >
          {open ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </motion.button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open ? (
          <motion.div
            className="mx-auto mt-3 w-[min(100%-2rem,42rem)] rounded-xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-900 p-4 text-white shadow-2xl lg:hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="grid gap-2">
              {nav.items.map((item, i) => {
                const Icon = iconMap[item.icon] || Home;

                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="button-focus flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"
                    onClick={() => setOpen(false)}
                    variants={itemVariants}
                    custom={i}
                    initial="hidden"
                    animate="visible"
                  >
                    <Icon
                      size={17}
                      className="text-white/60"
                      aria-hidden="true"
                    />
                    {item.label}
                  </motion.a>
                );
              })}

              {/* Mobile CTA */}
              <motion.a
                href={nav.cta.href}
                className="button-focus mt-3 inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-3 text-sm font-bold text-slate-900 transition hover:bg-cyan-400"
                variants={itemVariants}
                custom={nav.items.length}
                initial="hidden"
                animate="visible"
              >
                {nav.cta.label}
                <Mail size={15} aria-hidden="true" />
              </motion.a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
