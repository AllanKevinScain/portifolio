import { Text } from "@/components";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface ItemProps {
  id: string;
  name: string;
  description: string;
  index: number;
}

export function Item(props: ItemProps) {
  const { id, index, name, description } = props;

  return (
    <motion.li
      key={id}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className={twMerge(
        "group",
        "relative",
        "py-6",
        "border-b",
        "border-[color-mix(in_srgb,var(--color-border)_60%,transparent)]",
      )}
    >
      <div
        className={twMerge(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition",
          "bg-[color-mix(in_srgb,var(--color-primary)_5%,transparent)]",
          "pointer-events-none",
        )}
      />

      <div
        className={twMerge(
          "absolute left-0 top-0 bottom-0 w-0.5",
          "bg-[linear-gradient(to_bottom,var(--color-primary),var(--color-secondary))]",
          "opacity-0 group-hover:opacity-100",
          "transition",
        )}
      />

      <div className="relative pl-4">
        <h3
          className={twMerge(
            "text-lg font-semibold",
            "text-(--color-text)",
            "group-hover:text-(--color-primary)",
            "transition",
          )}
        >
          {name}
        </h3>

        <Text className="mt-1">{description}</Text>
      </div>
    </motion.li>
  );
}
