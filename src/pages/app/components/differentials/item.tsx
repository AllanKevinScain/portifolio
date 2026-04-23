import { Text } from '@/components';
import type { Differential } from '@/schemas';
import { motion } from 'framer-motion';

export function DifferentialCard(props: Differential) {
  const { title, description } = props;

  const icons = ['⭐', '🚀', '💎', '⚡', '🧠', '🛠️', '🎯', '🔥', '🧩', '🏆'];

  return (
    <motion.li
      key={title}
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--color-text)_15%,transparent)] bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--color-bg)_95%,transparent),color-mix(in_srgb,var(--color-bg)_85%,transparent))] p-6 transition-all">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-text)_10%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--color-text)_10%,transparent)_1px,transparent_1px)] bg-size-[28px_28px] opacity-20" />

      <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-[linear-gradient(to_bottom_right,var(--color-primary),var(--color-secondary))] text-2xl shadow-[0_10px_30px_color-mix(in_srgb,var(--color-primary)_40%,transparent)] transition group-hover:scale-110">
        {icons[title.length % icons.length]}
      </div>

      <Text variant="h3" className="mt-5">
        {title}
      </Text>

      <Text className="mt-2">{description}</Text>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -inset-1 rounded-2xl bg-[color-mix(in_srgb,var(--color-primary)_15%,transparent)] blur-xl" />
      </div>
    </motion.li>
  );
}
