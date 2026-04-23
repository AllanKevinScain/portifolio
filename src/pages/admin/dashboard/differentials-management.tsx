import { Button, Skeleton } from "@/components";
import { queryKeys } from "@/hooks";
import { differentialService } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { HeaderCreateItem } from "./components";
import { DifferentialForm } from "./components/forms/differential";
import { SectionItems } from "./components/section-items";

export function DifferentialsManagementPage() {
  const navigate = useNavigate();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const {
    data: differentials = [],
    isPending,
    isLoading,
  } = useQuery({
    queryKey: queryKeys.differentials,
    queryFn: differentialService.getAll,
    select: (data) =>
      data.map((differential) => ({
        id: differential.id!,
        title: differential.title,
        description: differential.description,
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
          title="Gerenciar Diferenciais"
          buttonDescription="Novo Diferencial"
        />
      </header>

      {isFormOpen && (
        <div className="mb-10">
          <DifferentialForm
            initialData={
              editingId
                ? { title: "Diferencial Exemplo", description: "Descrição" }
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
        name="Diferenciais Cadastrados"
        items={differentials}
        onEdit={handleEdit}
      />
    </div>
  );
}
