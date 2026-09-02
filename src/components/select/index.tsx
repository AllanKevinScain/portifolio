import { useController, type Control, type FieldValues, type Path } from "react-hook-form";
import { Text } from "../text";

interface SelectProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  options: { value: string; label: string }[];
}

export function Select<T extends FieldValues>(props: SelectProps<T>) {
  const { name, control, label, options = [] } = props;

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

      <select
        {...field}
        aria-label={label}
        className="sf-select"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <Text variant="span" className="text-sm text-red-500">
          {error.message}
        </Text>
      )}
    </>
  );
}
