import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type ProductType = {
  titulo: string;
  desc: string;
  faixa: string;
};

export function ProductCard(props: ProductType) {
  const { titulo, desc, faixa } = props;

  const item = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.li
      key={titulo}
      variants={item}
      whileHover={{ y: -12, scale: 1.01 }}
      className={twMerge(
        "relative group rounded-2xl p-7 flex flex-col overflow-hidden transition-all border",
        "bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--color-surface)_95%,transparent),color-mix(in_srgb,var(--color-surface)_85%,transparent))]",
        "bg-[color-mix(in_srgb,var(--color-text)_15%,transparent)]",
      )}
    >
      <div
        className={twMerge(
          "absolute inset-0 opacity-20 pointer-events-none",
          "bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-text)_10%,transparent)_1px,transparent 1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--color-text)_10%,transparent)_1px,transparent_1px)]",
          "bg-size-[28px_28px]",
        )}
      />

      <div
        className={twMerge(
          "inline-flex self-start px-3 py-1 mb-5 text-xs font-medium rounded-full border",
          "text-(--color-primary)",
          "bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)]",
          "border-[color-mix(in_srgb,var(--color-primary)_30%,transparent)]]",
        )}
      >
        {faixa}
      </div>

      <h3 className="text-xl font-semibold transition text-(--color-text)">
        {titulo}
      </h3>

      <p
        className={twMerge(
          "mt-3 text-sm leading-relaxed flex-1",
          "text-[color-mix(in_srgb,var(--color-text)_65%,transparent)]",
        )}
      >
        {desc}
      </p>

      <a
        href="#contato"
        className={twMerge(
          "inline-flex justify-center items-center px-5 py-3 mt-7 rounded-lg font-medium transition-all",
          "bg-[linear-gradient(to_right,var(--color-primary),var(--color-secondary))]",
          "text-white",
          "shadow-[0_10px_30px_color-mix(in_srgb,var(--color-primary)_40%,transparent)]",
        )}
      >
        Solicitar orçamento
      </a>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
        <div
          className={twMerge(
            "absolute -inset-1 blur-xl rounded-2xl",
            "bg-[color-mix(in_srgb,var(--color-primary)_15%,transparent)]",
          )}
        />
      </div>
    </motion.li>
  );
}
