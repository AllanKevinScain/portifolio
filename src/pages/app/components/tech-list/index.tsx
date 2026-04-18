import { EmptyState, Skeleton } from "@/components";
import { queryKeys } from "@/hooks";
import { techService } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { twMerge } from "tailwind-merge";
import { TechListItem } from "./item";

export function TechList() {
  const {
    data: techs = [],
    isPending,
    isLoading,
  } = useQuery({
    queryKey: queryKeys.techs,
    queryFn: techService.getAll,
  });

  if (isPending || isLoading) {
    return <Skeleton />;
  }

  return (
    <>
      <div className="absolute inset-0 -z-10">
        <div
          className={twMerge(
            "absolute left-1/2 -translate-x-1/2 top-0",
            "w-200 h-100",
            "bg-[color-mix(in_srgb,var(--color-primary)_15%,transparent)]",
            "blur-[140px]",
            "rounded-full",
          )}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-(--color-text)">
            About Me {"(Tech Stack)"}
          </h2>

          <p className="mt-3 text-[color-mix(in_srgb,var(--color-text)_70%,transparent)] max-w-xl">
            Tools and tecnologies that i use to build modern, performant and
            scalable applications.
          </p>
        </header>

        <ul className="flex w-full flex-col">
          {techs.length !== 0 &&
            techs.map((tech, index) => (
              <TechListItem key={tech.id} index={index} {...tech} />
            ))}

          {techs.length === 0 && (
            <EmptyState description="Nenhuma habilidade cadastrada!" />
          )}
        </ul>
      </div>
    </>
  );
}
