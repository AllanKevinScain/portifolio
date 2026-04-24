import { optionsTheme } from "@/data/theme";
import { useTheme } from "@/hooks";
import type { ThemeType } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { MdLightMode } from "react-icons/md";
import { twMerge } from "tailwind-merge";

interface ThemeMenurops {
  items: { label: string; value: ThemeType; icon?: Element }[];
}

export function ThemeMenu(props: ThemeMenurops) {
  const { items } = props;
  const { setTheme, theme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Alternar tema"
        className="relative z-50 transition-all hover:bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] border border-[color-mix(in_srgb,var(--color-text)_15%,transparent)] w-11 h-11 rounded-xl flex items-center justify-center cursor-pointer bg-[color-mix(in_srgb,var(--color-bg)_90%,transparent)]"
      >
        <div className="space-y-1">
          {optionsTheme[theme].icon || <MdLightMode size={22} />}
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="absolute right-0 mt-4 w-64 shadow-[0_20px_60px_color-mix(in_srgb,var(--color-primary)_30%,transparent)] border border-[color-mix(in_srgb,var(--color-text)_15%,transparent)] bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--color-bg)_95%,transparent),color-mix(in_srgb,var(--color-bg)_85%,transparent))] overflow-hidden p-6 rounded-2xl"
          >
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-size-[28px_28px] bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-text)_10%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--color-text)_10%,transparent)_1px,transparent_1px)]" />

            <nav className="relative flex flex-col gap-4 max-h-75 overflow-auto scroll-div">
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
                    "cursor-pointer",
                    "hover:bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)]",
                    theme === item.value &&
                      "bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)]",
                    "hover:text-(--color-primary)",
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -inset-1 rounded-2xl blur-xl opacity-30 bg-[color-mix(in_srgb,var(--color-primary)_15%,transparent)]" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
