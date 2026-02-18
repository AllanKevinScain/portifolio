import { Button, Input, Textarea } from "@/components";
import { RiApps2AddLine } from "react-icons/ri";
import { FaTrashArrowUp } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useListForm } from "@/hooks";
import { Title } from "./_title";

type DiferentialsType = {
  id: string;
  title: string;
  description: string;
};

export function FeaturesSection() {
  const { formValue, handleAdd, handleRemove } = useListForm<DiferentialsType>({
    initialValue: [{ id: crypto.randomUUID(), title: "", description: "" }],
  });

  return (
    <>
      <Title
        title="Seus Diferenciais"
        description="Destaque seus principais pontos fortes."
      />
      <div className="flex flex-col gap-12 md:gap-4">
        {formValue.map((item, index) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              key={item.id}
              className="flex flex-col gap-2 md:gap-4 md:flex-row"
            >
              <Input
                placeholder="Título"
                value={item.title[index]}
                className="md:w-[30%]"
              />
              <Input
                classNameInput="hidden md:flex"
                placeholder="Descrição"
                value={item.description[index]}
              />
              <Textarea
                className="flex md:hidden"
                placeholder="Descrição"
                value={item.description[index]}
              />
              <Button.solid
                className="w-full flex justify-center md:w-fit"
                disabled={index === 0 && formValue.length === 1}
                onClick={() => handleRemove(item.id)}
              >
                <FaTrashArrowUp size={22} />
              </Button.solid>
            </motion.div>
          );
        })}
        {formValue.length >= 5 && (
          <span className="text-xs mt-1 opacity-70 text-(--color-text)">
            Voce só pode adicionar 5 pontos diferenciais
          </span>
        )}
        {formValue.length <= 5 && (
          <div className="flex w-full justify-end">
            <Button.solid
              onClick={() =>
                handleAdd({
                  id: crypto.randomUUID(),
                  title: "",
                  description: "",
                })
              }
              className="w-full flex justify-center md:w-fit"
            >
              <span className="md:hidden">Adicionar</span>
              <RiApps2AddLine size={22} />
            </Button.solid>
          </div>
        )}
      </div>
    </>
  );
}
