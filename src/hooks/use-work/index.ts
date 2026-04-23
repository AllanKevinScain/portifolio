import { queryKeys } from "@/hooks";
import type { CreateWorkInput } from "@/schemas";
import { workService } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateWorkMutation() {
  const queryClient = useQueryClient();

  const createWorkMutation = useMutation({
    mutationFn: (newWork: CreateWorkInput) => workService.create(newWork),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.works });
    },
  });

  const updateWorkMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<CreateWorkInput> }) => workService.update(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.works });
      queryClient.invalidateQueries({ queryKey: queryKeys.work(id) });
    },
  });

  const deleteWorkMutation = useMutation({
    mutationFn: (id: string) => workService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.works });
    },
  });

  return {
    createWorkMutation,
    updateWorkMutation,
    deleteWorkMutation,
  };
}
