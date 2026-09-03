import { z } from "zod";
import { BaseSchema } from "./base.schema";

export const TechSchema = BaseSchema.extend({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  nivel: z.enum(["junior", "mid", "senior", "stack"]),
});

export type Tech = z.infer<typeof TechSchema>;
export type CreateTechInput = Omit<Tech, "id" | "createdAt" | "updatedAt">;
