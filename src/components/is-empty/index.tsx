import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

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
      className={twMerge(
        "w-full flex flex-col items-center justify-center",
        "text-center",
        "py-16 px-6",
        "rounded-2xl",
        "border border-(--color-border)",
        "bg-[color-mix(in_srgb,var(--color-bg)_80%,transparent)]",
      )}
    >
      <div
        className={twMerge(
          "mb-6 flex items-center justify-center",
          "w-16 h-16 rounded-xl",
          "bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)]",
          "text-(--color-primary)",
          "text-2xl",
        )}
      >
        {icon || "📭"}
      </div>

      <h3 className="text-lg font-semibold text-(--color-text)">{title}</h3>

      <p
        className={twMerge(
          "mt-2 max-w-md text-sm",
          "text-[color-mix(in_srgb,var(--color-text)_70%,transparent)]",
        )}
      >
        {description}
      </p>

      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className={twMerge(
            "mt-6 px-5 py-2.5 rounded-lg",
            "text-white font-medium",
            "bg-[linear-gradient(to_right,var(--color-primary),var(--color-secondary))]",
            "hover:scale-105 transition-all",
          )}
        >
          {actionLabel}
        </button>
      )}
    </motion.div>
  );
}
