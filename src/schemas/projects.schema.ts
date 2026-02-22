import * as yup from "yup";

const projectSchema = yup.object({
  title: yup.string(),
  description: yup.string(),
  link: yup.string().url(),
  repository: yup.string().url(),
});

export const projectsSchema = yup.object({
  title: yup.string(),
  description: yup.string(),
  projects: yup.array().of(projectSchema),
});

export type ProjectsSchemaType = yup.InferType<typeof projectsSchema>;
