import { supabase } from "@/lib/supabase";

type SupabaseRow = Record<string, unknown> & {
  created_at?: string;
  updated_at?: string;
};

type ListOptions = {
  onlyActive?: boolean;
  onlyVisible?: boolean;
  limit?: number;
};

export async function listFromSupabase<T>(table: string, options: ListOptions = {}): Promise<T[]> {
  let query = supabase.from(table).select("*").order("created_at", { ascending: false });

  if (options.onlyVisible) {
    query = query.eq("is_visible", true);
  }

  if (options.onlyActive) {
    query = query.eq("status", true);
  }

  if (options.limit) {
    query = query.limit(options.limit);
  }

  const { data, error } = await query;

  if (error) throw error;

  return ((data ?? []) as SupabaseRow[]).map(
    ({ created_at, updated_at, ...row }) => ({ ...row, createdAt: created_at, updatedAt: updated_at }) as T,
  );
}
