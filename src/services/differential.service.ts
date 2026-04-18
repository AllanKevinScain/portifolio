import type { CreateDifferentialInput, Differential } from "@/hooks";
import { api } from "../api/axios";

export const differentialService = {
  async getAll(): Promise<Differential[]> {
    const { data } = await api.get<Differential[]>("/differential");
    return data;
  },

  async getById(id: string): Promise<Differential> {
    const { data } = await api.get<Differential>(`/differential/${id}`);
    return data;
  },

  async create(differential: CreateDifferentialInput): Promise<Differential> {
    const { data } = await api.post<Differential>(
      "/differential",
      differential,
    );
    return data;
  },

  async update(
    id: string,
    differential: Partial<CreateDifferentialInput>,
  ): Promise<Differential> {
    const { data } = await api.put<Differential>(
      `/differential/${id}`,
      differential,
    );
    return data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`/differential/${id}`);
  },
};
