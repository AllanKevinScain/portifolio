# Arquitetura de Consumo de API

Este projeto utiliza uma estrutura de camadas para comunicação com a API, garantindo separação de responsabilidades, tipagem forte e sincronização de estado.

## Stack Técnica
- **HTTP Client:** Axios
- **Server State Management:** @tanstack/react-query
- **Validation/Typing:** Zod + TypeScript
- **Form Handling:** react-hook-form

## Estrutura de Pastas
- `src/api/`: Configuração global do Axios e interceptors.
- `src/types/api.ts`: Schemas Zod e interfaces para as entidades.
- `src/services/`: Funções assíncronas puras (Services).
- `src/hooks/`: Hooks do React Query que encapsulam os Services.

## Segurança e Header x-api-key
O interceptor no arquivo `src/api/axios.ts` gerencia automaticamente o header `x-api-key`:
- **Público:** Requisições `GET` de listagem (ex: `GET /project`).
- **Privado:** Requisições `POST`, `PUT`, `DELETE` e `GET by ID` (ex: `GET /project/123`).

## Entidades Implementadas
1. **Project:** `titulo`, `descricao`, `repo`, `demo`.
2. **Tech:** `name`, `description`.
3. **Differential:** `titulo`, `desc`, `icon`.
4. **Work:** `titulo`, `desc`.

## Convenções de Cache (React Query)
As chaves de cache estão centralizadas em `src/hooks/query-keys.ts`. Sempre que uma mutação (`create`, `update`, `delete`) for realizada com sucesso, o cache da entidade correspondente deve ser invalidado automaticamente pelo hook.

## Variáveis de Ambiente
Certifique-se de definir no `.env`:
- `VITE_API_URL`: URL base da API.
- `VITE_API_KEY`: Chave de acesso para métodos protegidos.
