import { twMerge } from "tailwind-merge";
import { useNavitems } from "./useNavItems";
import { ThemeMenu } from "../theme-menu";
import { MdLogout } from "react-icons/md";
import { Button } from "../button";
import { SignOutButton, useSession } from "@clerk/clerk-react";
import { optionsTheme } from "@/data/theme";
import { useLocation } from "react-router";
import { useTheme } from "@/hooks";

interface HeaderProps {
  navItems?: { href: string; label: string }[];
}

export function Header(props: HeaderProps) {
  const { navItems = [] } = props;

  const { pathname } = useLocation();
  const { isSignedIn, session } = useSession();

  const { theme } = useTheme();
  const { open, scrolled, toggle } = useNavitems();

  return (
    <header
      className={twMerge(
        "z-50 fixed w-full backdrop-blur-md transition-all",
        scrolled ? "bg-(--color-bg) shadow-md" : "bg-(--color-bg)/80",
      )}
    >
      <div
        className={twMerge(
          "flex items-center justify-between",
          "max-w-7xl mx-auto px-6 py-4",
        )}
      >
        <div className="text-(--color-primary) text-2xl font-bold">
          <a href="/">
            {isSignedIn && pathname.includes("/create")
              ? session.user.fullName
              : "Allan Kevin Scain"}
          </a>
        </div>

        <nav className={twMerge("hidden gap-8", "md:flex md:items-center")}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={twMerge(
                "text-(--color-text)",
                "hover:text-(--color-primary)",
                "transition-colors",
              )}
            >
              {item.label}
            </a>
          ))}
          {isSignedIn && (
            <SignOutButton>
              <Button.ghost>
                <MdLogout size={22} />
              </Button.ghost>
            </SignOutButton>
          )}
          <ThemeMenu
            items={Object.values(optionsTheme)
              .map(({ icon: _, ...rest }) => rest)
              .sort((a, _) => (a.value === theme ? -1 : 1))}
          />
        </nav>

        <button
          onClick={toggle}
          className={twMerge("text-(--color-primary) text-2xl md:hidden")}
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div
          className={twMerge(
            "md:hidden border-t",
            "border-(--color-border)",
            "bg-(--color-secondary)",
          )}
        >
          <nav className="px-6 py-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={toggle}
                className={twMerge(
                  "block px-3 py-2 rounded-md text-sm font-medium",
                  "text-(--color-text)",
                  "hover:text-(--color-primary)",
                  "hover:bg-(--color-bg)",
                  "transition-all",
                )}
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
