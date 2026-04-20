import type { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type VariantType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "b";

interface GenericTextProps<T extends VariantType> {
  variant: T;
}

type TextProps<T extends VariantType> = GenericTextProps<T> & ComponentProps<T>;

export function Text<T extends VariantType>(props: TextProps<T>) {
  const { variant, children, className, ...restProps } = props;
  const Tag = variant as React.ElementType;

  const genericTextStyle = twMerge(
    "mt-3 max-w-xl",
    "text-[color-mix(in_srgb,var(--color-text)_70%,transparent)]",
  );

  const variantStyles: Record<VariantType, string> = {
    h1: twMerge(
      "text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight",
      "text-(--color-text)",
      "bg-linear-to-r from-(--color-primary) to-(--color-secondary) bg-clip-text text-transparent",
    ),
    h2: twMerge("text-3xl font-extrabold text-(--color-text)", "sm:text-4xl"),
    h3: "text-lg font-semibold text-(--color-text)",
    h4: "text-md font-semibold text-(--color-text)",
    h5: "text-sm font-semibold text-(--color-text)",
    h6: "text-xs font-semibold text-(--color-text)",
    b: "font-semibold text-(--color-text)",
    p: genericTextStyle,
    span: genericTextStyle,
  };

  return (
    <Tag {...restProps} className={twMerge(variantStyles[variant], className)}>
      {children}
    </Tag>
  );
}
