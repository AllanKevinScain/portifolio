import { twMerge } from "tailwind-merge";

import { ButtonInterface } from "@/types";

export const Button: React.FC<ButtonInterface> = (props) => {
  const { className, children, variant = "unstyled", ...rest } = props;

  const variants = {
    unstyled: "",
    primary: "bg-boxes-primary-background text-text-primary-color",
    secondary: "bg-boxes-secondary-background text-text-secondary-color",
    ghost: "bg-transparent text-text-primary-color",
    underline:
      "bg-transparent text-text-primary-color border border-border-primary-color",
  };

  return (
    <button
      {...rest}
      type="button"
      className={twMerge(
        variant !== "unstyled" &&
          "w-fit rounded-lg py-2 px-4 font-medium transition-all border-border-primary-color",
        "hover:opacity-80",
        "active:opacity-80",
        variants[variant],
        className
      )}
    >
      {children}
    </button>
  );
};
