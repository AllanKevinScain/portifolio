import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setStateTheme] = useState<string | null>(() =>
    localStorage.getItem("theme"),
  );

  function setTheme(theme: string) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    setStateTheme(theme);
  }

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  return { setTheme, theme };
}
