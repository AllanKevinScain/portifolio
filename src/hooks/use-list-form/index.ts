import { useState } from "react";

type FormValueType<T extends { id: string }> = {
  initialValue: T[];
};

export function useListForm<T extends { id: string }>(props: FormValueType<T>) {
  const { initialValue } = props;
  const [formValue, setFormValue] = useState<T[]>(initialValue);

  function handleAdd(value: T) {
    setFormValue((state) => [...state, value]);
  }
  function handleRemove(id: string) {
    const filter = formValue.filter((item) => item.id !== id);
    setFormValue(filter);
  }

  return { formValue, handleAdd, handleRemove };
}
