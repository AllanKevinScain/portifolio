import { Button as SafiraButton } from "safira-ui/react";
import type { ComponentProps } from "react";

export function GhostButton(props: ComponentProps<typeof SafiraButton>) {
  return <SafiraButton {...props} variant="ghost" />;
}
