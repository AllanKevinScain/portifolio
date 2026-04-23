import { motion } from "framer-motion";
import { Text } from "../text";

type IconCardProps = {
  titulo: string;
  desc: string;
  icon: string;
};

export function IconCard(props: IconCardProps) {
  const { titulo, desc, icon } = props;

  return (
    <motion.li
      key={titulo}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -10 }}
      className="relative group rounded-2xl p-6 overflow-hidden transition-all border bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--color-bg)_95%,transparent),color-mix(in_srgb,var(--color-bg)_85%,transparent))] border-[color-mix(in_srgb,var(--color-text)_15%,transparent)]"
    >
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-text)_10%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--color-text)_10%,transparent)_1px,transparent_1px)] bg-size-[28px_28px]" />

      <div className="relative w-14 h-14 rounded-xl flex items-center justify-center text-2xl transition group-hover:scale-110 bg-[linear-gradient(to_bottom_right,var(--color-primary),var(--color-secondary))] shadow-[0_10px_30px_color-mix(in_srgb,var(--color-primary)_40%,transparent)]">
        {icon}
      </div>

      <Text variant="h2" className="mt-5">
        {titulo}
      </Text>

      <Text className="mt-2">{desc}</Text>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition pointer-events-none">
        <div className="absolute -inset-1 blur-xl rounded-2xl bg-[color-mix(in_srgb,var(--color-primary)_15%,transparent)]" />
      </div>
    </motion.li>
  );
}
