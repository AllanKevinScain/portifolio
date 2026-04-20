import { RootLayout } from "@/layouts";
import { AppPage, DashboardPage, LoadingPage, LoginPage, NotFoundPage } from "@/pages";
import AboutMePage from "@/pages/about-me";
import { createBrowserRouter } from "react-router";
import { ProtectedRoute } from "./protected-route";

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    loader: LoadingPage,
    ErrorBoundary: NotFoundPage,
    children: [
      {
        path: "/",
        Component: AppPage,
      },
      {
        path: "/about-me",
        Component: AboutMePage,
      },
      {
        path: "/login",
        Component: LoginPage,
      },
      {
        path: "/admin",
        Component: ProtectedRoute,
        children: [
          {
            index: true,
            Component: DashboardPage,
          },
        ],
      },
    ],
  },
]);
