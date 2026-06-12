"use client";

import { motion } from "framer-motion";

export default function ProjectVisual({ visual }) {
  return (
    <div className="relative min-h-[360px] overflow-hidden border border-ink/12 bg-ink text-paper md:min-h-[480px]">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            visual.theme === "ledger"
              ? "linear-gradient(135deg, rgba(255,109,77,0.26), rgba(247,242,232,0.06) 42%, rgba(17,17,15,0) 70%)"
              : visual.theme === "rooms"
                ? "linear-gradient(135deg, rgba(159,231,255,0.24), rgba(215,255,100,0.12) 42%, rgba(17,17,15,0) 70%)"
                : "linear-gradient(135deg, rgba(215,255,100,0.28), rgba(159,231,255,0.12) 42%, rgba(17,17,15,0) 70%)"
        }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:34px_34px]" />

      <div className="relative grid min-h-[360px] gap-5 p-4 md:min-h-[480px] md:grid-cols-[0.9fr_1.1fr] md:p-6">
        <div className="flex flex-col justify-between border border-white/12 bg-white/[0.05] p-4 backdrop-blur-xl">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-paper/52">{visual.label}</p>
            <p className="mt-5 font-display text-6xl font-semibold md:text-7xl" style={{ color: visual.accent }}>
              {visual.metric}
            </p>
            <p className="mt-2 text-sm text-paper/62">{visual.caption}</p>
          </div>

          <div className="mt-10 grid gap-3">
            {visual.rows.map((row, index) => (
              <div key={row} className="flex items-center justify-between border-t border-white/10 pt-3">
                <span className="text-sm text-paper/68">{row}</span>
                <span className="font-display text-sm font-semibold" style={{ color: visual.accent }}>
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden border border-white/12 bg-paper/8 p-4 backdrop-blur-xl">
          <div className="flex h-full flex-col justify-between">
            <div className="grid grid-cols-7 items-end gap-2 md:gap-3">
              {visual.bars.map((bar, index) => (
                <motion.div
                  key={`${bar}-${index}`}
                  className="min-h-16 border border-white/10 bg-white/8"
                  initial={{ height: 24 }}
                  whileInView={{ height: `${bar}%` }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.8, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    background: `linear-gradient(to top, ${visual.accent}, rgba(255,255,255,0.08))`
                  }}
                  aria-hidden="true"
                />
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {visual.rows.slice(0, 2).map((row) => (
                <div key={row} className="border border-white/12 bg-ink/44 p-3">
                  <span className="block h-1.5 w-10" style={{ backgroundColor: visual.accent }} />
                  <p className="mt-8 text-sm font-semibold text-paper">{row}</p>
                </div>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-3 border border-white/12 bg-ink/44 p-3">
              <motion.span
                className="size-3"
                style={{ backgroundColor: visual.accent }}
                animate={{ scale: [1, 1.45, 1], opacity: [0.75, 1, 0.75] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
                aria-hidden="true"
              />
              <div className="h-2 flex-1 bg-white/10">
                <motion.div
                  className="h-full"
                  style={{ backgroundColor: visual.accent }}
                  initial={{ width: "35%" }}
                  whileInView={{ width: "78%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
