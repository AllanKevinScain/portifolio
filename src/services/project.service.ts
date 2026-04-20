import type { CreateProjectInput, Project } from "@/schemas";
import { api } from "../api/axios";

export const projectService = {
  async getAll(): Promise<Project[]> {
    const { data } = await api.get<Project[]>("/project");
    return data;
  },

  async getById(id: string): Promise<Project> {
    const { data } = await api.get<Project>(`/project/${id}`);
    return data;
  },

  async create(project: CreateProjectInput): Promise<Project> {
    const { data } = await api.post<Project>("/project", project);
    return data;
  },

  async update(
    id: string,
    project: Partial<CreateProjectInput>,
  ): Promise<Project> {
    const { data } = await api.put<Project>(`/project/${id}`, project);
    return data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/project/${id}`);
  },
};
