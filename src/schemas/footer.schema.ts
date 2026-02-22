import * as yup from "yup";

const socialMediaSchema = yup.object({
  linkedin: yup.string().url(),
  github: yup.string().url(),
  instagram: yup.string().url(),
  google: yup.string().url(),
});

const contactSchema = yup.object({
  email: yup.string().email(),
  phone: yup.string(),
  social_media: socialMediaSchema,
});

export const footerSchema = yup.object({
  cta_title: yup.string(),
  cta_description: yup.string(),
  tech_stack_footer: yup.string(),
  contact: contactSchema,
});

export type FooterSchemaType = yup.InferType<typeof footerSchema>;
