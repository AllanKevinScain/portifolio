import { Input, Textarea } from "@/components";
import { Title } from "./_title";

export function FooterSection() {
  return (
    <>
      <Title
        title="Configuração do Rodapé"
        description="Redes sociais, contato e direitos autorais."
      />
      <div className="flex flex-col gap-2">
        <Input
          label="Título à convite"
          name="cta_title"
          placeholder="Digite seu título aqui"
          helperText="Este título será apresentado a quem acessar seu portifólio como um convite de trabalho"
        />
        <Textarea
          label="Descrição do convite"
          name="cta_description"
          placeholder="Digite sua descrição"
          helperText="Uma frase que chame a atenção do recrutador"
        />
        <Input
          label="Frase motivacional"
          name="tech_stack_footer"
          placeholder="Digite a frase aqui"
          helperText="Frase que você gosta, relacionado ao trabalho"
        />
        <Input
          label="Email"
          name="contact.email"
          placeholder="Digite seu e-mail"
        />
        <Input
          label="Linkedin"
          name="contact.social_media.linkedin"
          placeholder="Seu perfil"
        />
        <Input
          label="Instagram"
          name="contact.social_media.instagram"
          placeholder="Seu perfil"
        />
        <Input
          label="Github"
          name="contact.social_media.github"
          placeholder="Seu perfil"
        />
        <Input
          label="Google"
          name="contact.social_media.google"
          placeholder="Sua empresa do google"
        />
      </div>
    </>
  );
}
