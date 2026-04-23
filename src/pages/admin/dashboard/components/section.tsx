import { Text } from "@/components";
import { Link } from "react-router";

interface SectionProps {
  name: string;
  description: string;
  path: string;
}

export function Section(props: SectionProps) {
  const { name, description, path } = props;

  return (
    <Link
      to={path}
      className="p-6 bg-(--color-card) rounded-lg border border-(--color-border) hover:border-(--color-primary) transition-colors group"
    >
      <Text
        variant="h3"
        className="mb-2 group-hover:text-(--color-primary) transition-colors"
      >
        {name}
      </Text>
      <Text variant="p" className="opacity-70">
        {description}
      </Text>
    </Link>
  );
}
