import { Text } from "@/components";

export function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="space-y-3">
      <Text variant="h3" className="text-sm tracking-wider text-(--color-primary) uppercase">
        {title}
      </Text>

      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <Text
            key={item}
            className="rounded-lg border border-(--color-border) bg-[color-mix(in_srgb,var(--color-bg)_80%,transparent)] px-4 py-2"
          >
            {item}
          </Text>
        ))}
      </div>
    </div>
  );
}
