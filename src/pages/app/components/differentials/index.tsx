import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { Card, EmptyState } from "@/components";
import { differential, useDifferential } from "./use-differential";

export function Diferentials() {
  useDifferential();

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
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.12 },
          },
        }}
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
            Diferentials
          </h2>

          <p
            className={twMerge(
              "mt-3 max-w-xl",
              "text-[color-mix(in_srgb,var(--color-text)_70%,transparent)]",
            )}
          >
            Practices and mindset that guide my technical and product decisions.
          </p>
        </header>

        <ul className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {differential.length !== 0 &&
            differential.map((i) => <Card.icon key={i.desc} {...i} />)}

          {differential.length === 0 && (
            <EmptyState description="Nenhum diferencial cadastrado!" />
          )}
        </ul>
      </motion.div>
    </section>
  );
}
