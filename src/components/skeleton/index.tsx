import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface SkeletonProps {
  height?: number | string;
  className?: string;
}

export function Skeleton(props: SkeletonProps) {
  const { height = 500, className } = props;

  return (
    <div
      style={{
        height: typeof height === "number" ? `${height}px` : height,
      }}
      className={twMerge(
        "relative w-full overflow-hidden rounded-2xl",
        "border border-(--color-border)",
        "bg-[color-mix(in_srgb,var(--color-bg)_80%,transparent)]",
        className,
      )}
    >
      <div
        className={twMerge(
          "absolute inset-0",
          "bg-[linear-gradient(to_right,transparent,rgba(255,255,255,0.04),transparent)]",
        )}
      />

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          repeat: Infinity,
          duration: 1.6,
          ease: "linear",
        }}
        className={twMerge(
          "absolute inset-0",
          "bg-[linear-gradient(110deg,transparent,rgba(255,255,255,0.08),transparent)]",
        )}
      />

      <div
        className={twMerge(
          "absolute inset-0 opacity-20",
          "bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]",
          "bg-size-[28px_28px]",
        )}
      />
    </div>
  );
}
