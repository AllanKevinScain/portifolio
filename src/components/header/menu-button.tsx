"use client";
import { MdOutlineMenuOpen } from "react-icons/md";
import colors from "tailwindcss/colors";

import { MenuButtonInterface } from "@/types";

export const MenuButton: React.FC<MenuButtonInterface> = (props) => {
  const { toggleMenu = () => null } = props;

  return (
    <button onClick={toggleMenu} className="md:hidden">
      <MdOutlineMenuOpen className="w-10 h-10" color={colors.white} />
    </button>
  );
};
