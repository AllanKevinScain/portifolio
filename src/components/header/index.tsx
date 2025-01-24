"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

import { HeaderItems } from "./header-items";
import { Modal } from "./header-links-drawer";
import { Logo } from "./logo";
import { MenuButton } from "./menu-button";
import { ToggleTheme } from "./menu-theme";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <nav className="bg-boxes-primary-background py-4 mb-6">
        <div
          className={twMerge(
            "flex flex-row items-center justify-between",
            "w-full mx-auto max-w-7xl px-2"
          )}
        >
          <Logo />
          <div className="flex gap-4 items-center">
            <HeaderItems showInSmallScreen={false} />
            <ToggleTheme showInSmallScreen={false} />
            <MenuButton toggleMenu={() => setIsOpen(true)} />
          </div>
        </div>
      </nav>
    </>
  );
};
