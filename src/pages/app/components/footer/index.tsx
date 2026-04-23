import { Text } from '@/components';
import { footerItems } from '@/data/contact';

export function CustomFooter() {
  return (
    <footer className="relative mt-24 border-t bg-[color-mix(in_srgb,#000000_15%,transparent)]">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-1/2 h-100 w-200 -translate-x-1/2 rounded-full bg-[color-mix(in_srgb,var(--color-primary)_15%,transparent)] blur-[140px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
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
                  className="shadow-[0_10px_30px_color-mix(in_srgb,var(--color-primary)_40%, transparent)] inline-flex items-center justify-center rounded-lg bg-[linear-gradient(to-right,var(--color-primary),var(--color-secondary))] px-5 py-3 font-medium text-white transition-all hover:scale-[1.03]">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-2 text-sm text-[color-mix(in_srgb,var(--color-text)_60%,transparent)] md:text-right">
            <Text>© {new Date().getFullYear()} Allan Kewvin Scain</Text>

            <Text>Builded with React, Vite, TypeScript e Tailwind.</Text>

            <div className="bg-[color-mix(in_srgb,var(--color-bg)_90%,transparent) mt-3 inline-flex rounded-full border bg-[color-mix(in_srgb,var(--color-text)_15%,transparent)] px-3 py-1 text-[color-mix(in_srgb,var(--color-text)_65%,transparent)] md:ml-auto">
              Front-end Engeener • Performance • UX
            </div>
          </div>
        </div>

        <Text className="mt-14 border-t bg-[color-mix(in_srgb,var(--color-text)_15%,transparent)] py-6 text-center text-xs">
          Nothing changes by just waiting. Everything changes when you work for
          it.
        </Text>
      </div>
    </footer>
  );
}
