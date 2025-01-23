"use client";
import { createContext, useCallback, useEffect, useState } from "react";

import { SomeChildreInterface } from "@/types";
import { ThemeContextInterface, ThemeKeysType } from "@/types";

export const ThemeContext = createContext<ThemeContextInterface>({
  theme: "default",
  toggleTheme: () => null,
});

const themes: ThemeKeysType[] = [
  "light",
  "dark",
  "youtube",
  "instagram",
  "alura",
  "default",
];

export function ThemeProvider({ children }: SomeChildreInterface) {
  const [theme, setTheme] = useState<ThemeKeysType>("default");

  const toggleTheme = useCallback((value: ThemeKeysType) => {
    setTheme((state) => (state !== value ? value : state));
  }, []);

  const removeCurrentTheme = useCallback(() => {
    const willRemoveTheme = themes.filter((t) => {
      if (document.body.className.includes(t)) return t;
    })[0];

    document.body.classList.remove(willRemoveTheme);

    document.body.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    removeCurrentTheme();
  }, [removeCurrentTheme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
