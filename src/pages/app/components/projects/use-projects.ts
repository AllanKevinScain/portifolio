type ProjectsType = {
  id: string;
  titulo: string;
  descricao: string;
  repo?: string;
  demo?: string;
};

export function useProjects() {
  console.log(import.meta.env.VITE_BASE_API_URL);
}

export const projects: ProjectsType[] = [];
