import { CustomLink, Text } from "@/components";
import type { Project } from "@/schemas";
import { motion } from "framer-motion";

export function ProjectCard(props: Project) {
  const { id, title, description, demo, repository } = props;

  return (
    <motion.li
      key={id}
      variants={{
        hidden: { y: 30, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      whileHover={{ y: -12 }}
      className="group relative overflow-hidden rounded-2xl border border-(--color-border) shadow-xl transition-all"
    >
      <div className="relative h-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,color-mix(in_srgb,var(--color-primary)_25%,transparent),color-mix(in_srgb,var(--color-secondary)_25%,transparent))] opacity-80 transition group-hover:opacity-100" />
      </div>

      <div className="p-5">
        <Text variant="h3">{title}</Text>

        <Text className="mt-2 text-sm">{description}</Text>

        <div className="mt-6 flex items-center gap-5 text-sm">
          {demo && (
            <CustomLink.ghost
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="font-medium text-(--color-primary)"
            >
              Demo →
            </CustomLink.ghost>
          )}

          {repository && (
            <CustomLink.ghost
              href={repository}
              target="_blank"
              rel="noreferrer"
              className="text-[color-mix(in_srgb,var(--color-text)_70%,transparent)]"
            >
              Code
            </CustomLink.ghost>
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -inset-1 rounded-2xl bg-[color-mix(in_srgb,var(--color-primary)_18%,transparent)] blur-xl" />
      </div>
    </motion.li>
  );
}
