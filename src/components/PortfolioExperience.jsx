"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { motion, useMotionTemplate, useMotionValue, useScroll, useSpring } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import ContactFooter from "@/components/ContactFooter";

export default function PortfolioExperience({ content }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 28, mass: 0.2 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(520px circle at ${mouseX}px ${mouseY}px, rgba(8, 8, 8, 0.12), transparent 42%)`;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      return undefined;
    }

    const lenis = new Lenis({
      lerp: 0.09,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.1
    });

    let frame;
    const raf = (time) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handlePointerMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <motion.div
        className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-ink"
        style={{ scaleX }}
        aria-hidden="true"
      />
      <motion.div className="pointer-events-none fixed inset-0 z-[2] hidden mix-blend-multiply md:block" style={{ background: spotlight }} aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <Navigation nav={content.nav} site={content.site} />
      <main>
        <Hero hero={content.hero} site={content.site} />
        <Marquee marquee={content.marquee} />
        <About about={content.about} site={content.site} />
        <Skills skills={content.skills} />
        <Projects projects={content.projects} />
        <Experience experience={content.experience} />
        <ContactFooter contact={content.contact} footer={content.footer} site={content.site} />
      </main>
    </div>
  );
}
