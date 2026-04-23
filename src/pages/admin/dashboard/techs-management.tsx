import { Button, Skeleton } from "@/components";
import { queryKeys } from "@/hooks";
import { techService } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { HeaderCreateItem } from "./components";
import { TechForm } from "./components/forms/tecnology";
import { SectionItems } from "./components/section-items";

export function TechsManagementPage() {
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const {
    data: techs = [],
    isPending,
    isLoading,
  } = useQuery({
    queryKey: queryKeys.techs,
    queryFn: techService.getAll,
    select: (data) =>
      data.map((tech) => ({
        id: tech.id!,
        name: tech.name,
        description: tech.description,
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
          title="Gerenciar Tecnologias"
          buttonDescription="Nova Tecnologia"
        />
      </header>

      {isFormOpen && (
        <div className="mb-10">
          <TechForm
            initialData={
              editingId
                ? { name: "React", description: "Descrição" }
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
        name="Tecnologias Cadastradas"
        items={techs}
        onEdit={handleEdit}
      />
    </div>
  );
}
