import { ComponentProps } from "react";

type ButtonHTMLProps = ComponentProps<"button">;

export interface ButtonInterface extends ButtonHTMLProps {
  variant: "unstyled" | "primary" | "secondary" | "ghost" | "underline";
}
