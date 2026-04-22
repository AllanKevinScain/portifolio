export const queryKeys = {
  projects: ["projects"] as const,
  project: (id: string) => ["projects", id] as const,
  techs: ["techs"] as const,
  tech: (id: string) => ["techs", id] as const,
  differentials: ["differentials"] as const,
  differential: (id: string) => ["differentials", id] as const,
  works: ["works"] as const,
  work: (id: string) => ["works", id] as const,
};
