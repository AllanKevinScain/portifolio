import { motion, type HTMLMotionProps } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function GhostLink(props: HTMLMotionProps<"a">) {
  const { children, className, ...rest } = props;
  return (
    <motion.a
      {...rest}
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.96 }}
      className={twMerge("transition disabled:opacity-40", className)}
    >
      {children}
    </motion.a>
  );
}
