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
              "text-gray-900 text-2xl font-medium rounded-md px-3 py-2",
              "md:bg-gray-900 md:text-white  md:text-sm"
            )}
          >
            {label}
          </a>
        );
      })}
    </div>
  );
};
