import { ComponentProps } from "react";

type SpanProps = ComponentProps<"span">;
type CutSpanProps = Pick<SpanProps, "children" | "className">;

export interface TextRevealInterface extends CutSpanProps {
  index: string;
}
