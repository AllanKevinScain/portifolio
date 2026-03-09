import { RootLayout } from "@/layouts";
import { AppPage, LoadingPage, NotFoundPage } from "@/pages";
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
    ],
  },
]);
