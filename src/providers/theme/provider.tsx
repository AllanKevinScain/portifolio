import type { ThemeType } from "@/types";
import { useEffect, useState } from "react";
import { ThemeContext } from "./context";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setStateTheme] = useState<ThemeType>(() => {
    return (localStorage.getItem("theme") as ThemeType) || null;
  });

  function setTheme(theme: ThemeType) {
    if (!theme) return;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setStateTheme(theme);
  }

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
