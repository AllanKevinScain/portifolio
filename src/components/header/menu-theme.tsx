"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { FaHandPointDown } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

import { Button, CloneIcon, Divider } from "@/components";
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
      <div className="flex flex-col gap-8">
        <div
          className={twMerge(
            "flex justify-between",
            "text-title-primary-color"
          )}
        >
          <span className="text-lg ">Altere o tema</span>
          <FaHandPointDown size={20} className="inline" />
        </div>
        <Divider />
        <ul className="list-none w-full">
          {listOfThemes.map((currTheme) => (
            <li key={currTheme}>
              <Button
                variant="unstyled"
                onClick={() => toggleTheme(currTheme)}
                className={twMerge(
                  "p-2 text-2xl text-text-primary-color w-full text-start rounded-lg",
                  "focus:bg-secondary-background focus:text-white"
                )}
              >
                <span>{currTheme}</span>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <Menu>
      <MenuButton
        className={twMerge(showInSmallScreen ? "flex" : "hidden md:flex")}
      >
        <CloneIcon
          className={twMerge(
            "text-text-primary-color",
            "hover:text-text-secondary-color"
          )}
        >
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
