import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { Card, EmptyState } from "@/components";
import { useWorkEvents, worksAndEvents } from "./use-works-events";

export function WorkAndEvents() {
  useWorkEvents();
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
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <header className="">
          <h2 className="text-3xl text-(--color-text) sm:text-4xl font-extrabold">
            Worked and Events
          </h2>

          <p
            className={twMerge(
              "mt-3 max-w-xl",
              "text-[color-mix(in_srgb,var(--color-text)_70%,transparent)]",
            )}
          >
            Involvement in academic and career development projects.
            Participation in events and collaborative initiatives.
          </p>
        </header>

        <ul className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {worksAndEvents.length !== 0 &&
            worksAndEvents.map((s) => <Card.product key={s.desc} {...s} />)}

          {worksAndEvents.length === 0 && (
            <EmptyState description="Nenhum evento ou trabalho cadastrado!" />
          )}
        </ul>
      </motion.div>
    </section>
  );
}
