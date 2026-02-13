import { motion } from "framer-motion";
import { CardTech } from "./card";
import { CtaLink } from "../cta-link";
import { twMerge } from "tailwind-merge";

export function Banner() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span
          className={twMerge(
            "mb-4 px-4 py-1 inline-block text-xs uppercase tracking-widest rounded-full border",
            "text-(--color-primary)",
            "border-[color-mix(in_srgb,var(--color-primary)_30%,transparent)]",
            "bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)]",
          )}
        >
          Disponível para novos projetos
        </span>

        <h1
          className={twMerge(
            "text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight",
            "text-(--color-text)",
          )}
        >
          Olá, eu sou{" "}
          <span className="bg-linear-to-r from-(--color-primary) to-(--color-secondary) bg-clip-text text-transparent">
            Allan Scain
          </span>
          <br />
          Desenvolvedor Front-end
        </h1>

        <p
          className={twMerge(
            "mt-6 text-lg max-w-xl",
            "text-[color-mix(in_srgb,var(--color-text)_70%,transparent)]",
          )}
        >
          Crio interfaces modernas, performáticas e escaláveis com foco em
          experiência do usuário e arquitetura sólida.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <CtaLink variant="solid" label="Ver projetos" href="#projetos" />
          <CtaLink
            variant="outline"
            label="Enviar e-mail"
            href="mailto:seu@email.com"
          />
        </div>
      </motion.div>

      <CardTech />
    </section>
  );
}
