import { footerItems } from "@/data/contact";
import { twMerge } from "tailwind-merge";

export function Rodape() {
  return (
    <footer
      className={twMerge(
        "relative mt-24 border-t",
        "bg-[color-mix(in_srgb,var(--color-text)_15%,transparent)]",
      )}
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className={twMerge(
            "absolute left-1/2 -translate-x-1/2 bottom-0 w-200 h-100 blur-[140px] rounded-full",
            "bg-[color-mix(in_srgb,var(--color-primary)_15%,transparent)]",
          )}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3
              className={twMerge("text-2xl font-bold", "text-(--color-text)")}
            >
              Vamos conversar?
            </h3>

            <p
              className={twMerge(
                "mt-3 max-w-md",
                "text-[color-mix(in_srgb,var(--color-text)_70%,transparent)]",
              )}
            >
              Me chame para falarmos sobre seu projeto, produto ou ideia. Posso
              ajudar a transformar isso em uma experiência sólida.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              {footerItems.map((item) => (
                <a
                  key={item.label}
                  {...item}
                  className={twMerge(
                    "inline-flex items-center justify-center px-5 py-3 rounded-lg font-medium transition-all hover:scale-[1.03]",
                    "bg-[linear-gradient(to-right,var(--color-primary),var(--color-secondary))]",
                    "text-white",
                    "shadow-[0_10px_30px_color-mix(in_srgb,var(--color-primary)_40%, transparent)]",
                  )}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div
            className={twMerge(
              "text-sm md:text-right space-y-2",
              "text-[color-mix(in_srgb,var(--color-text)_60%,transparent)]",
            )}
          >
            <p>
              © {new Date().getFullYear()} Allan Scain. Todos os direitos
              reservados.
            </p>

            <p>Construído com React, Vite, TypeScript e Tailwind.</p>

            <div
              className={twMerge(
                "inline-flex md:ml-auto mt-3 px-3 py-1 rounded-full border",
                "bg-[color-mix(in_srgb,var(--color-text)_15%,transparent)]",
                "bg-[color-mix(in_srgb,var(--color-surface)_90%,transparent)",
                "text-[color-mix(in_srgb,var(--color-text)_65%,transparent)]",
              )}
            >
              Front-end • Performance • UX
            </div>
          </div>
        </div>

        <div
          className={twMerge(
            "mt-14 py-6 border-t text-xs text-center",
            "bg-[color-mix(in_srgb,var(--color-text)_15%,transparent)]",
            "text-[color-mix(in_srgb,var(--color-text)_50%,transparent)]",
          )}
        >
          Interface focada em performance, acessibilidade e experiência.
        </div>
      </div>
    </footer>
  );
}
