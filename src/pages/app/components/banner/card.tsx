import { useTheme } from "@/hooks";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function CardTech() {
  const { theme } = useTheme();

  return (
    <motion.div
      animate={{ y: [0, -18, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className={twMerge(
        "relative aspect-square rounded-2xl overflow-hidden",
        "border border-(--color-border)",
        "shadow-2xl",
        "bg-[linear-gradient(to_bottom_right,var(--color-secondary),var(--color-bg))]",
      )}
    >
      <div
        className={twMerge(
          "absolute inset-0 opacity-20",
          "bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]",
          "bg-size-[32px_32px]",
        )}
      />

      <div
        className={twMerge(
          "absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl",
          "bg-[color-mix(in_srgb,var(--color-primary)_30%,transparent)]",
        )}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={`/${theme || "light"}.png`}
          className={twMerge(
            "w-60 h-60 rounded-full",
            "md:w-100 md:h-100",
            "flex items-center justify-center text-5xl",
            "shadow-xl",
            "object-cover",
          )}
        />
      </div>
    </motion.div>
  );
}
