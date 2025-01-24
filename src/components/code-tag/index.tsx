import { twMerge } from "tailwind-merge";

import { CodeTagInterface } from "@/types";

export const CodeTag: React.FC<CodeTagInterface> = (props) => {
  const { children, className } = props;
  return (
    <div
      className={twMerge(
        "border border-border-secondary-color rounded-lg text-text-primary-color from-inherit py-4 px-6 backdrop-blur-2xl",
        "overflow-hidden",
        className
      )}
    >
      <code className="font-mono font-bold">{children}</code>
    </div>
  );
};
