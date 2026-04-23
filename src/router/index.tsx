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
const ProjectsManagementPage = lazy(() =>
  import("@/pages/admin/dashboard/projects-management").then((m) => ({
    default: m.ProjectsManagementPage,
  })),
);
const TechsManagementPage = lazy(() =>
  import("@/pages/admin/dashboard/techs-management").then((m) => ({
    default: m.TechsManagementPage,
  })),
);
const DifferentialsManagementPage = lazy(() =>
  import("@/pages/admin/dashboard/differentials-management").then((m) => ({
    default: m.DifferentialsManagementPage,
  })),
);
const WorksManagementPage = lazy(() =>
  import("@/pages/admin/dashboard/works-management").then((m) => ({
    default: m.WorksManagementPage,
  })),
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
          {
            path: "projects",
            element: (
              <Suspense fallback={<LoadingPage />}>
                <ProjectsManagementPage />
              </Suspense>
            ),
          },
          {
            path: "techs",
            element: (
              <Suspense fallback={<LoadingPage />}>
                <TechsManagementPage />
              </Suspense>
            ),
          },
          {
            path: "differentials",
            element: (
              <Suspense fallback={<LoadingPage />}>
                <DifferentialsManagementPage />
              </Suspense>
            ),
          },
          {
            path: "works",
            element: (
              <Suspense fallback={<LoadingPage />}>
                <WorksManagementPage />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);
