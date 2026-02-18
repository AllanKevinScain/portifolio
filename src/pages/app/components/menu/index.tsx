import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { useTheme } from "@/hooks";
import { TbPick } from "react-icons/tb";

interface MenuProps {
  items: { label: string; value: string; icon?: Element }[];
}

export function Menu(props: MenuProps) {
  const { items } = props;
  const { setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={twMerge(
          "relative z-50",
          "w-11 h-11 rounded-xl",
          "flex items-center justify-center",
          "bg-[color-mix(in_srgb,var(--color-surface)_90%,transparent)]",
          "border border-[color-mix(in_srgb,var(--color-text)_15%,transparent)]",
          "hover:bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)]",
          "transition-all",
        )}
      >
        <div className="space-y-1">
          <TbPick size={30} />
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className={twMerge(
              "absolute right-0 mt-4 w-64",
              "rounded-2xl",
              "p-6",
              "overflow-hidden",
              "bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--color-surface)_95%,transparent),color-mix(in_srgb,var(--color-surface)_85%,transparent))]",
              "border border-[color-mix(in_srgb,var(--color-text)_15%,transparent)]",
              "shadow-[0_20px_60px_color-mix(in_srgb,var(--color-primary)_30%,transparent)]",
            )}
          >
            <div
              className={twMerge(
                "absolute inset-0 opacity-20 pointer-events-none",
                "bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-text)_10%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--color-text)_10%,transparent)_1px,transparent_1px)]",
                "bg-size-[28px_28px]",
              )}
            />

            <nav className="relative flex flex-col gap-4">
              {items.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setTheme(item.value);
                    setOpen(false);
                  }}
                  className={twMerge(
                    "px-4 py-2 rounded-lg",
                    "font-medium",
                    "transition-all",
                    "text-(--color-text)",
                    "hover:bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)]",
                    "hover:text-(--color-primary)",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="absolute inset-0 pointer-events-none">
              <div
                className={twMerge(
                  "absolute -inset-1 rounded-2xl blur-xl opacity-30",
                  "bg-[color-mix(in_srgb,var(--color-primary)_15%,transparent)]",
                )}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
