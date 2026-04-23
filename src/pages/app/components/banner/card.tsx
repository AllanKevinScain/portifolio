import { useTheme } from "@/hooks";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function CardTech() {
  const { theme } = useTheme();

  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      animate={isInView ? { y: [0, -10, 0] } : { y: 0 }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="will-change-transform transform-gpu relative aspect-square rounded-2xl overflow-hidden border border-(--color-border) shadow-2xl bg-[linear-gradient(to_bottom_right,var(--color-secondary),var(--color-bg))]"
    >
      <div
        className="absolute inset-0 opacity-20
        bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
        bg-size-[32px_32px]"
      />

      <div
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-xl
        bg-[color-mix(in_srgb,var(--color-primary)_30%,transparent)]"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={`/${theme || "light"}.webp`}
          alt="Avatar de Allan Kevin"
          className="w-60 h-60 rounded-full md:w-100 md:h-100 object-cover shadow-xl"
        />
      </div>
    </motion.div>
  );
}
