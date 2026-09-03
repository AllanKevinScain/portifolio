import { Text } from "@/components";
import type { Tech } from "@/schemas";
import { Accordion } from "safira-ui/react";

export function TechListItem(props: Tech) {
  const { description, name, nivel: _, } = props;

  return (
    
      <Accordion summary={name} className={{
        button: "text-(--color-text)"
      }}>
        <Text variant="span">{description}</Text>
      </Accordion>
  );
}
