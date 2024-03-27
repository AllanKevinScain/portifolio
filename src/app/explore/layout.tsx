import { Fragment } from "react";

import { Header } from "@/components";

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  );
}
