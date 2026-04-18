import { queryKeys } from "@/hooks";
import type { CreateProjectInput } from "@/schemas";
import { projectService } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";

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
