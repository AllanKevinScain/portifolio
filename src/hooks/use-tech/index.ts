import { queryKeys } from "@/hooks";
import type { CreateTechInput } from "@/schemas";
import { techService } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useTech() {
  const queryClient = useQueryClient();

  const createTechMutation = useMutation({
    mutationFn: (newTech: CreateTechInput) => techService.create(newTech),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.techs });
    },
  });

  const updateTechMutation = useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Partial<CreateTechInput>;
    }) => techService.update(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.techs });
      queryClient.invalidateQueries({ queryKey: queryKeys.tech(id) });
    },
  });

  const deleteTechMutation = useMutation({
    mutationFn: (id: string) => techService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.techs });
    },
  });

  return {
    createTechMutation,
    updateTechMutation,
    deleteTechMutation,
  };
}
