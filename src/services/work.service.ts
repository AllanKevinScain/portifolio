import { api } from "@/api/axios";
import type { CreateWorkInput, Work } from "@/schemas";
import type { MessageExtensionType } from "@/types";

type WorkResponse = {
  success: boolean;
  data: Work & MessageExtensionType;
};

export const workService = {
  async getAll(): Promise<Work[]> {
    const { data } = await api.get<Work[]>("/work");
    return data;
  },

  async getById(id: string): Promise<Work> {
    const { data } = await api.get<WorkResponse>(`/work/${id}`);
    return data.data;
  },

  async create(work: CreateWorkInput): Promise<WorkResponse> {
    const { data } = await api.post<WorkResponse>("/work", work);
    return data;
  },

  async update(id: string, work: Partial<CreateWorkInput>): Promise<WorkResponse> {
    const { data } = await api.patch<WorkResponse>(`/work/${id}`, work);
    return data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/work/${id}`);
  },
};
