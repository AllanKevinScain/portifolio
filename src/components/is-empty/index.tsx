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
  const {
    title = "Nada por aqui ainda",
    description = "Nenhum item cadastrado nessa lista.",
    actionLabel,
    onAction,
    icon,
  } = props;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full flex flex-col items-center justify-center bg-[color-mix(in_srgb,var(--color-bg)_80%,transparent)] border border-(--color-border) text-center py-16 px-6 rounded-2xl"
    >
      <div className="mb-6 w-16 h-16 rounded-xl flex items-center justify-center text-2xl text-(--color-primary) bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)]">
        {icon || "📭"}
      </div>

      <Text variant="h3">{title}</Text>

      <Text variant="p">{description}</Text>

      {actionLabel && onAction && (
        <Button.solid
          onClick={onAction}
          className="mt-6 px-5 py-2.5 rounded-lg"
        >
          {actionLabel}
        </Button.solid>
      )}
    </motion.div>
  );
}
