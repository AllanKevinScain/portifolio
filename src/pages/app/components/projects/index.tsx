import { EmptyState, Skeleton } from "@/components";
import { queryKeys } from "@/hooks";
import { projectService } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
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
