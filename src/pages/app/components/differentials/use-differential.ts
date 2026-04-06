type DifferentialType = {
  titulo: string;
  desc: string;
  icon: string;
};

export function useDifferential() {
  console.log(import.meta.env.VITE_BASE_API_URL);
}

export const differential: DifferentialType[] = [];
