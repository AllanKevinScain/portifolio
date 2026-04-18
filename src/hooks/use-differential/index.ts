import { queryKeys } from "@/hooks";
import type { CreateDifferentialInput } from "@/schemas";
import { differentialService } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCDifferential() {
  const queryClient = useQueryClient();

  const createDifferentialMutation = useMutation({
    mutationFn: (newDifferential: CreateDifferentialInput) =>
      differentialService.create(newDifferential),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.differentials });
    },
  });

  const updateDifferentialMutation = useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Partial<CreateDifferentialInput>;
    }) => differentialService.update(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.differentials });
      queryClient.invalidateQueries({ queryKey: queryKeys.differential(id) });
    },
  });

  const deleteDifferentialMutation = useMutation({
    mutationFn: (id: string) => differentialService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.differentials });
    },
  });

  return {
    createDifferentialMutation,
    updateDifferentialMutation,
    deleteDifferentialMutation,
  };
}
