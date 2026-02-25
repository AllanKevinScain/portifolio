import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function SkillGroup({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-semibold uppercase tracking-wider text-(--color-primary)">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <motion.div
            key={item}
            className={twMerge(
              "px-4 py-2 rounded-lg",
              "border border-(--color-border)",
              "bg-[color-mix(in_srgb,var(--color-bg)_80%,transparent)]",
            )}
          >
            {item}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
