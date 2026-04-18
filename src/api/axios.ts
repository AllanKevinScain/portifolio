import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL || "http://localhost:3000";
const apiKey = import.meta.env.VITE_API_KEY;

export const api = axios.create({
  baseURL,
});

api.interceptors.request.use((config) => {
  const isGet = config.method?.toLowerCase() === "get";
  const lastSegment = config.url?.split("/").pop() || "";
  const isId = /^[0-9a-fA-F-]+$/.test(lastSegment) || /^\d+$/.test(lastSegment);

  const isPublicListing = isGet && !isId;

  if (!isPublicListing && apiKey) {
    config.headers["x-api-key"] = apiKey;
  }

  return config;
});
