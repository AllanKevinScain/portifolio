import { EmptyState, Skeleton, Text } from '@/components';
import { queryKeys } from '@/hooks';
import { workService } from '@/services';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { WorkCard } from './item';

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
        <div className="absolute bottom-0 left-0 h-175 w-175 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_15%,transparent)] blur-[160px]" />
      </div>

      <motion.div
        className="mx-auto flex max-w-7xl flex-col gap-24 px-6"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}>
        <header className="">
          <Text variant="h2">Worked and Events</Text>

          <Text className="mt-3 max-w-xl">
            Involvement in academic and career development projects.
            Participation in events and collaborative initiatives.
          </Text>
        </header>

        <ul className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
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
