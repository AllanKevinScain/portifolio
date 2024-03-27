"use client";
import { useState } from "react";
import { MdOutlineMenuOpen } from "react-icons/md";
import colors from "tailwindcss/colors";

import { CodeTag, Modal } from "@/components";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const links = [
    { id: "1", label: "Inicio", href: "/" },
    { id: "2", label: "Projetos", href: "/explore/projects" },
    { id: "3", label: "Contato", href: "/" },
    { id: "4", label: "Empresa", href: "/" },
  ];

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <nav className="bg-black py-4 mb-6">
        <div className="flex flex-row w-full items-center justify-between mx-auto max-w-7xl px-2">
          <div className="flex flex-row gap-4">
            <img
              className="h-8 w-auto bg-white p-1 rounded-lg"
              src="/code_icon.png"
              alt="Your Company"
            />
            <CodeTag className="py-1">
              <p>Allan Kevin Scain</p>
            </CodeTag>
          </div>
          <div className="hidden flex-row gap-4 md:flex">
            {links.map((i) => {
              const { id, href, label } = i;

              return (
                <a
                  key={id}
                  href={href}
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  {label}
                </a>
              );
            })}
          </div>
          <div className="flex flex-row gap-4 md:hidden">
            <button onClick={() => setIsOpen(true)}>
              <MdOutlineMenuOpen className="w-10 h-10" color={colors.white} />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
