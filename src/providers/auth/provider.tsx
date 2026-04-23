import { useCallback, useEffect, useState } from "react";
import { AuthContext } from "./context";

const COOKIE_NAME = "portfolio_auth_token";
const AUTH_TOKEN = "authenticated_session";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const setCookie = useCallback(() => {
    const cookies = document.cookie.split("; ");
    const authCookie = cookies.find((row) => row.startsWith(`${COOKIE_NAME}=`));
    if (authCookie && authCookie.split("=")[1] === AUTH_TOKEN) {
      setIsAuthenticated(true);
    }
  }, []);

  const login = (email: string, password: string) => {
    const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
    const adminPassword = import.meta.env.VITE_ADMIN_PASSWORD;

    if (email === adminEmail && password === adminPassword) {
      const timestemp = Date.now() + 60 * 60 * 3000; // 3 hora

      const expires = new Date(Date.now() + timestemp).toUTCString();
      document.cookie = `${COOKIE_NAME}=${AUTH_TOKEN}; path=/; expires=${expires}; SameSite=Strict`;
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    document.cookie = `${COOKIE_NAME}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    setIsAuthenticated(false);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCookie();
  }, [setCookie]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
