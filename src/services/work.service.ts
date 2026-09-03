import type { Work } from "@/schemas";
import { listFromSupabase } from "./supabase-list";

export const workService = {
  getAll: () => listFromSupabase<Work>("work"),
};
