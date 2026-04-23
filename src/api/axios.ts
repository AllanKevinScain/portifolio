import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:3000";
const apiKey = import.meta.env.VITE_API_KEY;

export const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config) => {
  const isGet = config.method?.toLowerCase() === "get";
  const lastSegment = config.url?.split("/").pop() || "";

  // Verifica se o último segmento é um ID (UUID ou Numérico)
  const hasId = /^[0-9a-fA-F-]+$/.test(lastSegment) || /^\d+$/.test(lastSegment);

  const isPrivateAction = !isGet || (isGet && hasId);

  // Validação de token
  const cookies = document.cookie.split("; ");
  const isAuthenticated = cookies.some((row) => row.startsWith("portfolio_auth_token=authenticated_session"));

  if (isPrivateAction && isAuthenticated && apiKey) {
    config.headers["x-api-key"] = apiKey;
  }

  return config;
});
