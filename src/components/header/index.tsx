import Image from "next/image";
import { CodeTag } from "..";

export const Header: React.FC = () => {
  return (
    <nav className="bg-black py-4">
      <div className="flex flex-row w-full items-center justify-between mx-auto max-w-7xl px-2">
        <div className="flex flex-row gap-4">
          <Image
            className="h-8 w-auto bg-white p-1 rounded-lg"
            src="/code_icon.png"
            alt="Your Company"
            width={100}
            height={100}
          />
          <CodeTag className="py-1">
            <p>Allan Kevin Scain</p>
          </CodeTag>
        </div>
        <div className="flex flex-row gap-4">
          <a
            href="#"
            className="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            Team
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
};
