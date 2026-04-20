import { ThemeContext } from "@/providers/theme/context";
import { useContext } from "react";

export function useTheme() {
  return useContext(ThemeContext);
}
