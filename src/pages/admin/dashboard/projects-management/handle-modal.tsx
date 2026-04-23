import { Button, Text } from "@/components";
import { queryKeys } from "@/hooks";
import type { CreateProjectInput } from "@/schemas/project.schema";
import { ProjectSchema } from "@/schemas/project.schema";
import { projectService } from "@/services";
import type { ModalProps } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface HandleProjectModalProps extends ModalProps {
  id: string;
  onSubmit: (data: CreateProjectInput) => void;
}

const defaultValues = {
  demo: "",
  description: "",
  repository: "",
  title: "",
};

export function HandleProjectModal(props: HandleProjectModalProps) {
  const { id, onSubmit, onClose, isOpen } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CreateProjectInput>({
    resolver: zodResolver(ProjectSchema.omit({ id: true, createdAt: true, updatedAt: true })),
    defaultValues,
  });

  const project = useQuery({
    queryKey: queryKeys.project(id),
    queryFn: () => projectService.getById(id),
    enabled: !!id,
  });

  useEffect(() => {
    if (id && project.data) {
      reset(project.data);
    }
  }, [id, project.data, reset]);

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
          {id ? "Editar Projeto" : "Novo Projeto"}
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
            rows={4}
            className="resize-none rounded border border-(--color-border) bg-(--color-bg) p-2 text-(--color-text) focus:ring-2 focus:ring-(--color-primary) focus:outline-none"
          />
          {errors.description && (
            <Text variant="span" className="text-sm text-red-500">
              {errors.description.message}
            </Text>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Text variant="label">URL do Repositório</Text>
          <input
            {...register("repository")}
            className="rounded border border-(--color-border) bg-(--color-bg) p-2 text-(--color-text) focus:ring-2 focus:ring-(--color-primary) focus:outline-none"
          />
          {errors.repository && (
            <Text variant="span" className="text-sm text-red-500">
              {errors.repository.message}
            </Text>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <Text variant="label">URL de Demo</Text>
          <input
            {...register("demo")}
            className="rounded border border-(--color-border) bg-(--color-bg) p-2 text-(--color-text) focus:ring-2 focus:ring-(--color-primary) focus:outline-none"
          />
          {errors.demo && (
            <Text variant="span" className="text-sm text-red-500">
              {errors.demo.message}
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
