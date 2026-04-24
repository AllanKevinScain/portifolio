import { queryKeys } from "@/hooks";
import type { CreateProjectInput } from "@/schemas";
import { projectService } from "@/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useProject() {
  const queryClient = useQueryClient();

  // TODO allan - precisa fazer tratamento de erro - query nao identifica 400 como erro - e não é mas deve tratar como um
  const createProjectMutation = useMutation({
    mutationFn: (newProject: CreateProjectInput) => projectService.create(newProject),
    onSuccess: (e) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.projects });
      toast.success(e.data.message || "");
    },
  });

  const updateProjectMutation = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Partial<CreateProjectInput> }) => projectService.update(id, data),
    onSuccess: (e, { id }) => {
      queryClient.invalidateQueries({ queryKey: queryKeys.projects });
      queryClient.invalidateQueries({ queryKey: queryKeys.project(id) });
      toast.success(e.data.message || "");
    },
  });

  // TODO allan - precisa retornar o id
  const deleteProjectMutation = useMutation({
    mutationFn: (id: string) => projectService.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: queryKeys.projects });
      toast.success("Project removed successfully!");
    },
  });

  return {
    createProjectMutation,
    updateProjectMutation,
    deleteProjectMutation,
  };
}
