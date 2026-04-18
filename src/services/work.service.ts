import type { CreateWorkInput, Work } from "@/hooks";
import { api } from "../api/axios";

export const workService = {
  async getAll(): Promise<Work[]> {
    const { data } = await api.get<Work[]>("/work");
    return data;
  },

  async getById(id: string): Promise<Work> {
    const { data } = await api.get<Work>(`/work/${id}`);
    return data;
  },

  async create(work: CreateWorkInput): Promise<Work> {
    const { data } = await api.post<Work>("/work", work);
    return data;
  },

  async update(id: string, work: Partial<CreateWorkInput>): Promise<Work> {
    const { data } = await api.put<Work>(`/work/${id}`, work);
    return data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/work/${id}`);
  },
};
