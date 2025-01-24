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
        "primary-background": "rgba(var(--primary-background))",
        "secondary-background": "rgba(var(--secondary-background))",
        "boxes-primary-background": "rgba(var(--boxes-primary-background))",
        "boxes-secondary-background": "rgba(var(--boxes-secondary-background))",
        "text-primary-color": "rgba(var(--text-primary-color))",
        "text-secondary-color": "rgba(var(--text-secondary-color))",
        "border-primary-color": "rgba(var(--border-primary-color))",
        "border-secondary-color": "rgba(var(--border-secondary-color))",
        "title-primary-color": "rgba(var(--title-primary-color))",
        "title-secondary-color": "rgba(var(--title-secondary-color))",
      },
    },
  },
};
export default config;
