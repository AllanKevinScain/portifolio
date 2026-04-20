import { Text } from "@/components";
import { Button } from "@/components/button";
import { useAuth } from "@/hooks";
import { Section } from "./section";

export function DashboardPage() {
  const { logout } = useAuth();

  return (
    <div className="max-w-7xl mx-auto px-6 pt-25">
      <header className="flex justify-between items-center mb-8">
        <Text variant="h1" className="text-3xl font-bold text-(--color-text)">
          Dashboard Admin
        </Text>
        <Button.outline onClick={logout}>Sair</Button.outline>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Section name="Projetos" description="" />
        <Section name="Tecnologias" description="" />
        <Section name="Diferenciais" description="" />
        <Section name="Eventos e Trabalhos" description="" />
      </div>
    </div>
  );
}
