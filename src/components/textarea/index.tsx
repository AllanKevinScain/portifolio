import { useController, type Control, type FieldValues, type Path } from "react-hook-form";
import { Text } from "../text";

interface TextareaProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
}

export function Textarea<T extends FieldValues>(props: TextareaProps<T>) {
  const { name, control, label } = props;

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

      <textarea
        {...field}
        rows={4}
        aria-label={label}
        className="sf-textarea"
      />

      {error && (
        <Text variant="span" className="text-sm text-red-500">
          {error.message}
        </Text>
      )}
    </>
  );
}
