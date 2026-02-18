import React from "react";
import ReactDOM from "react-dom/client";
import { /* AppPage,  */ MultiStepPage } from "@/pages";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MultiStepPage />
    {/* <AppPage /> */}
  </React.StrictMode>,
);
