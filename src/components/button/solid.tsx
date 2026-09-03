import { Button as SafiraButton } from "safira-ui/react";
import type { ComponentProps } from "react";

export function SolidButton(props: ComponentProps<typeof SafiraButton>) {
  return <SafiraButton {...props} variant="primary" />;
}
