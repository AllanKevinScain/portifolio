import { api } from "@/api/axios";
import type { CreateTechInput, Tech } from "@/schemas";
import type { MessageExtensionType } from "@/types";

type TechResponse = {
  success: boolean;
  data: Tech & MessageExtensionType;
};

export const techService = {
  async getAll(): Promise<Tech[]> {
    const { data } = await api.get<Tech[]>("/tech");
    return data;
  },

  async getById(id: string): Promise<Tech> {
    const { data } = await api.get<TechResponse>(`/tech/${id}`);
    return data.data;
  },

  async create(tech: CreateTechInput): Promise<TechResponse> {
    const { data } = await api.post<TechResponse>("/tech", tech);
    return data;
  },

  async update(id: string, tech: Partial<CreateTechInput>): Promise<TechResponse> {
    const { data } = await api.patch<TechResponse>(`/tech/${id}`, tech);
    return data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/tech/${id}`);
  },
};
