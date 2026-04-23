import { api } from "@/api/axios";
import type { CreateProjectInput, Project } from "@/schemas";
import type { MessageExtensionType } from "@/types";

type ProjectResponse = {
  success: boolean;
  data: Project & MessageExtensionType;
};

export const projectService = {
  async getAll(): Promise<Project[]> {
    const { data } = await api.get<Project[]>("/project");
    return data;
  },

  async getById(id: string | null): Promise<Project> {
    const { data } = await api.get<ProjectResponse>(`/project/${id}`);
    return data.data;
  },

  async create(project: CreateProjectInput): Promise<ProjectResponse> {
    const { data } = await api.post<ProjectResponse>("/project", project);
    return data;
  },

  async update(id: string, project: Partial<CreateProjectInput>): Promise<ProjectResponse> {
    const { data } = await api.patch<ProjectResponse>(`/project/${id}`, project);
    return data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/project/${id}`);
  },
};
