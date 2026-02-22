import * as yup from "yup";

const differentialSchema = yup.object({
  title: yup.string(),
  description: yup.string(),
});

export const differentialsSchema = yup.object({
  title: yup.string(),
  description: yup.string(),
  principal_tecnologies: yup.string(),
  differentials: yup.array().of(differentialSchema),
});

export type DifferentialsSchemaType = yup.InferType<typeof differentialsSchema>;
