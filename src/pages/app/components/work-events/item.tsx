import { Text } from '@/components';
import type { Work } from '@/schemas';
import { motion } from 'framer-motion';

export function WorkCard(props: Work) {
  const { title, description, image: _ } = props;

  return (
    <motion.li
      key={title}
      variants={{
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0 },
      }}
      whileHover={{ y: -12, scale: 1.01 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-[color-mix(in_srgb,var(--color-text)_15%,transparent)] bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--color-bg)_95%,transparent),color-mix(in_srgb,var(--color-bg)_85%,transparent))] p-7 transition-all">
      <div className="bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-text)_10%,transparent)_1px,transparent 1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--color-text)_10%,transparent)_1px,transparent_1px)] pointer-events-none absolute inset-0 bg-size-[28px_28px] opacity-20" />

      <Text variant="h3">{title}</Text>

      <Text className="mt-3 flex-1 text-sm leading-relaxed">{description}</Text>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute -inset-1 rounded-2xl bg-[color-mix(in_srgb,var(--color-primary)_15%,transparent)] blur-xl" />
      </div>
    </motion.li>
  );
}
