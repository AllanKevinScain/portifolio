export const Apresentation: React.FC = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 lg:flex-row">
      <div className="flex flex-col gap-4">
        <h3 className="text-2xl font-thin text-text-secondary-color">
          Ola, sou!
        </h3>
        <h1 className="text-4xl font-normal text-text-secondary-color">
          um&nbsp;
          <b className="text-text-primary-color">desenvolvedor de Software</b>
        </h1>
        <h2 className="text-3xl font-extrabold text-text-secondary-color">
          e vou te ajudar com seu projeto
        </h2>
      </div>
      <img
        className="w-auto h-auto border border-border-secondary-color rounded-tr-[30px] rounded-bl-[30px]"
        src="/funnny_character.jpg"
        alt="my-gif"
      />
    </div>
  );
};
