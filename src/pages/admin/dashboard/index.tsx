import { Text } from "@/components";
import { Button } from "@/components/button";
import { useAuth } from "@/hooks";
import { Section } from "./components/section";

export function DashboardPage() {
  const { logout } = useAuth();

  return (
    <div className="mx-auto max-w-7xl px-6 pt-25">
      <header className="mb-8 flex items-center justify-between">
        <Text variant="h1" className="text-3xl font-bold text-(--color-text)">
          Dashboard Admin
        </Text>
        <Button.outline onClick={logout}>Sair</Button.outline>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Section
          name="Projetos"
          description="Gerencie os projetos exibidos no portfólio."
          path="/admin/projects"
        />
        <Section
          name="Tecnologias"
          description="Edite suas habilidades e tecnologias."
          path="/admin/techs"
        />
        <Section
          name="Diferenciais"
          description="Altere os diferenciais do seu trabalho."
          path="/admin/differentials"
        />
        <Section
          name="Eventos e Trabalhos"
          description="Gerencie sua experiência profissional."
          path="/admin/works"
        />
      </div>
    </div>
  );
}
