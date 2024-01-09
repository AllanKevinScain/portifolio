import { CloneIcon, CodeTag, ScrollContainer, TextReveal } from "@/components";
import Image from "next/image";
import { Fragment } from "react";
import {
  FaGithubSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGitlab,
  FaLinkedin,
} from "react-icons/fa";

export default function Page() {
  const sections = [
    {
      id: "0",
      image: "/nextjs.png",
      title: "Curso de React.Js e Next.Js (nível intermediário e avançado)",
      description:
        "Curso de React.Js + Next.Js completo do básico ao avançado. Aprenda ReactJS, NextJS, Styled-Components, testes com Jest e Testing Library, Storybook, Server-Side Rendering e demais siglas (SSR, SSG, ISR, CSR, SPA, PWA, etc...) no front-end. Aprenda, também, Strapi para criarmos APIs de back-end. Vamos usar muitas ferramentas que não foram mencionadas nessa descrição, porém estou deixando uma breve explicação de cada uma das seções presentes no curso abaixo. Leia até o final e compreender melhor o que você vai aprender.",
      contentTextLink: "conhecer eu mesmo",
      urlLink:
        "https://www.udemy.com/share/104diw3@lP6gDAD-_MzmsbR1Uzex5kMqHmRLEumgjMlfjL61SXnZDIn62dCeXxMrExnxLNSK/",
    },
    {
      id: "1",
      image: "/nextjs.png",
      title: "Curso Web Frontend Fundamentos: HTML, CSS e JS + 10 Projetos",
      description:
        "Este curso abrangente as principais tecnologias para se tornar um programador ou programadora web front-end: HTML, CSS e Javascript.Este curso é a escolha perfeita para quem deseja aprender a criar sites modernos e responsivos, com um bom desempenho nos mecanismos de busca e acessibilidade para todos os usuários.",
      contentTextLink: "conhecer eu mesmo",
      urlLink:
        "https://www.udemy.com/share/101zbq3@TXiqcPw88IMuMiJ7VWQ1TAyhYNjn2ga-78sYlul2SN5cgQ-jBj2XHIdEgJdAfkkF/",
    },
    {
      id: "2",
      image: "/nextjs.png",
      title: "JavaScript - Curso COMPLETO com 6 Projetos REAIS [2024]",
      description:
        "Este é o Curso Completo de JavaScript com 6 projetos reais! Primeiro você aprenderá sobre a linguagem JavaScript desde o básico da estrutura, orientação a objetos e recursos avançados, depois como utilizá-la na prática construindo projetos reais passo a passo com dois especialistas em JavaScript que possuem mais de 10 anos de desenvolvimento Web e JavaScript.",
      contentTextLink: "conhecer eu mesmo",
      urlLink:
        "https://www.udemy.com/share/101tWe3@sVNy81r5n1llhVfH1zjEuIk_1jgZZABPh6-KlHYwy9lKqi93O7WxbZKQh9UUEnzi/",
    },
    {
      id: "3",
      image: "/nextjs.png",
      title: "Dicas e macetes de CSS. Entenda quando e porquê não funciona",
      description:
        "Este treinamento de CSS tem como objetivo ajudar os desenvolvedores web a evitar frustrações no desenvolvimento de seus projetos devido a erros comuns de CSS. Ao contrário de cursos tradicionais, que cobrem os conceitos básicos do CSS, este treinamento aborda dicas valiosas que ajudam a aumentar a proficiência na linguagem. O treinamento se concentra em mostrar 'efeitos colaterais' de determinadas regras de CSS, que muitas vezes podem passar despercebidos pelos desenvolvedores. Você aprenderá a identificar e corrigir erros comuns que podem resultar em resultados visuais inesperados em seu site. Este curso também não vai utilizar nenhuma ferramenta adicional como postCSS ou um pré-processador como LESS ou SASS. Fique tranquilo, a ideia é mostrar erros comuns que podem acontecer no seu dia-a-dia, independente de utilizar ou não uma ferramenta.",
      contentTextLink: "conhecer eu mesmo",
      urlLink:
        "https://www.udemy.com/share/103vgq3@3QJjwzAPGyZlz-IQdT0jMuqQkWrKiFJEsOQEPGw9HiG2b5V7xWFU6YbvgD-fYlDW/",
    },
  ];

  const socialIcons = [
    FaGithubSquare,
    FaFacebookSquare,
    FaInstagramSquare,
    FaGitlab,
    FaLinkedin,
  ];

  return (
    <Fragment>
      <main className="flex flex-col overflow-x-clip bg-gray-900 pb-[10%]">
        <div className="w-full h-screen flex justify-center items-center gap-8">
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
          <Image
            className="w-auto h-auto border rounded-tr-[30px] rounded-bl-[30px]"
            src="/funnny_character.jpg"
            alt="my-gif"
            width={500}
            height={500}
            blurDataURL="/error.jpg"
            placeholder="blur"
            priority
            quality={100}
          />
        </div>
        {sections.map((item, index) => {
          const { id, title, contentTextLink, description, image, urlLink } =
            item;
          return (
            <section key={id} className="px-[5%] py-[2%] w-full lg:px-[20%]">
              <ScrollContainer index={index}>
                <div className="flex flex-row w-full">
                  <div className="flex flex-col w-full gap-4">
                    <h1 className="text-green-900 text-2xl">{title}</h1>
                    <span className="text-gray-600 text-lg">{description}</span>
                    <a
                      className="bg-green-800 transition-all opacity-10 rounded-lg px-6 py-2 w-fit text-gray-300 text-md hover:text-white hover:bg-transparent hover:ring-[1px] hover:ring-green-700"
                      href={urlLink}
                    >
                      {contentTextLink}
                    </a>
                  </div>
                  <Image
                    className=" transition-all w-[400px] h-[300px] rounded-tr-[30px] rounded-bl-[30px] hover:rounded-none hover:rounded-tl-[30px] hover:rounded-br-[30px]"
                    src={image}
                    alt="my-gif"
                    width={500}
                    height={500}
                    blurDataURL="/error.jpg"
                    placeholder="blur"
                    priority
                    quality={100}
                  />
                </div>
              </ScrollContainer>
            </section>
          );
        })}
      </main>
      <footer className="flex flex-row justify-between bg-black h-[90px] px-6 py-4 animation-progress-footer">
        <CodeTag className="text-nowrap">©2024 Allan Kevin Scain</CodeTag>
        <div className="flex gap-4">
          {socialIcons.map((Icon) => (
            <CodeTag key={Icon.toString()}>
              <CloneIcon className="text-[25px] text-white">
                <Icon />
              </CloneIcon>
            </CodeTag>
          ))}
        </div>
      </footer>
    </Fragment>
  );
}
