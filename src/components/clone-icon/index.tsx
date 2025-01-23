import { Children, cloneElement } from "react";

import { CloneIconInterface } from "@/types";

export const CloneIcon: React.FC<CloneIconInterface> = (props) => {
  const { children, className } = props;

  return Children.map(children, (child: any) => {
    const newChild = cloneElement(child, {
      className: className,
    });

    return newChild;
  });
};
