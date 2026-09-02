import { optionsTheme } from "@/data/theme";
import { useTheme } from "@/hooks";
import type { ThemeType } from "@/types";
import { MdLightMode } from "react-icons/md";
import { Button, Popover } from "safira-ui/react";
import { twMerge } from "tailwind-merge";

interface ThemeMenurops {
  items: { label: string; value: ThemeType; icon?: Element }[];
}

export function ThemeMenu(props: ThemeMenurops) {
  const { items } = props;
  const { setTheme, theme } = useTheme();
  const popoverId = "theme-menu";

  const currentIcon = optionsTheme[theme].icon || <MdLightMode size={22} />;

  return (
    <Popover
      id={popoverId}
      placement="bottom"
      title="Selecionar tema"
      closeLabel="Fechar menu de temas"
      label={
        <>
          <span aria-hidden="true">{currentIcon}</span>
          <span className="sf-visually-hidden">Selecionar tema</span>
        </>
      }
      className={twMerge(
        'w-64 overflow-hidden rounded-2xl border p-6',
        'border-[color-mix(in_srgb,var(--color-text)_15%,transparent)]',
        'bg-[linear-gradient(to_bottom,color-mix(in_srgb,var(--color-bg)_95%,transparent),color-mix(in_srgb,var(--color-bg)_85%,transparent))]',
        'shadow-[0_20px_60px_color-mix(in_srgb,var(--color-primary)_30%,transparent)]',
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,color-mix(in_srgb,var(--color-text)_10%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--color-text)_10%,transparent)_1px,transparent_1px)] bg-size-[28px_28px] opacity-20" />
      <nav className="scroll-div relative flex max-h-75 flex-col gap-4 overflow-auto" aria-label="Temas disponíveis">
        {items.map((item) => (
          <Button
            key={item.label}
            variant="unstyled"
            type="button"
            aria-pressed={theme === item.value}
            popoverTarget={popoverId}
            popoverTargetAction="hide"
            onClick={() => setTheme(item.value)}
            className={twMerge(
              'w-full justify-start rounded-lg px-4 py-2 font-medium text-(--color-text) transition-all hover:bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)] hover:text-(--color-primary)',
              theme === item.value &&
              'bg-[color-mix(in_srgb,var(--color-primary)_10%,transparent)]',
            )}
          >
            {item.label}
          </Button>
        ))}
      </nav>
    </Popover>
  );
}
