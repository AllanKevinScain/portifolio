import type { Metadata } from "next";
import { Fragment } from "react";

import { Header } from "@/components";
import { SomeChildreInterface } from "@/types";

export const metadata: Metadata = {
  title: "Dashboard | Allan Kevin Scain",
  description: "Dashboard",
};

export default function ExploreLayout(props: SomeChildreInterface) {
  const { children } = props;
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
}
