import { useLocation } from "react-router";

import { Header } from "@/components";
import { appNavItems } from "@/data/app-header-nav-items";
import { Outlet } from "react-router";

export function RootLayout() {
  const { pathname } = useLocation();

  return (
    <div className="bg-(--color-bg)">
      <Header navItems={pathname === "/" ? appNavItems : []} />

      <main>
        <Outlet />
      </main>
    </div>
  );
}
