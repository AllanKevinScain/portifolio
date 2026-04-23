import { api } from "@/api/axios";
import type { CreateDifferentialInput, Differential } from "@/schemas";
import type { MessageExtensionType } from "@/types";

type DifferentialResponse = {
  success: boolean;
  data: Differential & MessageExtensionType;
};

export const differentialService = {
  async getAll(): Promise<Differential[]> {
    const { data } = await api.get<Differential[]>("/differential");
    return data;
  },

  async getById(id: string): Promise<Differential> {
    const { data } = await api.get<DifferentialResponse>(`/differential/${id}`);
    return data.data;
  },

  async create(differential: CreateDifferentialInput): Promise<DifferentialResponse> {
    const { data } = await api.post<DifferentialResponse>("/differential", differential);
    return data;
  },

  async update(id: string, differential: Partial<CreateDifferentialInput>): Promise<DifferentialResponse> {
    const { data } = await api.patch<DifferentialResponse>(`/differential/${id}`, differential);
    return data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/differential/${id}`);
  },
};
