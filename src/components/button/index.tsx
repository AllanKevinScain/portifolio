import { twMerge } from "tailwind-merge";

import { ButtonInterface } from "@/types";

export const Button: React.FC<ButtonInterface> = (props) => {
  const { className, children, ...rest } = props;

  return (
    <button
      {...rest}
      type="button"
      className={twMerge(
        "w-fit bg-gray-700 rounded-lg py-2 px-4 font-thin text-white",
        "transition-all",
        "hover:bg-gray-800",
        "active:bg-gray-800",
        className
      )}
    >
      {children}
    </button>
  );
};
