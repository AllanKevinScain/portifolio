"use client";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { Animation, Button } from "@/components";
import { ToggleTheme } from "@/components/header/menu-theme";

import { FullStackDevCodeTag } from "./components";

export default function Page() {
  const navigate = useRouter();

  return (
    <main
      className={twMerge(
        "relative",
        "overflow-y-auto",
        "px-[10%] pb-[10vh]",
        "bg-apresentation-gradient",
        "flex flex-col justify-center items-center gap-10 ",
        "lg:flex-row lg:py-0"
      )}
    >
      <div
        className={twMerge(
          "h-[70vh] w-full bg-boxes-primary-background pb-[10%]",
          "rounded-b-3xl border-border-secondary-color border-b-2",
          "flex justify-center items-end",
          "lg:h-[80vh]"
        )}
      >
        <img
          className="w-100% h-auto"
          src="https://media1.tenor.com/m/Z_Ah8rkdZ4YAAAAC/walking-code.gif"
          alt="my-gif"
        />
      </div>
      <div className="flex flex-col gap-8 w-full">
        <Animation.title stringContent="Allan Kevin Scain" />
        <FullStackDevCodeTag />
        <Button
          onClick={() => navigate.push("/explore")}
          variant="primary"
          className="hidden lg:flex"
        >
          Explore more
        </Button>
      </div>
      <div className="absolute top-5 right-5">
        <ToggleTheme showInSmallScreen={false} />
      </div>
    </main>
  );
}
