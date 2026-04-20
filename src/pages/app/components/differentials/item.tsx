import type { Differential } from "@/schemas";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function DifferentialCard(props: Differential) {
  const { title, description } = props;

  return (
    <motion.li
      key={title}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -10 }}
      className={twMerge(
        "relative group rounded-2xl p-6 overflow-hidden transition-all",
        "border",
        "bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--color-bg)_95%,transparent),color-mix(in_srgb,var(--color-bg)_85%,transparent))]",
        "border-[color-mix(in_srgb,var(--color-text)_15%,transparent)]",
      )}
    >
      <div
        className={twMerge(
          "absolute inset-0 opacity-20 pointer-events-none",
          "bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-text)_10%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--color-text)_10%,transparent)_1px,transparent_1px)]",
          "bg-size-[28px_28px]",
        )}
      />

      <div
        className={twMerge(
          "relative w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition group-hover:scale-110",
          "bg-[linear-gradient(to_bottom_right,var(--color-primary),var(--color-secondary))]",
          "shadow-[0_10px_30px_color-mix(in_srgb,var(--color-primary)_40%,transparent)]",
        )}
      >
        "'--'"
      </div>

      <h3
        className={twMerge(
          "mt-5 text-lg font-semibold transition",
          "text-(--color-text)",
        )}
      >
        {title}
      </h3>

      <p
        className={twMerge(
          "mt-2 text-sm leading-relaxed",
          "text-[color-mix(in_srgb,var(--color-text)_65%,transparent)]",
        )}
      >
        {description}
      </p>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
        <div
          className={twMerge(
            "absolute -inset-1 blur-xl rounded-2xl",
            "bg-[color-mix(in_srgb,var(--color-primary)_15%,transparent)]",
          )}
        />
      </div>
    </motion.li>
  );
}
