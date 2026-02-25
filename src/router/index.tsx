import { RootLayout } from "@/layouts";
import { AppPage, LoadingPage, MultiStepPage, SocialLoginPage } from "@/pages";
import AboutMePage from "@/pages/about-me";
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
      {
        path: "/about-me",
        Component: AboutMePage,
      },
    ],
  },
]);
