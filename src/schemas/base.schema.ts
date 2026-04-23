import { z } from "zod";

export const BaseSchema = z.object({
  id: z.uuid().optional(),
  createdAt: z.iso.datetime().optional(),
  updatedAt: z.iso.datetime().optional(),
});
