import { queryKeys } from "@/hooks";
import { techService } from "@/services";
import { BaseSchema } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

export const TechSchema = BaseSchema.extend({
  name: z.string().min(1, "Nome é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
  nivel: z
    .enum(["junior", "mid", "senior", "stack"])
    .nonoptional("Nível é obrigatório"),
});

export type Tech = z.infer<typeof TechSchema>;
export type CreateTechInput = Omit<Tech, "id" | "createdAt" | "updatedAt">;

/* export function useTechsQuery() {
  return useQuery({
    queryKey: queryKeys.techs,
    queryFn: techService.getAll,
  });
}

export function useTechByIdQuery(id: string) {
  return useQuery({
    queryKey: queryKeys.tech(id),
    queryFn: () => techService.getById(id),
    enabled: !!id,
  });
} */

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
