import { z } from "zod";
import { BaseSchema } from "./base.schema";

export const TechSchema = BaseSchema.extend({
  name: z.string().min(1, "Nam is required"),
  description: z.string().min(1, "Description is required"),
  nivel: z.enum(["junior", "mid", "senior", "stack"]).nonoptional("Nivel is required"),
});

export type Tech = z.infer<typeof TechSchema>;
export type CreateTechInput = Omit<Tech, "id" | "createdAt" | "updatedAt">;
