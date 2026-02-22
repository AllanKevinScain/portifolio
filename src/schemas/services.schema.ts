import * as yup from "yup";

const serviceSchema = yup.object({
  title: yup.string(),
  description: yup.string(),
  starting_price: yup.string(),
});

export const servicesSchema = yup.object({
  title: yup.string(),
  description: yup.string(),
  services: yup.array().of(serviceSchema),
});

export type ServicesSchemaType = yup.InferType<typeof servicesSchema>;
