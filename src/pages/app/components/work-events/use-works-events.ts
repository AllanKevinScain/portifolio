type WorkEventsType = {
  titulo: string;
  desc: string;
};

export function useWorkEvents() {
  console.log(import.meta.env.VITE_BASE_API_URL);
}

export const worksAndEvents: WorkEventsType[] = [];
