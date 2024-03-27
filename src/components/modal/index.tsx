import React from "react";
import {
  FaArrowDown,
  FaFacebookSquare,
  FaGithubSquare,
  FaGitlab,
  FaInstagramSquare,
  FaLinkedin,
  FaWindowClose,
} from "react-icons/fa";
import colors from "tailwindcss/colors";

import { CloneIcon, CodeTag } from "@/components";

import { ModalProps } from "./type";

export const Modal: React.FC<ModalProps> = (props) => {
  const { isOpen = false, onClose } = props;
  const links = [
    { id: "1", label: "Inicio", href: "/" },
    { id: "2", label: "Projetos", href: "/explore/projects" },
    { id: "3", label: "Contato", href: "/" },
    { id: "4", label: "Empresa", href: "/" },
  ];

  const socialIcons = [
    FaGithubSquare,
    FaFacebookSquare,
    FaInstagramSquare,
    FaGitlab,
    FaLinkedin,
  ];

  return (
    <dialog open={isOpen} className="z-[1]">
      <div
        className="fixed transition-all inset-0 bg-black/60"
        onClick={onClose}
      />
      <div className="fixed z-1 inset-0 flex flex-col space-y-6 w-[80vw] h-screen bg-gray-100 divide-y px-5 py-4 sm:w-[50vw] md:top-0 md:left-0 lg:w-[20vw]">
        <button className="absolute top-[5px] -right-8" onClick={onClose}>
          <FaWindowClose className="w-6 h-6" color={colors.white} />
        </button>
        <CodeTag className="py-1">
          <p>
            Conheça melhor meu trabalho{" "}
            <FaArrowDown
              className="w-4 h-4 inline animate-bounce"
              color={colors.gray[900]}
            />
          </p>
        </CodeTag>
        <div className="flex flex-col gap-4">
          {links.map((i) => {
            const { id, href, label } = i;

            return (
              <a
                key={id}
                href={href}
                className="text-gray-900 text-2xl font-medium"
              >
                {label}
              </a>
            );
          })}
        </div>
        <div className="flex justify-between pt-4">
          {socialIcons.map((Icon) => (
            <CloneIcon key={Icon.toString()} className="text-[25px] text-black">
              <Icon />
            </CloneIcon>
          ))}
        </div>
      </div>
    </dialog>
  );
};
