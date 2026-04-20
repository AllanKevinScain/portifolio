import { Text } from "@/components";

interface SectionProps {
  name: string;
  description: string;
}

export function Section(props: SectionProps) {
  const { name, description } = props;

  return (
    <div className="p-6 bg-(--color-card) rounded-lg border border-(--color-border)">
      <Text variant="h3" className="mb-2">
        {name}
      </Text>
      <Text variant="p" className="opacity-70">
        {description}
      </Text>
    </div>
  );
}
