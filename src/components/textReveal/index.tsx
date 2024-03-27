import "./has-show.css";

import { twMerge } from "tailwind-merge";

import { TextRevealInterface } from "./type";

export const TextReveal: React.FC<TextRevealInterface> = (props) => {
  const { children, className, index } = props;

  return (
    <div className={`show-box-${index}`}>
      <span className={twMerge(`show-text-${index}`, className)}>
        {children}
      </span>
    </div>
  );
};
