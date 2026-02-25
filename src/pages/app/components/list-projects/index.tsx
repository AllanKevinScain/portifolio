import { projetos } from "../../../../data/projetos";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { Card } from "../../../../components/card";

export function ListOfProjects() {
  return (
    <section>
      <motion.div
        className="max-w-7xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        <header className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-(--color-text)">
            These are my projects
          </h2>

          <p
            className={twMerge(
              "mt-3 max-w-xl",
              "text-[color-mix(in_srgb,var(--color-text)_70%,transparent)]",
            )}
          >
            Some works and experiments that demonstrate my experience with
            modern front-end and application architecture.
          </p>
        </header>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetos.map((p) => (
            <Card.project key={p.descricao + p.id} {...p} />
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
