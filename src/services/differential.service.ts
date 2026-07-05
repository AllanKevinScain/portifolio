import type { Differential } from "@/schemas";
import { listFromSupabase } from "./supabase-list";

export const differentialService = {
  getAll: () => listFromSupabase<Differential>("differential"),
};
