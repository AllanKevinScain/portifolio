import { queryKeys } from "@/hooks";
import { workService } from "@/services";
import { BaseSchema } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

export const WorkSchema = BaseSchema.extend({
  title: z.string().min(1, "Título é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
  image: z.url("URL da imagem inválida").optional().or(z.literal("")),
});

export type Work = z.infer<typeof WorkSchema>;
export type CreateWorkInput = Omit<Work, "id" | "createdAt" | "updatedAt">;

/* export function useWorksQuery() {
  return useQuery({
    queryKey: queryKeys.works,
    queryFn: workService.getAll,
  });
}

export function useWorkByIdQuery(id: string) {
  return useQuery({
    queryKey: queryKeys.work(id),
    queryFn: () => workService.getById(id),
    enabled: !!id,
  });
} */

export function useCreateWorkMutation() {
  const queryClient = useQueryClient();

  const createWorkMutation = useMutation({
    mutationFn: (newWork: CreateWorkInput) => workService.create(newWork),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.works });
    },
  });

  const updateWorkMutation = useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Partial<CreateWorkInput>;
    }) => workService.update(id, data),
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
