import { TextReveal } from "@/components";

export const Apresentation: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 lg:flex-row">
      <div className="flex flex-col gap-4">
        <TextReveal className="text-2xl font-thin" index="1">
          Fala tu!
        </TextReveal>
        <TextReveal className="text-4xl font-normal" index="2">
          Sou um desenvolvedor FullStack,
        </TextReveal>
        <TextReveal className="text-3xl font-extrabold" index="3">
          ao seu dispor..
        </TextReveal>
      </div>
      <img
        className="w-auto h-auto border rounded-tr-[30px] rounded-bl-[30px]"
        src="/funnny_character.jpg"
        alt="my-gif"
      />
    </div>
  );
};
