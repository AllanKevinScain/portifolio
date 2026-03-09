import { motion } from "framer-motion";

type Tech = {
  name: string;
  description: string;
};

const techs: Tech[] = [
  {
    name: "React",
    description:
      "Modern library that build escalable and performant user interfaces",
  },
  {
    name: "TypeScript",
    description:
      "Superset of JavaScript that adds static typing and improves maintainability.",
  },
  {
    name: "TailwindCSS",
    description:
      "Utility‑first CSS framework that lets you build modern interfaces quickly.",
  },
  {
    name: "Vite",
    description:
      "Extremely fast build tool with an excellent developer experience.",
  },
  {
    name: "Node.js",
    description:
      "JavaScript‑based backend environment focused on performance and scalability.",
  },
];

type Props = {
  tech: {
    name: string;
    description: string;
  };
  index: number;
};

function TechListItem({ tech, index }: Props) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className="
        group
        relative
        py-6
        border-b
        border-[color-mix(in_srgb,var(--color-border)_60%,transparent)]
      "
    >
      <div
        className="
          absolute inset-0 opacity-0 group-hover:opacity-100 transition
          bg-[color-mix(in_srgb,var(--color-primary)_5%,transparent)]
          pointer-events-none
        "
      />

      <div
        className="
          absolute left-0 top-0 bottom-0 w-0.5
          bg-[linear-gradient(to_bottom,var(--color-primary),var(--color-secondary))]
          opacity-0 group-hover:opacity-100
          transition
        "
      />

      <div className="relative pl-4">
        <h3
          className="
            text-lg font-semibold
            text-(--color-text)
            group-hover:text-(--color-primary)
            transition
          "
        >
          {tech.name}
        </h3>

        <p
          className="
            mt-1 text-sm leading-relaxed
            text-[color-mix(in_srgb,var(--color-text)_70%,transparent)]
          "
        >
          {tech.description}
        </p>
      </div>
    </motion.li>
  );
}

export function TechList() {
  return (
    <>
      <div className="absolute inset-0 -z-10">
        <div
          className="
            absolute left-1/2 -translate-x-1/2 top-0
            w-200 h-100
            bg-[color-mix(in_srgb,var(--color-primary)_15%,transparent)]
            blur-[140px]
            rounded-full
          "
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-(--color-text)">
            About Me {"(Tech Stack)"}
          </h2>

          <p className="mt-3 text-[color-mix(in_srgb,var(--color-text)_70%,transparent)] max-w-xl">
            Tools and tecnologies that i use to build modern, performant and
            scalable applications.
          </p>
        </header>

        <ul className="flex flex-col">
          {techs.map((tech, index) => (
            <TechListItem key={tech.name} tech={tech} index={index} />
          ))}
        </ul>
      </div>
    </>
  );
}
