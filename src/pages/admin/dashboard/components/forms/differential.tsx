import { Button, Text } from "@/components";
import { DifferentialSchema, type CreateDifferentialInput } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface DifferentialFormProps {
  initialData?: Partial<CreateDifferentialInput>;
  onSubmit: (data: CreateDifferentialInput) => void;
  onCancel: () => void;
}

export function DifferentialForm({
  initialData,
  onSubmit,
  onCancel,
}: DifferentialFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateDifferentialInput>({
    resolver: zodResolver(
      DifferentialSchema.omit({ id: true, createdAt: true, updatedAt: true }),
    ),
    defaultValues: initialData,
  });

  return (
    <dialog>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 rounded-lg border border-(--color-border) bg-(--color-card) p-6"
      >
        <Text variant="h3" className="mb-2">
          {initialData ? "Editar Diferencial" : "Novo Diferencial"}
        </Text>

        <div className="flex flex-col gap-1">
          <Text variant="label">Título</Text>
          <input
            {...register("title")}
            className="rounded border border-(--color-border) bg-(--color-bg) p-2 text-(--color-text) focus:ring-2 focus:ring-(--color-primary) focus:outline-none"
          />
          {errors.title && (
            <Text variant="span" className="text-sm text-red-500">
              {errors.title.message}
            </Text>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Text variant="label">Descrição</Text>
          <textarea
            {...register("description")}
            rows={3}
            className="resize-none rounded border border-(--color-border) bg-(--color-bg) p-2 text-(--color-text) focus:ring-2 focus:ring-(--color-primary) focus:outline-none"
          />
          {errors.description && (
            <Text variant="span" className="text-sm text-red-500">
              {errors.description.message}
            </Text>
          )}
        </div>

        <div className="mt-4 flex justify-end gap-3">
          <Button.outline type="button" onClick={onCancel}>
            Cancelar
          </Button.outline>
          <Button.solid type="submit">Salvar</Button.solid>
        </div>
      </form>
    </dialog>
  );
}
