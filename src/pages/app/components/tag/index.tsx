import { twMerge } from "tailwind-merge";

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className={twMerge(
        "inline-flex items-center px-2.5 py-1 text-xs rounded-md border",
        "bg-[color-mix(in_srgb,var(--color-primary)_12%,transparent)]",
        "text-(--color-primary)",
        "border-[color-mix(in_srgb,var(--color-primary)_25%,transparent)]",
      )}
    >
      {children}
    </span>
  );
}
