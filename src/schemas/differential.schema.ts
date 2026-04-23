import { z } from "zod";
import { BaseSchema } from "./base.schema";

export const DifferentialSchema = BaseSchema.extend({
  title: z.string().min(1, "Título é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
});

export type Differential = z.infer<typeof DifferentialSchema>;
export type CreateDifferentialInput = Omit<Differential, "id" | "createdAt" | "updatedAt">;
