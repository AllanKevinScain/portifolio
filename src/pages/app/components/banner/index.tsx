import { motion } from "framer-motion";
import { CardTech } from "./card";
import { twMerge } from "tailwind-merge";
import { CustomLink } from "@/components";

export function Banner() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span
          className={twMerge(
            "mb-4 px-4 py-1 inline-block text-xs uppercase tracking-widest rounded-full border",
            "text-(--color-primary)",
            "border-[color-mix(in_srgb,var(--color-primary)_30%,transparent)]",
            "bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)]",
          )}
        >
          Always prepared for new challenges
        </span>

        <h1
          className={twMerge(
            "text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight",
            "text-(--color-text)",
            "bg-linear-to-r from-(--color-primary) to-(--color-secondary) bg-clip-text text-transparent",
          )}
        >
          Front-end Engineer
        </h1>

        <p
          className={twMerge(
            "mt-6 text-lg max-w-xl",
            "text-[color-mix(in_srgb,var(--color-text)_70%,transparent)]",
          )}
        >
          Building high-performance, scalable web interfaces with a focus on
          User Experience and robust architecture.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <CustomLink.solid href="/create-portifolio">
            Here my actual PDF portifolio
          </CustomLink.solid>
          <CustomLink.outline href="https://www.linkedin.com/in/allan-kevin-scain-19802718a/">
            Send message
          </CustomLink.outline>
        </div>
      </motion.div>

      <CardTech />
    </section>
  );
}
