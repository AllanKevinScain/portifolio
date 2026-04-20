import { EmptyState, Skeleton, Text } from "@/components";
import { queryKeys } from "@/hooks";
import { workService } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { WorkCard } from "./item";

export function WorkAndEvents() {
  const {
    data: worksAndEvents = [],
    isPending,
    isLoading,
  } = useQuery({
    queryKey: queryKeys.works,
    queryFn: workService.getAll,
  });

  if (isPending || isLoading) {
    return <Skeleton />;
  }

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
          <Text variant="h2">Worked and Events</Text>

          <Text className="mt-3 max-w-xl">
            Involvement in academic and career development projects.
            Participation in events and collaborative initiatives.
          </Text>
        </header>

        <ul className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {worksAndEvents.length !== 0 &&
            worksAndEvents.map((s) => <WorkCard key={s.id} {...s} />)}

          {worksAndEvents.length === 0 && (
            <EmptyState description="Nenhum evento ou trabalho cadastrado!" />
          )}
        </ul>
      </motion.div>
    </section>
  );
}
