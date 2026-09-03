import type { Tech } from "@/schemas";
import { listFromSupabase } from "./supabase-list";

export const techService = {
  getAll: () => listFromSupabase<Tech>("tech"),
  getActive: () => listFromSupabase<Tech>("tech", { onlyActive: true }),
};
