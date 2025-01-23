export type ThemeKeysType =
  | "default"
  | "light"
  | "dark"
  | "alura"
  | "youtube"
  | "instagram";

export interface ThemeContextInterface {
  theme: ThemeKeysType;
  toggleTheme: (_: ThemeKeysType) => void;
}
