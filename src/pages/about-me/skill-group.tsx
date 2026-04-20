import { Text } from "@/components";
import { twMerge } from "tailwind-merge";

export function SkillGroup({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="space-y-3">
      <Text
        variant="h3"
        className=" text-sm uppercase tracking-wider text-(--color-primary)"
      >
        {title}
      </Text>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <Text
            key={item}
            className={twMerge(
              "px-4 py-2 rounded-lg",
              "border border-(--color-border)",
              "bg-[color-mix(in_srgb,var(--color-bg)_80%,transparent)]",
            )}
          >
            {item}
          </Text>
        ))}
      </div>
    </div>
  );
}
