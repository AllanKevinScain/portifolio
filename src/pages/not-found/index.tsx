import { Text } from "@/components";
import { motion } from "framer-motion";
import { Link } from "react-router";

export function NotFoundPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-(--color-bg) px-6 text-(--color-text)">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-size-[32px_32px] opacity-20" />

      <div className="absolute h-125 w-125 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_30%,transparent)] blur-[160px]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-xl space-y-8 text-center"
      >
        <motion.img
          src="/not-found-genious-question.webp"
          alt="Genie"
          className="mx-auto w-48 animate-pulse drop-shadow-2xl md:w-64"
        />

        <Text variant="h1" className="-tight">
          404
        </Text>

        <Text className="text-xl text-(--color-text)/80 md:text-2xl">This page does not exist</Text>

        <Text className="text-(--color-text)/60">It seems that not even a genius could find this page.</Text>

        <Link
          to="/"
          aria-label="Back to begining"
          className="inline-flex items-center justify-center rounded-xl bg-[linear-gradient(to_right,var(--color-primary),var(--color-secondary))] px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105"
        >
          Back to begining
        </Link>
      </motion.div>
    </main>
  );
}
