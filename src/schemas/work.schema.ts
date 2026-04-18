import { z } from "zod";
import { BaseSchema } from "./base.schema";

export const WorkSchema = BaseSchema.extend({
  title: z.string().min(1, "Título é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
  image: z.url("URL da imagem inválida").optional().or(z.literal("")),
});

export type Work = z.infer<typeof WorkSchema>;
export type CreateWorkInput = Omit<Work, "id" | "createdAt" | "updatedAt">;
