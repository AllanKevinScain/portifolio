import { queryKeys } from "@/hooks";
import { differentialService } from "@/services";
import { BaseSchema } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

// Differential
export const DifferentialSchema = BaseSchema.extend({
  title: z.string().min(1, "Título é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
});

export type Differential = z.infer<typeof DifferentialSchema>;
export type CreateDifferentialInput = Omit<
  Differential,
  "id" | "createdAt" | "updatedAt"
>;

/* export function useDifferentialsQuery() {
  return useQuery({
    queryKey: queryKeys.differentials,
    queryFn: differentialService.getAll,
  });
}

export function useDifferentialByIdQuery(id: string) {
  return useQuery({
    queryKey: queryKeys.differential(id),
    queryFn: () => differentialService.getById(id),
    enabled: !!id,
  });
} */

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
