import { skills } from "@/data/skills";
import { motion } from "framer-motion";
import { SkillCard } from "./skill-card";
import { twMerge } from "tailwind-merge";

export function Diferenciais() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className={twMerge(
            "absolute right-0 top-1/3 w-150 h-150 blur-[160px] rounded-full",
            "bg-[color-mix(in_srgb,var(--color-primary)_15%,transparent)]",
          )}
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <header className="mb-14">
          <h2
            className={twMerge(
              "text-3xl sm:text-4xl font-extrabold",
              "text-(--color-text)",
            )}
          >
            Diferenciais
          </h2>

          <p
            className={twMerge(
              "mt-3 max-w-xl",
              "text-[color-mix(in_srgb,var(--color-text)_70%,transparent)]",
            )}
          >
            Práticas e mentalidade que guiam minhas decisões técnicas e de
            produto.
          </p>
        </header>

        <ul className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {skills.map((i) => (
            <SkillCard key={i.desc} {...i} />
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
