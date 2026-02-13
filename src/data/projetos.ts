export type Projeto = {
  id: string
  titulo: string
  descricao: string
  tags: string[]
  repo?: string
  demo?: string
}

export const projetos: Projeto[] = [
  {
    id: '1',
    titulo: 'Dashboard de Vendas',
    descricao:
      'Dashboard responsivo com gráficos e filtros em tempo real, focado em KPIs de e-commerce.',
    tags: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    repo: 'https://github.com/seuusuario/dashboard-vendas',
    demo: 'https://dashboard-vendas.vercel.app',
  },
  {
    id: '2',
    titulo: 'Landing Page SaaS',
    descricao:
      'Página de marketing otimizada para conversão, com testes A/B e métricas de engajamento.',
    tags: ['React', 'A11y', 'SEO', 'Vercel'],
    repo: 'https://github.com/seuusuario/landing-saas',
    demo: 'https://landing-saas.vercel.app',
  },
  {
    id: '3',
    titulo: 'Design System',
    descricao:
      'Biblioteca de componentes reutilizáveis com tokens de design e documentação.',
    tags: ['Storybook', 'Tailwind', 'Design Tokens'],
    repo: 'https://github.com/seuusuario/design-system',
  },
]