import { Button, Text } from "@/components";
import { queryKeys } from "@/hooks";
import type { CreateTechInput } from "@/schemas/tech.schema";
import { TechSchema } from "@/schemas/tech.schema";
import { techService } from "@/services";
import type { ModalProps } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface HandleTechModalProps extends ModalProps {
  id: string;
  onSubmit: (data: CreateTechInput) => void;
}

const defaultValues: CreateTechInput = {
  name: "",
  description: "",
  nivel: "junior",
};

export function HandleTechModal(props: HandleTechModalProps) {
  const { id, onSubmit, onClose, isOpen } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateTechInput>({
    resolver: zodResolver(TechSchema.omit({ id: true, createdAt: true, updatedAt: true })),
    defaultValues,
  });

  const tech = useQuery({
    queryKey: queryKeys.tech(id),
    queryFn: () => techService.getById(id),
    enabled: !!id,
  });

  useEffect(() => {
    if (id && tech.data) {
      reset(tech.data);
    }
  }, [id, tech.data, reset]);

  return (
    <dialog
      open={isOpen}
      className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full max-w-lg flex-col gap-4 rounded-2xl border border-(--color-border) bg-(--color-bg) p-6 shadow-2xl"
      >
        <Text variant="h3" className="mb-2">
          {id ? "Editar Tecnologia" : "Nova Tecnologia"}
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
            rows={4}
            className="resize-none rounded border border-(--color-border) bg-(--color-bg) p-2 text-(--color-text) focus:ring-2 focus:ring-(--color-primary) focus:outline-none"
          />
          {errors.description && (
            <Text variant="span" className="text-sm text-red-500">
              {errors.description.message}
            </Text>
          )}
        </div>

        <div className="mt-4 flex justify-end gap-3">
          <Button.outline
            type="button"
            onClick={() => {
              onClose();
              reset(defaultValues);
            }}
          >
            Cancelar
          </Button.outline>
          <Button.solid type="submit">Salvar</Button.solid>
        </div>
      </form>
    </dialog>
  );
}
