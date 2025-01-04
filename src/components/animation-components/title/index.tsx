import { twMerge } from "tailwind-merge";

import { TitleInterface } from "@/types";

export const Title: React.FC<TitleInterface> = (props) => {
  const { className, stringContent, ...rest } = props;

  return (
    <h1
      {...rest}
      className={twMerge(
        "text-[#F3EDE9] tracking-widest text-3xl lg:text-6xl",
        className
      )}
    >
      {stringContent.split("").map((letter, index) => (
        <span
          key={`${index}-${letter}`}
          className="inline transition-all hover:uppercase hover:text-green-700"
        >
          {letter}
        </span>
      ))}
    </h1>
  );
};
