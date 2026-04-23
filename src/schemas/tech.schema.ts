import { z } from "zod";
import { BaseSchema } from "./base.schema";

export const TechSchema = BaseSchema.extend({
  name: z.string().min(1, "Nome é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
  nivel: z.enum(["junior", "mid", "senior", "stack"]).nonoptional("Nível é obrigatório"),
});

export type Tech = z.infer<typeof TechSchema>;
export type CreateTechInput = Omit<Tech, "id" | "createdAt" | "updatedAt">;
