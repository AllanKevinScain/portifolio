import { RootLayout } from "@/layouts";
import { LoadingPage, NotFoundPage } from "@/pages";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";
import { ProtectedRoute } from "./protected-route";

const AppPage = lazy(() =>
  import("@/pages/app").then((m) => ({ default: m.AppPage })),
);
const AboutMePage = lazy(() => import("@/pages/about-me"));
const LoginPage = lazy(() =>
  import("@/pages/admin/login").then((m) => ({ default: m.LoginPage })),
);
const DashboardPage = lazy(() =>
  import("@/pages/admin/dashboard").then((m) => ({ default: m.DashboardPage })),
);

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    loader: LoadingPage,
    ErrorBoundary: NotFoundPage,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <AppPage />
          </Suspense>
        ),
      },
      {
        path: "/about-me",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <AboutMePage />
          </Suspense>
        ),
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: "/admin",
        Component: ProtectedRoute,
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<LoadingPage />}>
                <DashboardPage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);
