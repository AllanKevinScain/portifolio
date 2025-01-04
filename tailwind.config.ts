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
    extend: { backgroundImage: gradients },
  },
};
export default config;
