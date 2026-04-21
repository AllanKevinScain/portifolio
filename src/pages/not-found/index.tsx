import { Text } from "@/components";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { twMerge } from "tailwind-merge";

export function NotFoundPage() {
  return (
    <main
      className={twMerge(
        "relative min-h-screen flex items-center justify-center px-6",
        "bg-(--color-bg) text-(--color-text) overflow-hidden",
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
          "absolute w-125 h-125 rounded-full blur-[160px]",
          "bg-[color-mix(in_srgb,var(--color-primary)_30%,transparent)]",
        )}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-xl space-y-8"
      >
        <motion.img
          src="/not-found-genious-question.webp"
          alt="Genie"
          className={twMerge(
            "mx-auto w-48 md:w-64",
            "animate-pulse drop-shadow-2xl",
          )}
        />

        <Text variant="h1" className="-tight">
          404
        </Text>

        <Text className="text-xl md:text-2xl text-(--color-text)/80">
          Esta página não existe
        </Text>

        <Text className="text-(--color-text)/60">
          Parece que nem o gênio conseguiu encontrar essa página.
        </Text>

        <Link
          to="/"
          className={twMerge(
            "inline-flex items-center justify-center",
            "px-6 py-3 rounded-xl font-medium",
            "text-white",
            "bg-[linear-gradient(to_right,var(--color-primary),var(--color-secondary))]",
            "hover:scale-105 transition-all duration-300",
          )}
        >
          Voltar para o início
        </Link>
      </motion.div>
    </main>
  );
}
