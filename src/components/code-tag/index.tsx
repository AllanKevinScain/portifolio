import { twMerge } from "tailwind-merge";

import { CodeTagInterface } from "@/types";

export const CodeTag: React.FC<CodeTagInterface> = (props) => {
  const { children, className } = props;
  return (
    <div
      className={twMerge(
        "border rounded-lg text-gray-500 bg-zinc-800/30 from-inherit py-4 px-6 backdrop-blur-2xl",
        className
      )}
    >
      <code className="font-mono font-bold">{children}</code>
    </div>
  );
};
