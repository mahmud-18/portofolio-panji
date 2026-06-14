"use client";

import {
  BarChart3,
  Boxes,
  Clock3,
  FileSpreadsheet,
  Headphones,
  Laptop,
  Megaphone,
  MessageCircle,
  PackageCheck,
  PenTool,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";

const iconMap = {
  "Microsoft Excel": FileSpreadsheet,
  "Google Sheets": BarChart3,
  "Canva Design": PenTool,
  "Basic IT Support": Laptop,
  "Data Administration": FileSpreadsheet,
  "Social Media Management": Megaphone,
  "Marketplace Operations": ShoppingBag,
  "Warehouse Management": Boxes,
  "Inventory Control": PackageCheck,
  "Retail Operations": ShoppingBag,
  "Order Processing": PackageCheck,
  "Business Administration": BarChart3,
  "Customer Service": Headphones,
  "Good Communication": MessageCircle,
  "Time Management": Clock3,
  "Attention to Detail": ShieldCheck,
  "Team Coordination": Users,
  "Community Engagement": Users,
};

// Icon color mapping by category
const iconColorMap = {
  "Technical & Software": "text-gray-200", // Light gray
  "Business Operations": "text-gray-300", // Medium-light gray
  "Coordination & Service": "text-gray-400", // Medium gray
  "Specialized Experience": "text-gray-500", // Darker gray
};

function SkillCard({ skill, category, index }) {
  const Icon = iconMap[skill] || Sparkles;
  const iconColor = iconColorMap[category] || "text-gray-300";

  return (
    <motion.li
      className="group premium-card min-h-40 rounded-[1.35rem] border border-white/12 bg-gradient-to-br from-white/[0.11] to-white/[0.035] p-5 shadow-[0_18px_54px_rgba(0,0,0,0.22)] backdrop-blur-xl transition hover:border-white/20"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -7, scale: 1.015 }}
      transition={{
        duration: 0.45,
        delay: index * 0.035,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="relative z-10 flex h-full flex-col justify-between gap-6">
        <div className="flex items-start justify-between gap-4">
          <span className="grid size-12 place-items-center rounded-2xl border border-white/12 bg-white/[0.08] text-ink shadow-[0_12px_32px_rgba(0,0,0,0.18)] transition group-hover:-rotate-3 group-hover:scale-105">
            <Icon
              size={21}
              className={`transition-all duration-300 ${iconColor}`}
              aria-hidden="true"
            />
          </span>
          <span className="rounded-full border border-white/10 px-2.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/38">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div>
          <h4 className="font-display text-xl font-bold leading-tight text-white">
            {skill}
          </h4>
          <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-white/42">
            {category}
          </p>
        </div>
      </div>
    </motion.li>
  );
}

export default function Skills({ skills }) {
  const totalSkills = skills.clusters.reduce(
    (total, cluster) => total + cluster.skills.length,
    0,
  );

  return (
    <section
      id={skills.id}
      className="relative z-10 scroll-mt-24 overflow-hidden bg-ink py-20 text-white md:scroll-mt-28 md:py-28"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-px w-[80vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <motion.div
          className="absolute -left-24 top-28 h-72 w-72 rounded-full border border-white/10 bg-white/[0.035] blur-2xl"
          animate={{ x: [0, 34, 0], y: [0, -22, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-28 right-0 h-80 w-80 rounded-full border border-white/10 bg-white/[0.04] blur-2xl"
          animate={{ x: [0, -30, 0], y: [0, 28, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:42px_42px] opacity-[0.09]" />
      </div>

      <div className="section-shell">
        <motion.div
          className="mx-auto mb-12 max-w-3xl text-center"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/54">
            <span
              className="size-1.5 rounded-full bg-white"
              aria-hidden="true"
            />
            {skills.eyebrow}
          </span>
          <h2 className="font-display text-4xl font-bold leading-[0.96] text-white text-balance md:text-6xl">
            {skills.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/56 md:text-lg">
            {skills.intro}
          </p>
        </motion.div>

        <div className="space-y-12">
          {skills.clusters.map((cluster, groupIndex) => (
            <motion.div
              key={cluster.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-90px" }}
              transition={{
                duration: 0.62,
                delay: groupIndex * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="mb-5 flex flex-col gap-3 border-b border-white/10 pb-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
                    {cluster.name}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-white/48">
                    {cluster.summary}
                  </p>
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/32">
                  {cluster.skills.length} skills
                </span>
              </div>

              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {cluster.skills.map((skill, index) => (
                  <SkillCard
                    key={`${cluster.name}-${skill}`}
                    skill={skill}
                    category={cluster.name}
                    index={index}
                  />
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 rounded-[1.5rem] border border-white/10 bg-white/[0.055] p-5 text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-medium text-white/48">
            {totalSkills} practical skills across {skills.clusters.length}{" "}
            capability groups.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
