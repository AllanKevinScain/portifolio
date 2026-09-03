<p align="center">
  <img src="./public/reacao-4.webp" width="260" height="250" alt="Logo do Portfólio" />
</p>

<h1 align="center">Portfólio</h1>

<p align="center">
  Portfólio pessoal de Allan Kevin Scain para apresentar projetos, tecnologias e diferenciais como Front-end Engineer.
</p>

<p align="center">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=111111" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white" />
  <img alt="Supabase" src="https://img.shields.io/badge/Supabase-2-3ECF8E?logo=supabase&logoColor=white" />
  <img alt="Vercel" src="https://img.shields.io/badge/Vercel-Deploy-000000?logo=vercel&logoColor=white" />
</p>

## Sobre o projeto

Este projeto é o portfólio pessoal de Allan Kevin Scain. Ele reúne projetos, tecnologias ativas e diferenciais profissionais em uma experiência responsiva, com foco em interfaces performáticas, acessíveis e claras.

Os conteúdos exibidos na página inicial são buscados no Supabase. A aplicação apresenta até dez projetos visíveis e mantém a listagem de tecnologias restrita às que estão ativas, permitindo que as informações sejam atualizadas sem alterações no código da interface.

O visual utiliza temas claro e escuro, animações com Framer Motion e componentes da biblioteca Safira UI. A página também oferece canais diretos de contato, informações de privacidade e uma seção dedicada à trajetória profissional.

## Funcionalidades

- Apresentar projetos, tecnologias e diferenciais profissionais.
- Listar até dez projetos marcados como visíveis.
- Exibir somente tecnologias ativas na página inicial.
- Alternar entre os temas claro e escuro.
- Direcionar contatos para WhatsApp, e-mail, LinkedIn e GitHub.
- Exibir a página Sobre mim com competências e canais de contato.
- Carregar as páginas por rota de forma assíncrona.
- Exibir estados de carregamento e ausência de dados.

## Fluxo principal

1. A pessoa acessa a página inicial e visualiza a apresentação profissional.
2. A aplicação busca projetos, tecnologias e diferenciais no Supabase.
3. Os projetos visíveis e as tecnologias ativas são apresentados nas seções correspondentes.
4. A pessoa pode alternar o tema, abrir a página Sobre mim ou entrar em contato pelos links disponíveis.
5. As rotas de privacidade e página não encontrada são exibidas quando apropriado.

## Tecnologias utilizadas

| Tecnologia | Utilização no projeto |
| --- | --- |
| **React** | Construção da interface e dos componentes da aplicação. |
| **TypeScript** | Tipagem dos componentes, serviços, esquemas e dados. |
| **Vite** | Servidor de desenvolvimento e geração do build de produção. |
| **Tailwind CSS** | Estilização utilitária e responsiva da interface. |
| **Safira UI** | Componentes reutilizáveis, como imagem, card, botão, popover e accordion. |
| **Supabase** | Leitura dos dados de projetos, tecnologias e diferenciais. |
| **TanStack Query** | Busca, cache e estados assíncronos dos dados remotos. |
| **Framer Motion** | Animações de entrada e interações visuais. |
| **React Router** | Organização das rotas da aplicação. |
| **Zod** | Validação e definição dos esquemas de dados. |
| **Vercel** | Hospedagem da aplicação e suporte às rotas do cliente. |

## Estrutura do projeto

```text
portifolio/
├── public/                 # Imagens e outros arquivos estáticos
├── src/
│   ├── components/         # Componentes reutilizáveis da interface
│   ├── data/               # Dados estáticos, navegação e contatos
│   ├── hooks/              # Hooks e chaves de consulta
│   ├── layouts/            # Estruturas compartilhadas de página
│   ├── lib/                # Configuração de clientes externos
│   ├── pages/              # Páginas e seções do portfólio
│   ├── providers/          # Providers de tema e consultas
│   ├── router/             # Definição das rotas da aplicação
│   ├── schemas/            # Esquemas e tipos de domínio
│   └── services/           # Serviços de acesso ao Supabase
├── .env.example            # Referência das variáveis de ambiente
├── vercel.json             # Reescrita de rotas para o cliente
└── package.json            # Dependências e scripts do projeto
```

- `/`: página inicial com apresentação, projetos, tecnologias e diferenciais;
- `/about-me`: página com competências e apresentação profissional;
- `/privacy`: informações de privacidade e contato.

## Banco de dados e segurança

O Supabase fornece os dados das entidades `project`, `tech` e `differential`. A aplicação consome somente a URL pública do projeto e a chave anônima pelo ambiente do Vite; essas informações não substituem controles de acesso no banco.

As políticas de acesso devem ser configuradas no Supabase conforme o nível de exposição desejado para cada tabela. Este repositório não versiona migrations nem políticas de segurança, portanto elas precisam ser mantidas no projeto Supabase correspondente.

## Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto com base em `.env.example`:

```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sua-chave-publicavel
VITE_SUPABASE_ANON_KEY=sua-chave-anonima
```

| Variável | Descrição |
| --- | --- |
| `VITE_SUPABASE_URL` | URL do projeto no Supabase. |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Chave publicável do Supabase, quando usada pelo ambiente. |
| `VITE_SUPABASE_ANON_KEY` | Chave anônima usada pelo cliente Supabase. |

`VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY` são necessárias para carregar os dados remotos. Sem elas, o cliente utiliza valores inválidos e as consultas ao Supabase falham.

> Não envie o arquivo `.env` ao repositório e nunca coloque chaves privadas ou secretas no frontend.

## Executando localmente

### Pré-requisitos

- Node.js 20 ou superior;
- npm;
- projeto Supabase com as tabelas e dados esperados, caso queira exibir conteúdo remoto.

### Instalação

```bash
git clone https://github.com/AllanKevinScain/portifolio.git
cd portifolio
npm install
```

Copie `.env.example` para `.env`, preencha as variáveis e inicie o ambiente:

```bash
npm run dev
```

Por padrão, a aplicação fica disponível em `http://localhost:4646`.

## Scripts disponíveis

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento na porta 4646. |
| `npm run build` | Valida o TypeScript e cria o build de produção. |
| `npm run lint` | Analisa o código com ESLint e aplica correções automáticas quando disponíveis. |
| `npm run preview` | Inicia uma prévia local do build de produção. |
| `npm run no-use` | Identifica arquivos e dependências não utilizados com Knip. |
| `npm run format` | Formata arquivos TypeScript com Prettier. |

## Testes

O projeto ainda não possui uma suíte de testes automatizada. As verificações disponíveis são a análise estática e a geração do build:

```bash
npm run lint
npm run build
```

## Convenções do código

- Use TypeScript em componentes, serviços, esquemas e tipos da aplicação.
- Organize cada responsabilidade em sua pasta correspondente dentro de `src`.
- Centralize o acesso aos dados remotos em `src/services`.
- Valide os formatos de dados em `src/schemas` com Zod.
- Use aliases iniciados por `@/` para importações a partir de `src`.
- Preserve os temas e tokens visuais definidos para a interface.

## Deploy na Vercel

O projeto inclui `vercel.json` para redirecionar rotas do cliente para `index.html`, permitindo acesso direto às páginas da aplicação. Na Vercel, configure o projeto como Vite, use `npm install` como comando de instalação e `npm run build` como comando de build.

Cadastre as variáveis `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY` e `VITE_SUPABASE_ANON_KEY` nos ambientes necessários da Vercel antes de publicar.

## Licença

Este repositório ainda não declara uma licença de distribuição. Caso o projeto passe a ser compartilhado ou distribuído publicamente, adicione um arquivo de licença compatível com o uso pretendido.
