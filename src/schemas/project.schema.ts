import { z } from "zod";
import { BaseSchema } from "./base.schema";

export const ProjectSchema = BaseSchema.extend({
  title: z.string().min(1, "Título é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
  repository: z.url("URL do repositório inválida").optional().or(z.literal("")),
  demo: z.url("URL de demonstração inválida").optional().or(z.literal("")),
});

export type Project = z.infer<typeof ProjectSchema>;
export type CreateProjectInput = Omit<
  Project,
  "id" | "createdAt" | "updatedAt"
>;
