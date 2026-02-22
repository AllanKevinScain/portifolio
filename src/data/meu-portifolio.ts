type ProfileType = {
  name: string;
  role: string;
  status: string;
  headline: string;
};

type ProjectsSectionType = {
  title: string;
  description: string;
  principal_tecnologies: string;
  projects: {
    title: string;
    description: string;
    link: string;
    repository: string;
  }[];
};

export type DifferentialsSectionType = {
  title: string;
  description: string;
  differentials: {
    title: string;
    description: string;
  }[];
};

type ServicesSectionType = {
  title: string;
  description: string;
  services: {
    title: string;
    description: string;
    starting_price: string;
  }[];
};

type FooterType = {
  cta_title: string;
  cta_description: string;
  tech_stack_footer: string;
  contact: {
    email: string;
    phone: string;
    social_media: {
      linkedin?: string;
      github?: string;
      instagram?: string;
      google?: string;
    };
  };
};

export type MeuPortifolioType = {
  profile: ProfileType;
  projects_section: ProjectsSectionType;
  differentials_section: DifferentialsSectionType;
  services_section: ServicesSectionType;
  footer: FooterType;
};

export const meuPortifolio: MeuPortifolioType = {
  profile: {
    name: "Allan Kevin Scain",
    role: "Desenvolvedor Front-end II",
    status: "Disponível para novos projetos",
    headline:
      "Crio interfaces modernas, performáticas e escaláveis com foco em experiência do usuário e arquitetura sólida.",
  },
  differentials_section: {
    title: "Diferenciais",
    description:
      "Práticas e mentalidade que guiam minhas decisões técnicas e de produto.",
    differentials: [
      {
        title: "Performance e Acessibilidade",
        description:
          "Páginas leves, rápidas e inclusivas (Lighthouse e boas práticas WCAG).",
      },
    ],
  },
  projects_section: {
    title: "Projetos em destaque",
    description:
      "Alguns trabalhos e experimentos que demonstram minha experiência com front-end moderno e arquitetura de aplicações.",
    principal_tecnologies: "React, TypeScript, Tailwind, Vite",
    projects: [
      {
        title: "Dashboard de Vendas",
        description:
          "Dashboard responsivo com gráficos e filtros em tempo real, focado em KPIs de e-commerce.",
        link: "https://dashboard-vendas.vercel.app/",
        repository: "https://github.com/allankevin/dashboard-vendas",
      },
    ],
  },
  services_section: {
    title: "Serviços",
    description:
      "Soluções focadas em resultado, performance e escalabilidade — do site institucional ao front-end de aplicações complexas.",
    services: [
      {
        title: "Landing Page / Site Institucional",
        description:
          "Páginas otimizadas para conversão, SEO e alta performance.",
        starting_price: "2000",
      },
    ],
  },
  footer: {
    cta_title: "Vamos conversar?",
    cta_description:
      "Me chame para falarmos sobre seu projeto, produto ou ideia. Posso ajudar a transformar isso em uma experiência sólida.",
    tech_stack_footer: "Construído com React, Vite, TypeScript e Tailwind.",
    contact: {
      email: "test@gmail.com",
      phone: "51995368765",
      social_media: {
        linkedin: "http://asasass.linkeding.com.br",
        github: "http://asasaas.github.com.br",
        instagram: "http://asasas.instagram.br",
        google: "http://asasas.google.br",
      },
    },
  },
};
