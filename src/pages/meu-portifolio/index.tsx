import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FeaturesSection,
  FooterSection,
  HeaderSection,
  ProjectsSection,
} from "./components";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components";

const sections = [
  { id: 0, title: "Cabeçalho" },
  { id: 1, title: "Diferenciais" },
  { id: 2, title: "Projetos" },
  { id: 3, title: "Rodapé" },
];

export function MultiStepPage() {
  const [step, setStep] = useState(0);

  function nextStep() {
    if (step < sections.length - 1) {
      setStep(step + 1);
    }
  }

  function prevStep() {
    if (step > 0) {
      setStep(step - 1);
    }
  }

  return (
    <div
      className={twMerge(
        "min-h-screen flex flex-col items-center p-6 transition-colors duration-300",
        "bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-text)_10%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--color-text)_10%,transparent)_1px,transparent_1px)]",
        "bg-size-[28px_28px]",
      )}
    >
      <div className="flex gap-2 mb-8 flex-wrap justify-center">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => setStep(index)}
            className={twMerge(
              "px-4 py-2 rounded-xl text-sm font-medium transition-all",
              index === step
                ? "bg-[color-mix(in_srgb,var(--color-primary)_20%,transparent)]"
                : "bg-transparent",
              "border",
              index === step
                ? "border-[color-mix(in_srgb,var(--color-primary)_40%,transparent)]"
                : "border-[color-mix(in_srgb,var(--color-text)_15%,transparent)]",
            )}
          >
            {section.title}
          </button>
        ))}
      </div>

      <div
        className={twMerge(
          "w-full max-w-2xl p-8 rounded-2xl backdrop-blur-md transition-all",
          "bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)]",
          "border border-[color-mix(in_srgb,var(--color-primary)_30%,transparent)]",
        )}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {step === 0 && <HeaderSection />}
            {step === 1 && <FeaturesSection />}
            {step === 2 && <ProjectsSection />}
            {step === 3 && <FooterSection />}
          </motion.div>
        </AnimatePresence>

        {/* Botões */}
        <div className="flex justify-between mt-8">
          <Button.ghost onClick={prevStep} disabled={step === 0}>
            Voltar
          </Button.ghost>

          <Button.outline
            onClick={nextStep}
            disabled={step === sections.length - 1}
            className="text-black font-normal"
          >
            Continuar
          </Button.outline>
        </div>
      </div>
    </div>
  );
}
