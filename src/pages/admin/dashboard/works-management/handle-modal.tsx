import { Button, Text } from "@/components";
import { queryKeys } from "@/hooks";
import type { CreateWorkInput } from "@/schemas/work.schema";
import { WorkSchema } from "@/schemas/work.schema";
import { workService } from "@/services";
import type { ModalProps } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface HandleWorkModalProps extends ModalProps {
  id: string;
  onSubmit: (data: CreateWorkInput) => void;
}

const defaultValues: CreateWorkInput = {
  title: "",
  description: "",
  image: "",
};

export function HandleWorkModal(props: HandleWorkModalProps) {
  const { id, onSubmit, onClose, isOpen } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateWorkInput>({
    resolver: zodResolver(WorkSchema.omit({ id: true, createdAt: true, updatedAt: true })),
    defaultValues,
  });

  const work = useQuery({
    queryKey: queryKeys.work(id),
    queryFn: () => workService.getById(id),
    enabled: !!id,
  });

  useEffect(() => {
    if (id && work.data) {
      reset(work.data);
    }
  }, [id, work.data, reset]);

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
          {id ? "Editar Evento/Trabalho" : "Novo Evento/Trabalho"}
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
          <Text variant="label">URL da Imagem (Opcional)</Text>
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
