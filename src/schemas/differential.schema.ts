import { z } from "zod";
import { BaseSchema } from "./base.schema";

export const DifferentialSchema = BaseSchema.extend({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
});

export type Differential = z.infer<typeof DifferentialSchema>;
export type CreateDifferentialInput = Omit<Differential, "id" | "createdAt" | "updatedAt">;
