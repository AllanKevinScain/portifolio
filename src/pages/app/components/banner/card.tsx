import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const workspaceSteps = [
  { label: "Input", value: "Build a scalable interface" },
  { label: "Reasoning", value: "Analysing product context" },
  { label: "Tools", value: "Design · Code · Automation" },
  { label: "Output", value: "Accessible user experience" },
];

export function CardTech() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={isInView ? { opacity: 1, scale: 1, y: [0, -8, 0] } : { opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.8, y: { duration: 8, repeat: Infinity, ease: "easeInOut" } }}
      className="relative aspect-square overflow-hidden rounded-2xl border border-(--color-border) bg-[linear-gradient(145deg,color-mix(in_srgb,var(--color-bg)_88%,var(--color-primary)),var(--color-bg))] p-5 shadow-2xl md:p-7"
    >
      <div className="pointer-events-none absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[28px_28px]" />
      <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_35%,transparent)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-[color-mix(in_srgb,var(--color-secondary)_30%,transparent)] blur-3xl" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-(--color-primary) uppercase">
            <motion.span animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }} className="h-2 w-2 rounded-full bg-(--color-primary)" />
            AI Workspace
          </div>
          <span className="rounded-full border border-[color-mix(in_srgb,var(--color-primary)_30%,transparent)] bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] px-2 py-1 text-[10px] font-medium text-(--color-text)">ONLINE</span>
        </div>

        <div className="my-5 h-px bg-[linear-gradient(to_right,var(--color-primary),transparent)]" />

        <div className="flex flex-1 flex-col justify-center gap-3">
          {workspaceSteps.map((step, index) => (
            <motion.div key={step.label} initial={{ opacity: 0, x: 18 }} animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 18 }} transition={{ delay: index * 0.12 + 0.2, duration: 0.45 }} className="relative rounded-xl border border-[color-mix(in_srgb,var(--color-text)_14%,transparent)] bg-[color-mix(in_srgb,var(--color-bg)_72%,transparent)] px-4 py-3 backdrop-blur-sm">
              <div className="text-[10px] font-bold tracking-[0.16em] text-(--color-primary) uppercase">{step.label}</div>
              <div className="mt-1 text-xs text-[color-mix(in_srgb,var(--color-text)_82%,transparent)]">{step.value}</div>
              {index < workspaceSteps.length - 1 && <div className="absolute -bottom-3 left-6 h-3 w-px bg-[linear-gradient(to_bottom,var(--color-primary),transparent)]" />}
            </motion.div>
          ))}
        </div>

        <div className="mt-5 flex gap-2">
          {['Agents', 'Vision', 'RAG'].map((label) => <span key={label} className="rounded-full bg-[color-mix(in_srgb,var(--color-primary)_14%,transparent)] px-3 py-1 text-[10px] font-medium text-(--color-text)">{label}</span>)}
        </div>
      </div>
    </motion.div>
  );
}
