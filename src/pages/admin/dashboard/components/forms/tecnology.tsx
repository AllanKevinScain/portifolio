import { Button, Text } from "@/components";
import type { CreateTechInput } from "@/schemas/tech.schema";
import { TechSchema } from "@/schemas/tech.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface TechFormProps {
  initialData?: Partial<CreateTechInput>;
  onSubmit: (data: CreateTechInput) => void;
  onCancel: () => void;
}

export function TechForm({ initialData, onSubmit, onCancel }: TechFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTechInput>({
    resolver: zodResolver(
      TechSchema.omit({ id: true, createdAt: true, updatedAt: true }),
    ),
    defaultValues: initialData,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 rounded-lg border border-(--color-border) bg-(--color-card) p-6"
    >
      <Text variant="h3" className="mb-2">
        {initialData ? "Editar Tecnologia" : "Nova Tecnologia"}
      </Text>

      <div className="flex flex-col gap-1">
        <Text variant="label">Nome</Text>
        <input
          {...register("name")}
          className="rounded border border-(--color-border) bg-(--color-bg) p-2 text-(--color-text) focus:ring-2 focus:ring-(--color-primary) focus:outline-none"
        />
        {errors.name && (
          <Text variant="span" className="text-sm text-red-500">
            {errors.name.message}
          </Text>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <Text variant="label">Nível</Text>
        <select
          {...register("nivel")}
          className="rounded border border-(--color-border) bg-(--color-bg) p-2 text-(--color-text) focus:ring-2 focus:ring-(--color-primary) focus:outline-none"
        >
          <option value="junior">Junior</option>
          <option value="mid">Mid</option>
          <option value="senior">Senior</option>
          <option value="stack">Stack</option>
        </select>
        {errors.nivel && (
          <Text variant="span" className="text-sm text-red-500">
            {errors.nivel.message}
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
  );
}
