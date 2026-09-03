import { BsInstagram } from "react-icons/bs";
import { FaRocket } from "react-icons/fa6";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { TbBrandMinecraft, TbCircleLetterAFilled } from "react-icons/tb";

import type { ThemeType } from "@/types";

export const optionsTheme: Record<ThemeType, { label: string; value: ThemeType; icon: React.ReactNode }> = {
  light: {
    label: "Light",
    value: "light",
    icon: <MdLightMode size={22} className="text-(--color-text)" />,
  },
  dark: {
    label: "Dark",
    value: "dark",
    icon: <MdDarkMode size={22} className="text-(--color-text)" />,
  },
  rocketseat: {
    label: "Rocketseat",
    value: "rocketseat",
    icon: <FaRocket size={22} className="text-(--color-text)" />,
  },
  minecraft: {
    label: "Minecraft",
    value: "minecraft",
    icon: <TbBrandMinecraft size={22} className="text-(--color-text)" />,
  },
  alura: {
    label: "Alura",
    value: "alura",
    icon: <TbCircleLetterAFilled size={22} className="text-(--color-text)" />,
  },
  instagram: {
    label: "Instagram",
    value: "instagram",
    icon: <BsInstagram size={22} className="text-(--color-text)" />,
  },
};
