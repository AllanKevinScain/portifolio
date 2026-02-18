import { Input } from "@/components";

export function HeaderSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Configuração do Cabeçalho</h2>
      <p className="opacity-70 mb-4">Defina:</p>
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
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
    </div>
  );
}
