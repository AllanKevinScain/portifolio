import { queryKeys } from "@/hooks";
import type { CreateDifferentialInput } from "@/schemas";
import { differentialService } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useDifferential() {
  const queryClient = useQueryClient();

  const createDifferentialMutation = useMutation({
    mutationFn: (newDifferential: CreateDifferentialInput) => differentialService.create(newDifferential),
    onSuccess: (e) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.differentials });
      toast.success(e.data.message || "");
    },
  });

  const updateDifferentialMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<CreateDifferentialInput> }) =>
      differentialService.update(id, data),
    onSuccess: (e, { id }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.differentials });
      queryClient.invalidateQueries({ queryKey: queryKeys.differential(id) });
      toast.success(e.data.message || "");
    },
  });

  const deleteDifferentialMutation = useMutation({
    mutationFn: (id: string) => differentialService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.differentials });
      toast.success("Differential removed successfully!");
    },
  });

  return {
    createDifferentialMutation,
    updateDifferentialMutation,
    deleteDifferentialMutation,
  };
}
