import { motion } from "framer-motion";
import { Button } from "../button";
import { Text } from "../text";

interface EmptyStateProps {
  title?: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  icon?: React.ReactNode;
}

export function EmptyState(props: EmptyStateProps) {
  const { title = "Nothing here yet.", description = "Any item registered here.", actionLabel, onAction, icon } = props;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex w-full flex-col items-center justify-center rounded-2xl border border-(--color-border) bg-[color-mix(in_srgb,var(--color-bg)_80%,transparent)] px-6 py-16 text-center"
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] text-2xl text-(--color-primary)">
        {icon || "📭"}
      </div>

      <Text variant="h3">{title}</Text>

      <Text variant="p">{description}</Text>

      {actionLabel && onAction && (
        <Button.solid onClick={onAction} className="mt-6 rounded-lg px-5 py-2.5">
          {actionLabel}
        </Button.solid>
      )}
    </motion.div>
  );
}
