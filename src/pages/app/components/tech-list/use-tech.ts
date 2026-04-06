type Tech = {
  name: string;
  description: string;
};

export function useTech() {
  console.log(import.meta.env.VITE_BASE_API_URL);
}

export const techs: Tech[] = [];
