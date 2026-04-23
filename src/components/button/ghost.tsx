import { motion, type HTMLMotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function GhostButton(props: HTMLMotionProps<"button">) {
  const { children, className, ...rest } = props;
  return (
    <motion.button
      {...rest}
      className={twMerge(
        "inline-flex w-fit cursor-pointer items-center gap-2 rounded-xl text-(--color-text) opacity-70 transition-opacity",
        "disabled:opacity-40",
        "hover:opacity-100",
        rest.disabled && "disabled:text-neutral-500",
        rest.disabled && "disabled:cursor-not-allowed",
        className,
      )}
    >
      {children}
    </motion.button>
  );
}
