import { ComponentProps } from "react";

type DivProps = ComponentProps<"div">;
type CutDivProps = Pick<DivProps, "children" | "className">;

export interface CloneIconInterface extends CutDivProps {}
