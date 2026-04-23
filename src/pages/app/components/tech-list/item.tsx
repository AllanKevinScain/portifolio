import { Text } from "@/components";
import type { Tech } from "@/schemas";
import { motion } from "framer-motion";
import { useState } from "react";

export function TechListItem(props: Tech & { index: number }) {
  const { description, name, nivel: _, index } = props;

  const [hovered, setHovered] = useState(false);

  return (
    <motion.li
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group relative py-6 overflow-hidden border-b border-[color-mix(in_srgb,var(--color-border)_60%,transparent)]"
    >
      <div className="absolute inset-0 opacity-100 transition bg-[color-mix(in_srgb,var(--color-primary)_20%,transparent)]" />

      <div className="absolute left-0 top-0 bottom-0 w-0.5 opacity-100 transition bg-[linear-gradient(to_bottom,var(--color-primary),var(--color-secondary))]" />

      <div className="relative pl-4">
        <Text variant="h3">{name}</Text>

        <motion.div
          animate={hovered ? "open" : "closed"}
          variants={{
            open: {
              height: "auto",
              opacity: 1,
              y: 0,
            },
            closed: {
              height: 0,
              opacity: 0,
              y: -6,
            },
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <Text className="mt-2 text-xs">{description}</Text>
        </motion.div>
      </div>
    </motion.li>
  );
}
