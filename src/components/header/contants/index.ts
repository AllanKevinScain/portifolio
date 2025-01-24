import { FaMoon as DarkIcon } from "react-icons/fa";
import { IoSunnyOutline as LightIcon } from "react-icons/io5";
import { PiInstagramLogoFill as InstagramIcon } from "react-icons/pi";
import { RiMoonCloudyFill as DefaultIcon } from "react-icons/ri";
import { SiYoutubeshorts as YoutubeIcon } from "react-icons/si";
import { TbCircleLetterA as AluraIcon } from "react-icons/tb";

import { ThemeKeysType } from "@/types";

export const listOfThemes: ThemeKeysType[] = [
  "light",
  "dark",
  "alura",
  "youtube",
  "instagram",
  "default",
];

export const ListOfIconThemes = {
  light: LightIcon,
  dark: DarkIcon,
  alura: AluraIcon,
  youtube: YoutubeIcon,
  instagram: InstagramIcon,
  default: DefaultIcon,
};

export const headerLinks = [
  { id: "1", label: "Inicio", href: "/explore" },
  { id: "2", label: "Projetos", href: "/explore/projects" },
  { id: "3", label: "Contato", href: "/" },
  { id: "4", label: "Empresa", href: "/" },
];
