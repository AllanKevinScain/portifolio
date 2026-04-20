import { Text } from "@/components";
import { footerItems } from "@/data/contact";
import { twMerge } from "tailwind-merge";

export function CustomFooter() {
  return (
    <footer
      className={twMerge(
        "relative mt-24 border-t",
        "bg-[color-mix(in_srgb,#000000_15%,transparent)]",
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
            <Text variant="h2">Let's talk</Text>

            <Text className="mt-3">
              Call me! That way I can help you transform our ideas into a solid
              and enjoyable experience.
            </Text>

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
            <Text>© {new Date().getFullYear()} Allan Kewvin Scain</Text>

            <Text>Builded with React, Vite, TypeScript e Tailwind.</Text>

            <div
              className={twMerge(
                "inline-flex md:ml-auto mt-3 px-3 py-1 rounded-full border",
                "bg-[color-mix(in_srgb,var(--color-text)_15%,transparent)]",
                "bg-[color-mix(in_srgb,var(--color-bg)_90%,transparent)",
                "text-[color-mix(in_srgb,var(--color-text)_65%,transparent)]",
              )}
            >
              Front-end Engeener • Performance • UX
            </div>
          </div>
        </div>

        <Text
          className={twMerge(
            "mt-14 py-6 border-t text-xs text-center",
            "bg-[color-mix(in_srgb,var(--color-text)_15%,transparent)]",
          )}
        >
          Nothing changes by just waiting. Everything changes when you work for
          it.
        </Text>
      </div>
    </footer>
  );
}
