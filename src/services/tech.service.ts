import type { CreateTechInput, Tech } from "@/hooks";
import { api } from "../api/axios";

export const techService = {
  async getAll(): Promise<Tech[]> {
    const { data } = await api.get<Tech[]>("/tech");
    return data;
  },

  async getById(id: string): Promise<Tech> {
    const { data } = await api.get<Tech>(`/tech/${id}`);
    return data;
  },

  async create(tech: CreateTechInput): Promise<Tech> {
    const { data } = await api.post<Tech>("/tech", tech);
    return data;
  },

  async update(id: string, tech: Partial<CreateTechInput>): Promise<Tech> {
    const { data } = await api.put<Tech>(`/tech/${id}`, tech);
    return data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/tech/${id}`);
  },
};
