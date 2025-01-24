"use client";
import React, { useEffect } from "react";
import { FaArrowDown, FaWindowClose } from "react-icons/fa";
import { twMerge } from "tailwind-merge";
import colors from "tailwindcss/colors";

import { Button, CodeTag, Divider } from "@/components";
import { useMediaQuery } from "@/hooks";
import { HeaderLinksDrawerInterface } from "@/types";

import { HeaderItems } from "./header-items";
import { ToggleTheme } from "./menu-theme";

export const Modal: React.FC<HeaderLinksDrawerInterface> = (props) => {
  const { isOpen = false, onClose } = props;
  const { isLargeScreen } = useMediaQuery();

  useEffect(() => {
    if (isLargeScreen) {
      onClose();
    }
  }, [isLargeScreen, onClose]);

  return (
    <dialog open={isOpen} className="z-[1]">
      <div
        className="fixed transition-all inset-0 bg-black/60"
        onClick={onClose}
      />
      <div
        className={twMerge(
          "fixed z-1 inset-0",
          "w-[80vw] h-screen bg-primary-background px-5 py-4",
          "flex flex-col space-y-6",
          "sm:w-[50vw]",
          "md:top-0 md:left-0",
          "lg:w-[20vw]"
        )}
      >
        <Button
          variant="unstyled"
          className="absolute top-[5px] -right-8"
          onClick={onClose}
        >
          <FaWindowClose className="w-6 h-6 text-text-secondary-color" />
        </Button>
        <CodeTag className="py-1">
          <div className="flex justify-between items-center">
            <span>Conheça melhor meu trabalho</span>
            <FaArrowDown
              className={twMerge(
                "inline",
                "w-4 h-4 text-title-primary-color",
                "animate-bounce"
              )}
            />
          </div>
        </CodeTag>
        <Divider />
        <HeaderItems showInSmallScreen />
        <ToggleTheme showInSmallScreen />
      </div>
    </dialog>
  );
};
