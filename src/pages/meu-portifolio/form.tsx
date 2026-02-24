import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FeaturesSection,
  FooterSection,
  HeaderSection,
  ProjectsSection,
  ServicesSection,
} from "./components";
import { twMerge } from "tailwind-merge";
import { Button } from "@/components";
import { generatePortfolioPDF } from "@/utils";
import { useTheme } from "@/hooks";
import { useUser } from "@clerk/clerk-react";
import { FormPortifolioContext } from "@/providers/form/context";

const sections = [
  { id: 0, title: "Cabeçalho" },
  { id: 1, title: "Diferenciais" },
  { id: 2, title: "Projetos" },
  { id: 3, title: "Serviços" },
  { id: 4, title: "Rodapé" },
];

export function Form() {
  const { getAllValues, formsState } = useContext(FormPortifolioContext);

  const { theme } = useTheme();
  const { user } = useUser();

  const [step, setStep] = useState(0);

  function disableByInteraction() {
    const isDirtyFooter = formsState["footer"]?.formState.isDirty;
    const isDirtyDifferentials =
      formsState["differentials_section"]?.formState.isDirty;
    const isDirtyProfile = formsState["profile"]?.formState.isDirty;
    const isDirtyProjects = formsState["projects_section"]?.formState.isDirty;
    const isDirtyServices = formsState["services_section"]?.formState.isDirty;

    if (
      isDirtyProfile &&
      isDirtyDifferentials &&
      isDirtyProjects &&
      isDirtyServices &&
      isDirtyFooter
    )
      return [0, 1, 2, 3, 4, 5];
    if (
      isDirtyProfile &&
      isDirtyDifferentials &&
      isDirtyProjects &&
      isDirtyServices
    )
      return [0, 1, 2, 3, 4];
    if (isDirtyProfile && isDirtyDifferentials && isDirtyProjects)
      return [0, 1, 2, 3];
    if (isDirtyProfile && isDirtyDifferentials) return [0, 1, 2];
    if (isDirtyProfile) return [0, 1];

    return [0];
  }

  async function nextStep() {
    if (step < sections.length - 1) {
      setStep(step + 1);
    } else {
      const allValues = getAllValues();
      console.log("🚀 ~ nextStep ~ allValues:", allValues);
      if (allValues) {
        await generatePortfolioPDF({
          infoForPortifolio: allValues,
          imageUrl: user?.imageUrl,
          theme,
        });
      }
    }
  }

  function prevStep() {
    if (step > 0) {
      setStep(step - 1);
    }
  }

  if (!user) return null;

  return (
    <div
      className={twMerge(
        "min-h-screen transition-colors duration-300",
        "p-6 pt-24",
        "flex flex-col items-center",
        "bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-text)_10%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--color-text)_10%,transparent)_1px,transparent_1px)]",
        "bg-size-[28px_28px]",
      )}
    >
      <div className="flex gap-2 mb-8 flex-wrap justify-center">
        {sections.map((section, index) => {
          return (
            <Button.ghost
              key={section.id}
              disabled={disableByInteraction().includes(index)}
              onClick={() => setStep(index)}
              className={twMerge(
                "border border-[color-mix(in_srgb,var(--color-text)_15%,transparent)]",
                index === step &&
                  "bg-[color-mix(in_srgb,var(--color-primary)_20%,transparent)]",
                index === step &&
                  "border-[color-mix(in_srgb,var(--color-primary)_40%,transparent)]",
              )}
            >
              {section.title}
            </Button.ghost>
          );
        })}
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
            {step === 0 && (
              <HeaderSection fullName={user.fullName?.replace("_", " ")} />
            )}
            {step === 1 && <FeaturesSection />}
            {step === 2 && <ProjectsSection />}
            {step === 3 && <ServicesSection />}
            {step === 4 && (
              <FooterSection
                email={user.emailAddresses[0].emailAddress || ""}
                phone={
                  user.phoneNumbers.length > 0
                    ? user.phoneNumbers[0].phoneNumber
                    : ""
                }
              />
            )}
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-between mt-8">
          <Button.ghost onClick={prevStep} disabled={step === 0}>
            Voltar
          </Button.ghost>

          <Button.ghost onClick={nextStep}>
            {step === sections.length - 1 ? "Finalizar" : "Continuar"}
          </Button.ghost>
        </div>
      </div>
    </div>
  );
}
