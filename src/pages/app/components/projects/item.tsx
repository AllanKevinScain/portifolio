import { CustomLink } from "@/components";
import type { Project } from "@/hooks";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

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
      className={twMerge(
        "relative overflow-hidden group rounded-2xl border transition-all",
        "shadow-xl",
        "border-(--color-border)",
      )}
    >
      <div className="relative h-10 overflow-hidden">
        <div
          className={twMerge(
            "absolute inset-0 opacity-80 transition group-hover:opacity-100",
            "bg-[linear-gradient(to_bottom_right,color-mix(in_srgb,var(--color-primary)_25%,transparent),color-mix(in_srgb,var(--color-secondary)_25%,transparent))]",
          )}
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold transition text-(--color-text)">
          {title}
        </h3>

        <p
          className={twMerge(
            "mt-2 text-sm",
            "text-[color-mix(in_srgb,var(--color-text)_70%,transparent)]",
          )}
        >
          {description}
        </p>

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
              Código
            </CustomLink.ghost>
          )}
        </div>
      </div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
        <div
          className={twMerge(
            "absolute -inset-1 blur-xl rounded-2xl",
            "bg-[color-mix(in_srgb,var(--color-primary)_18%,transparent)]",
          )}
        />
      </div>
    </motion.li>
  );
}
