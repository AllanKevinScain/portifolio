import { EmptyState, Skeleton, Text } from "@/components";
import { queryKeys } from "@/hooks";
import { projectService } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ProjectCard } from "./item";

export function ListOfProjects() {
  const {
    data: projects = [],
    isPending,
    isLoading,
  } = useQuery({
    queryKey: queryKeys.projects,
    queryFn: projectService.getAll,
  });

  if (isPending || isLoading) {
    return <Skeleton />;
  }

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
          <Text variant="h2">These are my projects</Text>

          <Text className="mt-3 max-w-xl">
            Some works and experiments that demonstrate my experience with
            modern front-end and application architecture.
          </Text>
        </header>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.length !== 0 &&
            projects.map((p) => <ProjectCard key={p.id} {...p} />)}

          {projects.length === 0 && (
            <EmptyState description="Nenhum projeto particular cadastrado!" />
          )}
        </ul>
      </motion.div>
    </section>
  );
}
