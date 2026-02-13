type SkilType = {
  titulo: string;
  desc: string;
  icon: string;
};

export const skills: SkilType[] = [
  {
    titulo: "Performance e Acessibilidade",
    desc: "Páginas leves, rápidas e inclusivas (Lighthouse e boas práticas WCAG).",
    icon: "⚡",
  },
  {
    titulo: "Código Escalável",
    desc: "Arquitetura limpa, componentes reutilizáveis e padronização.",
    icon: "🧩",
  },
  {
    titulo: "Foco no Negócio",
    desc: "Entendimento de métricas, funil e impacto real no resultado.",
    icon: "🎯",
  },
  {
    titulo: "Entrega Ágil",
    desc: "Feedback rápido, iterações curtas e comunicação transparente.",
    icon: "🚀",
  },
];
