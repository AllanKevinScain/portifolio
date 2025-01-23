"uese client";
import { useEffect, useState } from "react";

export function useMediaQuery() {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    setIsLargeScreen(window.matchMedia("(min-width: 765px)").matches);

    const handleResize = (e: MediaQueryListEvent) => {
      setIsLargeScreen(e.matches);
    };

    const mediaQuery = window.matchMedia("(min-width: 765px)");

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return {
    isLargeScreen,
  };
}
