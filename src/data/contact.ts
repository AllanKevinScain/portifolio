import type { ComponentProps } from "react";

interface LinkProps extends ComponentProps<"a"> {
  label: string;
}

export const footerItems: LinkProps[] = [
  {
    href: "mailto:meuemail44allan@email.com",
    label: "Send e-mail",
  },
  {
    href: "https://www.linkedin.com/in/allan-kevin-scain-19802718a/",
    label: "LinkedIn",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    href: "https://github.com/allankevinscain",
    label: "GitHub",
    target: "_blank",
    rel: "noopener noreferrer",
  },
];
