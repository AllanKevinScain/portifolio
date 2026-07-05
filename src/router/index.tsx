import { RootLayout } from "@/layouts";
import { LoadingPage, NotFoundPage } from "@/pages";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router";

const AppPage = lazy(() =>
  import("@/pages/app").then((m) => ({ default: m.AppPage })),
);
const AboutMePage = lazy(() => import("@/pages/about-me"));

const PrivacyPage = lazy(() =>
  import("@/pages/privacy").then((m) => ({ default: m.PrivacyPage })),
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
        path: "/privacy",
        element: (
          <Suspense fallback={<LoadingPage />}>
            <PrivacyPage />
          </Suspense>
        ),
      },
    ],
  },
]);
