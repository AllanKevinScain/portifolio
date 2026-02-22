import * as yup from "yup";

export const headerSchema = yup.object({
  name: yup.string(),
  role: yup.string(),
  status: yup.string(),
  headline: yup.string(),
  title: yup.string(),
});

export type HeaderSchemaType = yup.InferType<typeof headerSchema>;
