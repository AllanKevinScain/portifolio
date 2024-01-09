import { ComponentProps } from "react";

type CodeProps = ComponentProps<"div">;
type CutCodeProps = Pick<CodeProps, "children" | "className">;

export interface CodeTagInterface extends CutCodeProps {}
