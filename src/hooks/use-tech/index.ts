import { queryKeys } from "@/hooks";
import type { CreateTechInput } from "@/schemas";
import { techService } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useTech() {
  const queryClient = useQueryClient();

  const createTechMutation = useMutation({
    mutationFn: (newTech: CreateTechInput) => techService.create(newTech),
    onSuccess: (e) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.techs });
      toast.success(e.data.message || "");
    },
  });

  const updateTechMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<CreateTechInput> }) => techService.update(id, data),
    onSuccess: (e, { id }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.techs });
      queryClient.invalidateQueries({ queryKey: queryKeys.tech(id) });
      toast.success(e.data.message || "");
    },
  });

  const deleteTechMutation = useMutation({
    mutationFn: (id: string) => techService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.techs });
      toast.success("Technology removed successfully!");
    },
  });

  return {
    createTechMutation,
    updateTechMutation,
    deleteTechMutation,
  };
}
