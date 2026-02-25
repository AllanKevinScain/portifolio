import { motion } from "framer-motion";
import { products } from "@/data/products";
import { twMerge } from "tailwind-merge";
import { Card } from "../../../../components/card";

export function Servicos() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className={twMerge(
            "absolute left-0 bottom-0 w-175 h-175 blur-[160px] rounded-full",
            "bg-[color-mix(in_srgb,var(--color-primary)_15%,transparent)]",
          )}
        />
      </div>

      <motion.div
        className={twMerge("max-w-7xl mx-auto px-6", "flex flex-col gap-24")}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <header className="">
          <h2 className="text-3xl text-(--color-text) sm:text-4xl font-extrabold">
            Serviços
          </h2>

          <p
            className={twMerge(
              "mt-3 max-w-xl",
              "text-[color-mix(in_srgb,var(--color-text)_70%,transparent)]",
            )}
          >
            Soluções focadas em resultado, performance e escalabilidade — do
            site institucional ao front-end de aplicações complexas.
          </p>
        </header>

        <ul className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {products.map((s) => (
            <Card.product key={s.desc} {...s} />
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
