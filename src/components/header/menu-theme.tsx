"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

import { useMediaQuery, useTheme } from "@/hooks";
import { ToggleThemeInterface } from "@/types";

import { CloneIcon } from "../clone-icon";
import { ListOfIconThemes, listOfThemes } from "./contants";

export const ToggleTheme: React.FC<ToggleThemeInterface> = (props) => {
  const { showInSmallScreen } = props;
  const { theme, toggleTheme } = useTheme();
  const { isLargeScreen } = useMediaQuery();

  const Icon = ListOfIconThemes[theme];

  if (!isLargeScreen && showInSmallScreen) {
    return (
      <ul className="bg-pink-500">
        {listOfThemes.map((currTheme) => (
          <li key={currTheme}>
            <span>{currTheme}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <Menu>
      <MenuButton
        className={twMerge(showInSmallScreen ? "flex" : "hidden md:flex")}
      >
        <CloneIcon className="text-white">
          <Icon size={30} />
        </CloneIcon>
      </MenuButton>
      <MenuItems
        anchor="bottom end"
        className={twMerge(
          "flex flex-col",
          "bg-slate-500 border-[2px] border-gray-200 rounded-lg p-4"
        )}
      >
        <MenuItem as="div">
          <span className="text-xs font-light text-gray-100 mb-[10px]">
            Selecione um tema
          </span>
        </MenuItem>
        <MenuItem as="div" className="grid grid-cols-2 gap-2">
          {listOfThemes.map((currTheme) => {
            const MenuIcon = ListOfIconThemes[currTheme];
            return (
              <button
                key={currTheme}
                onClick={() => toggleTheme(currTheme)}
                className={twMerge("flex justify-center", "w-full")}
              >
                <CloneIcon
                  className={twMerge("text-white", "hover:text-slate-600")}
                >
                  <MenuIcon size={25} />
                </CloneIcon>
              </button>
            );
          })}
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};
