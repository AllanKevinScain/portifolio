import { ComponentProps } from "react";

type H1HTMLProps = ComponentProps<"h1">;

export interface TitleInterface extends H1HTMLProps {
  stringContent: string;
}
