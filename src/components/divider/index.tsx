import { twMerge } from "tailwind-merge";

import { DividerInterface } from "./divider.type";

export const Divider: React.FC<DividerInterface> = (props) => {
  return (
    <hr
      {...props}
      className={twMerge(
        "border border-border-secondary-color",
        props.className
      )}
    />
  );
};
