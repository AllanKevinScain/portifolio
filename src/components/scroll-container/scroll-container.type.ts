import { ComponentProps } from "react";

type DivProps = ComponentProps<"div">;
type CutDivProps = Pick<DivProps, "children">;

export interface ScrollContainerInterface extends CutDivProps {
  index: number;
}
