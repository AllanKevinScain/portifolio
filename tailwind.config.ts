import type { Config } from "tailwindcss";

import { gradients, spacing } from "./src/theme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    letterSpacing: spacing.letterSpacing,
    extend: {
      backgroundImage: gradients,
      colors: {
        background: "rgba(var(--background))",
        "boxes-and-borders": "rgba(var(--boxes-and-borders))",
        "primary-texts": "rgba(var(--primary-texts))",
        "primary-light": "rgba(var(--primary-light))",
        "primary-natural": "rgba(var(--primary-natural))",
        "primary-pastel": "rgba(var(--primary-pastel))",
        "primary-500": "rgba(var(--primary-500))",
        secondary: "rgba(var(--secondary))",
        "secondary-texts": "rgba(var(--secondary-texts))",
      },
    },
  },
};
export default config;
