import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { Tag } from "../tag";

export type ProjetsType = {
  id: string;
  titulo: string;
  descricao: string;
  tags: string[];
  repo?: string;
  demo?: string;
};

export function ProjectCard(props: ProjetsType) {
  const { id, titulo, descricao, tags, repo, demo } = props;

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.li
      key={id}
      variants={itemVariants}
      whileHover={{ y: -12 }}
      className={twMerge(
        "relative overflow-hidden group rounded-2xl border transition-all",
        "shadow-xl",
        "bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--color-bg)_92%,black),color-mix(in_srgb,var(--color-bg)_85%,black))]",
        "border-(--color-border)",
        "shadow-[0_20px_40px_rgba(0,0,0,0.35)]",
      )}
    >
      <div className="relative h-40 overflow-hidden">
        <div
          className={twMerge(
            "absolute inset-0 opacity-80 transition group-hover:opacity-100",
            "bg-[linear-gradient(to_bottom_right,color-mix(in_srgb,var(--color-primary)_25%,transparent),color-mix(in_srgb,var(--color-secondary)_25%,transparent))]",
          )}
        />

        <div
          className={twMerge(
            "absolute inset-0 opacity-20",
            "bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]",
            "bg-size-[28px_28px]",
          )}
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold transition text-(--color-text)">
          {titulo}
        </h3>

        <p
          className={twMerge(
            "mt-2 text-sm",
            "text-[color-mix(in_srgb,var(--color-text)_70%,transparent)]",
          )}
        >
          {descricao}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-5 text-sm">
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="font-medium transition text-(--color-primary)"
            >
              Demo →
            </a>
          )}

          {repo && (
            <a
              href={repo}
              target="_blank"
              rel="noreferrer"
              className={twMerge(
                "transition",
                "text-[color-mix(in_srgb,var(--color-text)_70%,transparent)]",
              )}
            >
              Código
            </a>
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
