import { twMerge } from "tailwind-merge";

import { HeaderItemsInterface } from "@/types";

import { headerLinks } from "./contants";

export const HeaderItems: React.FC<HeaderItemsInterface> = (props) => {
  const { showInSmallScreen } = props;

  return (
    <div
      className={twMerge(
        "flex flex-col gap-4",
        "md:flex-row",
        showInSmallScreen ? "flex" : "hidden md:flex"
      )}
    >
      {headerLinks.map((i) => {
        const { id, href, label } = i;

        return (
          <a
            key={id}
            href={href}
            className={twMerge(
              "text-text-primary-color text-2xl font-medium rounded-md p-2",
              "md:border md:border-border-secondary-color md:text-text-primary-color md:text-sm",
              "hover:text-text-secondary-color",
              "focus:bg-secondary-background focus:text-white"
            )}
          >
            {label}
          </a>
        );
      })}
    </div>
  );
};
