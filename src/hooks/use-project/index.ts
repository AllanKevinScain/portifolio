import { queryKeys } from "@/hooks";
import { projectService } from "@/services";
import { BaseSchema } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

export const ProjectSchema = BaseSchema.extend({
  title: z.string().min(1, "Título é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
  repository: z.url("URL do repositório inválida").optional().or(z.literal("")),
  demo: z.url("URL de demonstração inválida").optional().or(z.literal("")),
});

export type Project = z.infer<typeof ProjectSchema>;
export type CreateProjectInput = Omit<
  Project,
  "id" | "createdAt" | "updatedAt"
>;

/* export function useProjectsQuery() {
  return useQuery({
    queryKey: queryKeys.projects,
    queryFn: projectService.getAll,
  });
}

export function useProjectByIdQuery(id: string) {
  return useQuery({
    queryKey: queryKeys.project(id),
    queryFn: () => projectService.getById(id),
    enabled: !!id,
  });
} */

export function useProject() {
  const queryClient = useQueryClient();

  const createProjectMutation = useMutation({
    mutationFn: (newProject: CreateProjectInput) =>
      projectService.create(newProject),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.projects });
    },
  });

  const updateProjectMutation = useMutation({
    mutationFn: ({
      id,
      data,
    }: {
      id: string;
      data: Partial<CreateProjectInput>;
    }) => projectService.update(id, data),
    onSuccess: (_, { id }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.projects });
      queryClient.invalidateQueries({ queryKey: queryKeys.project(id) });
    },
  });

  const deleteProjectMutation = useMutation({
    mutationFn: (id: string) => projectService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.projects });
    },
  });

  return {
    createProjectMutation,
    updateProjectMutation,
    deleteProjectMutation,
  };
}
