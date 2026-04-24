import { z } from "zod";
import { BaseSchema } from "./base.schema";

export const WorkSchema = BaseSchema.extend({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  image: z.url("Image URL is invalid").optional().or(z.literal("")),
});

export type Work = z.infer<typeof WorkSchema>;
export type CreateWorkInput = Omit<Work, "id" | "createdAt" | "updatedAt">;
