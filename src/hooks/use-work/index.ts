import { queryKeys } from "@/hooks";
import type { CreateWorkInput } from "@/schemas";
import { workService } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useCreateWorkMutation() {
  const queryClient = useQueryClient();

  const createWorkMutation = useMutation({
    mutationFn: (newWork: CreateWorkInput) => workService.create(newWork),
    onSuccess: (e) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.works });
      toast.success(e.data.message || "");
    },
  });

  const updateWorkMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<CreateWorkInput> }) => workService.update(id, data),
    onSuccess: (e, { id }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.works });
      queryClient.invalidateQueries({ queryKey: queryKeys.work(id) });
      toast.success(e.data.message || "");
    },
  });

  const deleteWorkMutation = useMutation({
    mutationFn: (id: string) => workService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.works });
      toast.success("Work or event removed successfully!");
    },
  });

  return {
    createWorkMutation,
    updateWorkMutation,
    deleteWorkMutation,
  };
}
