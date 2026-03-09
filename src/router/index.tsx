import { RootLayout } from "@/layouts";
import { AppPage, LoadingPage, NotFoundPage } from "@/pages";
import AboutMePage from "@/pages/about-me";
import { createBrowserRouter } from "react-router";

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
    ],
  },
]);
