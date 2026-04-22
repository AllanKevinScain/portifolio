import { Text } from '@/components';
import { motion } from 'framer-motion';

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
      className="group relative border-b border-[color-mix(in_srgb,var(--color-border)_60%,transparent)] py-6">
      <div className="pointer-events-none absolute inset-0 bg-[color-mix(in_srgb,var(--color-primary)_5%,transparent)] opacity-0 transition group-hover:opacity-100" />

      <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-[linear-gradient(to_bottom,var(--color-primary),var(--color-secondary))] opacity-0 transition group-hover:opacity-100" />

      <div className="relative pl-4">
        <h3 className="text-lg font-semibold text-(--color-text) transition group-hover:text-(--color-primary)">
          {name}
        </h3>

        <Text className="mt-1">{description}</Text>
      </div>
    </motion.li>
  );
}
