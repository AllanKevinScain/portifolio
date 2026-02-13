import type { ComponentProps } from "react";

interface LinkProps extends ComponentProps<"a"> {
  label: string;
}

export const footerItems: LinkProps[] = [
  {
    href: "mailto:seu@email.com",
    label: "Enviar e-mail",
  },
  {
    href: "https://linkedin.com/in/seu-perfil",
    label: "LinkedIn",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    href: "https://github.com/seu-usuario",
    label: "GitHub",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];
