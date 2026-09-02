import { Button as SafiraButton } from "safira-ui/react";
import type { ComponentProps } from "react";

export function OutlineButton(props: ComponentProps<typeof SafiraButton>) {
  return <SafiraButton {...props} variant="secondary" />;
}
