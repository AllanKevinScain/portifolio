import { optionsTheme } from "@/data/theme";
import { useTheme } from "@/hooks";
import { twMerge } from "tailwind-merge";
import { Button } from "../button";
import { ThemeMenu } from "../theme-menu";
import { FlipIcon } from "./flip-icon";
import { useNavitems } from "./useNavItems";

interface HeaderProps {
  navItems?: { href: string; label: string }[];
}

export function Header(props: HeaderProps) {
  const { navItems = [] } = props;

  const { theme } = useTheme();
  const { open, scrolled, toggle } = useNavitems();

  return (
    <header
      className={twMerge(
        "z-50 fixed w-full backdrop-blur-md transition-all",
        scrolled ? "bg-(--color-bg) shadow-md" : "bg-(--color-bg)/80",
      )}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-4 text-(--color-primary) text-2xl font-bold">
          <FlipIcon />
          <a href="/">Allan Kevin Scain</a>
        </div>

        <nav className="hidden gap-8 md:flex md:items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-(--color-text) hover:text-(--color-primary) transition-colors"
            >
              {item.label}
            </a>
          ))}
          <ThemeMenu
            items={Object.values(optionsTheme)
              .map(({ icon: _, ...rest }) => rest)
              .sort((a, _) => (a.value === theme ? -1 : 1))}
          />
        </nav>

        <Button.ghost
          onClick={toggle}
          className="text-(--color-primary) text-2xl md:hidden"
          aria-label="Abrir menu"
        >
          ☰
        </Button.ghost>
      </div>

      {open && (
        <div className="md:hidden border-(--color-border) border-t bg-(--color-secondary)">
          <nav className="px-6 py-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={toggle}
                className="block px-3 py-2 rounded-md text-(--color-text) text-sm font-medium transition-all hover:bg-(--color-bg) hover:text-(--color-primary)"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
