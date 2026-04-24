import { z } from "zod";
import { BaseSchema } from "./base.schema";

export const ProjectSchema = BaseSchema.extend({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  repository: z.url("Invalid repository URL"),
  demo: z.url("Invalid demo URL"),
});

export type Project = z.infer<typeof ProjectSchema>;
export type CreateProjectInput = Omit<Project, "id" | "createdAt" | "updatedAt">;
