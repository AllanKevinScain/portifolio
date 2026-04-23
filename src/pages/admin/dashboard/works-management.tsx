import { Button, Skeleton } from "@/components";
import { queryKeys } from "@/hooks";
import { workService } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { HeaderCreateItem } from "./components";
import { WorkForm } from "./components/forms/work";
import { SectionItems } from "./components/section-items";

export function WorksManagementPage() {
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const {
    data: worksAndEvents = [],
    isPending,
    isLoading,
  } = useQuery({
    queryKey: queryKeys.works,
    queryFn: workService.getAll,
    select: (data) =>
      data.map((work) => ({
        id: work.id!,
        title: work.title,
        description: work.description,
      })),
  });

  const handleAdd = () => {
    setEditingId(null);
    setIsFormOpen(true);
  };

  const handleEdit = (id: string) => {
    setEditingId(id);
    setIsFormOpen(true);
  };

  if (isPending || isLoading) {
    return <Skeleton />;
  }

  return (
    <div className="mx-auto max-w-7xl px-6 pt-25 pb-10">
      <header className="mb-8 flex flex-col gap-4">
        <Button.ghost onClick={() => navigate("/admin")}>
          <ArrowLeft size={20} />
          Voltar para o Dashboard
        </Button.ghost>

        <HeaderCreateItem
          handleAdd={handleAdd}
          title="Gerenciar Eventos e Trabalhos"
          buttonDescription="Novo Evento/Trabalho"
        />
      </header>

      {isFormOpen && (
        <div className="mb-10">
          <WorkForm
            initialData={
              editingId
                ? { title: "Trabalho Exemplo", description: "Descrição" }
                : undefined
            }
            onSubmit={(data) => {
              console.log("Submit", data);
              setIsFormOpen(false);
            }}
            onCancel={() => setIsFormOpen(false)}
          />
        </div>
      )}

      <SectionItems
        name="Eventos e Trabalhos Cadastrados"
        items={worksAndEvents}
        onEdit={handleEdit}
      />
    </div>
  );
}
