import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import PickPage from "./pages/PickPage.jsx";
import SelectPage from "./pages/SelectPage.jsx";
import ConfirmPage from "./pages/ConfirmPage.jsx";
import FinishingPage from "./pages/finishingPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/select",
    element: <SelectPage />,
  },
  {
    path: "/pickpage",
    element: <PickPage />,
  },
  {
    path: "/finishing",
    element: <FinishingPage />,
  },
  {
    path: "/confirm",
    element: <ConfirmPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
