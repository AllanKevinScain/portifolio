export type Projeto = {
  id: string;
  titulo: string;
  descricao: string;
  repo?: string;
  demo?: string;
};

export const projetos: Projeto[] = [
  {
    id: "1",
    titulo: "Dashboard de Vendas",
    descricao:
      "Sales Intelligence Dashboard: Architected a real-time data visualization platform for e-commerce KPIs using React and TypeScript, optimizing data fetching for seamless performance.",
    repo: "/",
    demo: "/",
  },
  {
    id: "2",
    titulo: "Design System",
    descricao:
      "Enterprise Design System: Developed a reusable component library with Storybook and Tailwind, streamlining the development workflow and ensuring UI consistency across multiple platforms.",
    repo: "/",
  },
];
