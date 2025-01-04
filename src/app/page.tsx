"use client";
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

import { Animation, Button } from "@/components";

import { FullStackDevCodeTag } from "./components";

export default function Page() {
  const navigate = useRouter();

  return (
    <main
      className={twMerge(
        "h-screen w-screen px-[10%]",
        "bg-apresentation-gradient",
        "flex flex-col justify-center items-center gap-10",
        "lg:flex-row"
      )}
    >
      <div
        className={twMerge(
          "h-[30vh] w-full bg-black pb-[10%]",
          "rounded-b-3xl border-gray-600 border-b-2",
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
        <Button onClick={() => navigate.push("/explore")}>Explore more</Button>
        {/* <Animation.lottie
          loadingComponent={<div>Loading animation...</div>}
          src={firstAnimation}
          loop={false}
          keepLastFrame={true}
          style={{ border: "1px solid #ff0", width: 749, height: 749 }}
        /> */}
      </div>
    </main>
  );
}
