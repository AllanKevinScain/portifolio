import { motion } from "framer-motion";
import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface CtaLinkProps extends Pick<
  ComponentProps<"a">,
  "href" | "target" | "rel"
> {
  variant?: "solid" | "outline";
  label: string;
}

export function CtaLink(props: CtaLinkProps) {
  const { variant = "solid", label, ...rest } = props;

  if (variant === "solid") {
    return (
      <motion.a
        {...rest}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        className={twMerge(
          "inline-flex items-center gap-2",
          "font-medium text-white",
          "px-6 py-3 rounded-lg",
          "transition-all",
          "shadow-lg",
          "bg-linear-to-r from-(--color-primary) to-(--color-secondary)",
          "shadow-[0_10px_30px_color-mix(in_srgb,var(--color-primary)_40%,transparent)]",
        )}
      >
        {label}
      </motion.a>
    );
  }

  return (
    <motion.a
      {...rest}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className={twMerge(
        "inline-flex items-center gap-2",
        "font-medium",
        "px-6 py-3 rounded-lg",
        "border transition-all",
        "text-(--color-text)",
        "border-(--color-border)",
      )}
      onMouseEnter={(e) => {
        e.currentTarget.style.background =
          "color-mix(in srgb, var(--color-primary) 15%, transparent)";
        e.currentTarget.style.borderColor = "var(--color-primary)";
        e.currentTarget.style.color = "var(--color-primary)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.borderColor = "var(--color-border)";
        e.currentTarget.style.color = "var(--color-text)";
      }}
    >
      {label}
    </motion.a>
  );
}
