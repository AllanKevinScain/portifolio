import { supabase } from "@/lib/supabase";

type SupabaseRow = Record<string, unknown> & {
  created_at?: string;
  updated_at?: string;
};

export async function listFromSupabase<T>(table: string): Promise<T[]> {
  const { data, error } = await supabase.from(table).select("*").order("created_at", { ascending: false });

  if (error) throw error;

  return ((data ?? []) as SupabaseRow[]).map(
    ({ created_at, updated_at, ...row }) => ({ ...row, createdAt: created_at, updatedAt: updated_at }) as T,
  );
}
