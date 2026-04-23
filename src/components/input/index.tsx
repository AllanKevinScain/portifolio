import type { ComponentProps } from "react";
import { useController, type Control, type FieldValues, type Path } from "react-hook-form";
import { Text } from "../text";

type ElementInputProps = ComponentProps<"input">;

interface InputProps<T extends FieldValues> extends Pick<ElementInputProps, "type"> {
  name: Path<T>;
  control: Control<T>;
  label: string;
}

export function Input<T extends FieldValues>(props: InputProps<T>) {
  const { name, control, label, type } = props;

  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <>
      <Text variant="label">{label}</Text>

      <input
        {...field}
        type={type ?? "text"}
        aria-label={label}
        className="rounded border border-(--color-border) bg-(--color-bg) p-2 text-(--color-text) focus:ring-2 focus:ring-(--color-primary) focus:outline-none"
      />

      {error && (
        <Text variant="span" className="text-sm text-red-500">
          {error.message}
        </Text>
      )}
    </>
  );
}
