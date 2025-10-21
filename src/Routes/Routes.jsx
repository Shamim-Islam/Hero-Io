import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AllApps from "../Pages/AllApps/AllApps";
import AppDetails from "../Pages/AppDetails/AppDetails";
import MyInstallation from "../Pages/MyInstallation/MyInstallation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: async () => fetch("/apps.json"),
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
      {
        path: "/apps",
        loader: async () => fetch("/apps.json"),
        element: <AllApps></AllApps>,
      },
      {
        path: "/AppDetails/:id",
        element: <AppDetails></AppDetails>,
        loader: async () => fetch("/apps.json"),
      },
      {
        path: "/installation",
        element: <MyInstallation></MyInstallation>,
        loader: async () => fetch("/apps.json"),
      },
    ],
  },
]);
