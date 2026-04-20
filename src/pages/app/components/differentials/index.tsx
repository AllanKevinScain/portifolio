import { EmptyState, Skeleton, Text } from "@/components";
import { queryKeys } from "@/hooks";
import { differentialService } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { DifferentialCard } from "./item";

export function Diferentials() {
  const {
    data: differentials = [],
    isPending,
    isLoading,
  } = useQuery({
    queryKey: queryKeys.differentials,
    queryFn: differentialService.getAll,
  });

  if (isPending || isLoading) {
    return <Skeleton />;
  }

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
          <Text
            variant="h2"
            className={twMerge("text-3xl sm:text-4xl font-extrabold")}
          >
            Diferentials
          </Text>

          <Text className="mt-3">
            Practices and mindset that guide my technical and product decisions.
          </Text>
        </header>

        <ul className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {differentials.length !== 0 &&
            differentials.map((i) => <DifferentialCard key={i.id} {...i} />)}

          {differentials.length === 0 && (
            <EmptyState description="Nenhum diferencial cadastrado!" />
          )}
        </ul>
      </motion.div>
    </section>
  );
}
