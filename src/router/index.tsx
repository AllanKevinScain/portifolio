import { RootLayout } from "@/layouts";
import { AppPage, LoadingPage, MultiStepPage, SocialLoginPage } from "@/pages";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    loader: LoadingPage,
    children: [
      {
        path: "/",
        Component: AppPage,
      },
      {
        path: "/create-portifolio",
        Component: MultiStepPage,
      },
      {
        path: "/login",
        Component: SocialLoginPage,
      },
    ],
  },
]);
