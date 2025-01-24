"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { twMerge } from "tailwind-merge";

import { Button, CloneIcon } from "@/components";
import { useMediaQuery, useTheme } from "@/hooks";
import { ToggleThemeInterface } from "@/types";

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
        <CloneIcon className="text-text-primary-color">
          <Icon size={30} />
        </CloneIcon>
      </MenuButton>
      <MenuItems
        anchor="bottom end"
        className={twMerge(
          "flex flex-col",
          "bg-boxes-secondary-background border-[2px] border-border-secondary-color rounded-lg p-4",
          "shadow-lg"
        )}
      >
        <MenuItem as="div">
          <span className="text-xs font-light text-text-secondary-color mb-[10px]">
            Selecione um tema
          </span>
        </MenuItem>
        <MenuItem as="div" className="grid grid-cols-2 gap-2">
          {listOfThemes.map((currTheme) => {
            const MenuIcon = ListOfIconThemes[currTheme];
            return (
              <Button
                key={currTheme}
                variant="ghost"
                onClick={() => toggleTheme(currTheme)}
                className={twMerge("flex justify-center", "w-full")}
              >
                <CloneIcon
                  className={twMerge(
                    "text-text-secondary-color",
                    "hover:opacity-80"
                  )}
                >
                  <MenuIcon size={25} />
                </CloneIcon>
              </Button>
            );
          })}
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};
