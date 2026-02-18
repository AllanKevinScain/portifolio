import { Input } from "@/components";
import { Title } from "./_title";

export function HeaderSection() {
  return (
    <>
      <Title title="Configuração do Cabeçalho" description="Defina:" />
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 md:flex-row">
          <Input
            label="Nome completo"
            name="name"
            placeholder="Digite seu nome aqui"
          />
          <Input
            label="Profissão"
            name="role"
            placeholder="Digite seu profissão aqui"
          />
        </div>

        <Input label="Título" name="title" placeholder="Digite o título aqui" />
        <Input
          label="Status"
          name="status"
          placeholder="Digite seu status aqui"
        />
        <Input
          label="Descrição"
          name="headline"
          placeholder="Digite a descricao aqui"
        />
      </div>
    </>
  );
}
