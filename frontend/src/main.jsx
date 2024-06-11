import React from "react";
import ReactDOM from "react-dom/client";
import { UserContextProvider } from "./context/userContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RgisterPage";
import App from "./App";
import Ouvrages from "./components/Ouvrages/Ouvrages";
import Profil from "./components/Profil/Profil";
import UpdateOuvrage from "./components/Ouvrages/UpdateOuvrage/UpdateOuvrage";
import DashboardPage from "./pages/DashbordPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Ouvrages />,
      },
      {
        path: "/ouvrage/update/:id",
        element: <UpdateOuvrage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/profil",
        element: <Profil />,
      },
      {
        path: "/dashboard",
        element: <DashboardPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </React.StrictMode>
);
