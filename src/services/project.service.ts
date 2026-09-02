import type { Project } from "@/schemas";
import { listFromSupabase } from "./supabase-list";

export const projectService = {
  getAll: () => listFromSupabase<Project>("project", { onlyVisible: true, limit: 10 }),
};
