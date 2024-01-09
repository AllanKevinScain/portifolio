"use client";
import { twMerge } from "tailwind-merge";
import { ScrollContainerInterface } from "./type";

import "./drag-sides.css";

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
