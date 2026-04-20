import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type VariantType =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "b"
  | "label";

interface GenericTextProps<T extends VariantType> {
  variant?: T;
}

type TextProps<T extends VariantType> = GenericTextProps<T> & ComponentProps<T>;

export function Text<T extends VariantType>(props: TextProps<T>) {
  const { variant = "p", children, className, ...restProps } = props;
  const Tag = variant as React.ElementType;

  const genericTextStyle = twMerge(
    "text-[color-mix(in_srgb,var(--color-text)_70%,transparent)]",
  );

  const variantStyles: Record<VariantType, string> = {
    h1: "text-2xl font-bold mb-6 text-(--color-text)",
    h2: twMerge("text-3xl font-extrabold text-(--color-text)", "sm:text-4xl"),
    h3: "text-lg font-semibold text-(--color-text)",
    h4: "text-md font-semibold text-(--color-text)",
    h5: "text-sm font-semibold text-(--color-text)",
    h6: "text-xs font-semibold text-(--color-text)",
    b: "font-semibold text-(--color-text)",
    p: genericTextStyle,
    span: genericTextStyle,
    label: "text-sm text-(--color-text) opacity-70",
  };

  return (
    <Tag {...restProps} className={twMerge(variantStyles[variant], className)}>
      {children}
    </Tag>
  );
}
