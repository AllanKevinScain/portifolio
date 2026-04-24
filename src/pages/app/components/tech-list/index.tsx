import { EmptyState, Skeleton, Text } from "@/components";
import { queryKeys } from "@/hooks";
import { techService } from "@/services";
import { useQuery } from "@tanstack/react-query";
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
        <div className="absolute top-0 left-1/2 h-100 w-200 -translate-x-1/2 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_15%,transparent)] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <header className="mb-14">
          <Text variant="h2">About Me {"(Tech Stack)"}</Text>

          <Text className="mt-3 max-w-xl">
            Tools and tecnologies that i use to build modern, performant and scalable applications.
          </Text>
        </header>

        <ul className="flex w-full flex-col">
          {techs.length !== 0 && techs.map((tech, index) => <TechListItem key={tech.id} index={index} {...tech} />)}

          {techs.length === 0 && <EmptyState description="Nothing here yet!" />}
        </ul>
      </div>
    </>
  );
}
