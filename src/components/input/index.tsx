import { type InputHTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
  classNameInput?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      id,
      required,
      className,
      classNameInput,
      ...props
    },
    ref,
  ) => {
    const inputId = id || crypto.randomUUID();

    const hasError = !!error;

    return (
      <div className={twMerge("flex flex-col gap-1 w-full", className)}>
        {label && (
          <label
            htmlFor={inputId}
            className={twMerge(
              "text-sm font-medium",
              "text-(--color-border)",
              hasError && "text-[color-mix(in_srgb,red)_70%,var(--color-text)]",
            )}
          >
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </label>
        )}

        <input
          id={inputId}
          ref={ref}
          {...props}
          required={required}
          className={twMerge(
            "px-4 py-3 rounded-xl outline-none transition-all duration-200 disabled:opacity-50",
            "bg-[color-mix(in_srgb,var(--color-primary)_8%,transparent)]",
            "border",
            "border-[color-mix(in_srgb,var(--color-primary)_30%,transparent)]",
            hasError && "border-[color-mix(in_srgb,red_60%,transparent)]",
            classNameInput,
          )}
          onFocus={(e) => {
            if (!hasError) {
              e.currentTarget.style.borderColor =
                "color-mix(in srgb, var(--color-primary) 60%, transparent)";
            }
          }}
          onBlur={(e) => {
            if (!hasError) {
              e.currentTarget.style.borderColor =
                "color-mix(in srgb, var(--color-primary) 30%, transparent)";
            }
          }}
        />

        {hasError ? (
          <span className="text-xs mt-1 text-[color-mix(in_srgb,red_70%,var(--color-text))]">
            {error}
          </span>
        ) : helperText ? (
          <span className="text-xs mt-1 opacity-70 text-(--color-text)">
            {helperText}
          </span>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";
