import type { Tech } from "@/hooks";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function TechListItem(props: Tech & { index: number }) {
  const { description, name, nivel: _, index } = props;

  return (
    <motion.li
      initial={{ opacity: 0, y: 12, height: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ height: "auto" }}
      className={twMerge(
        "group",
        "relative",
        "py-6",
        "overflow-y-hidden",
        "border-b border-[color-mix(in_srgb,var(--color-border)_60%,transparent)]",
      )}
    >
      <div
        className={twMerge(
          "absolute inset-0 opacity-0 transition",
          "bg-[color-mix(in_srgb,var(--color-primary)_5%,transparent)]",
          "pointer-events-none",
          "group-hover:opacity-100",
        )}
      />

      <div
        className={twMerge(
          "absolute left-0 top-0 bottom-0 w-0.5",
          "bg-[linear-gradient(to_bottom,var(--color-primary),var(--color-secondary))]",
          "opacity-0",
          "transition",
          "group-hover:opacity-100",
        )}
      />

      <div className="relative pl-4">
        <h3
          className={twMerge(
            "text-lg font-semibold text-(--color-text)",
            "group-hover:text-(--color-primary)",
            "transition",
          )}
        >
          {name}
        </h3>

        <p
          className={twMerge(
            "mt-1",
            "text-sm leading-relaxed text-[color-mix(in_srgb,var(--color-text)_70%,transparent)]",
          )}
        >
          {description}
        </p>
      </div>
    </motion.li>
  );
}
