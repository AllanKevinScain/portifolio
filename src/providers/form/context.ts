import type { InfoForPortifolioType } from "@/types";
import { createContext } from "react";
import type { FieldValues, UseFormReturn } from "react-hook-form";

type FormPortifolioContextType = {
  formsState: Record<string, UseFormReturn<FieldValues> | null>;
  registerForm: (name: string, methods: unknown) => void;
  getAllValues: () => InfoForPortifolioType | undefined;
};

export const FormPortifolioContext = createContext<FormPortifolioContextType>({
  formsState: {} as Record<string, UseFormReturn<FieldValues> | null>,
  registerForm: () => {},
  getAllValues: () => undefined,
});
