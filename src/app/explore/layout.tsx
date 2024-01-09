import { Header } from "@/components";
import { Fragment } from "react";

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <Header /> {children}
    </Fragment>
  );
}
