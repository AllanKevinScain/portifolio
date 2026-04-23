import { Button, Text } from "@/components";
import type { CreateWorkInput } from "@/schemas/work.schema";
import { WorkSchema } from "@/schemas/work.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface WorkFormProps {
  initialData?: Partial<CreateWorkInput>;
  onSubmit: (data: CreateWorkInput) => void;
  onCancel: () => void;
}

export function WorkForm({ initialData, onSubmit, onCancel }: WorkFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateWorkInput>({
    resolver: zodResolver(
      WorkSchema.omit({ id: true, createdAt: true, updatedAt: true }),
    ),
    defaultValues: initialData,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 rounded-lg border border-(--color-border) bg-(--color-card) p-6"
    >
      <Text variant="h3" className="mb-2">
        {initialData ? "Editar Trabalho" : "Novo Trabalho"}
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

      <div className="flex flex-col gap-1">
        <Text variant="label">URL da Imagem</Text>
        <input
          {...register("image")}
          className="rounded border border-(--color-border) bg-(--color-bg) p-2 text-(--color-text) focus:ring-2 focus:ring-(--color-primary) focus:outline-none"
        />
        {errors.image && (
          <Text variant="span" className="text-sm text-red-500">
            {errors.image.message}
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
  );
}
