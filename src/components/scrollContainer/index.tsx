"use client";
import "./drag-sides.css";

import { twMerge } from "tailwind-merge";

import { ScrollContainerInterface } from "./type";

export const ScrollContainer: React.FC<ScrollContainerInterface> = (props) => {
  const { children, index } = props;
  return (
    <div
      className={twMerge(
        "w-full h-full",
        index % 2 === 0 ? "animaiton-left-skill" : "animaiton-right-skill"
      )}
    >
      {children}
    </div>
  );
};
