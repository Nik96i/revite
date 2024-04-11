import type { RouteObject } from "react-router-dom";

// App
import { PublicApp } from "@/routes/public/publicApp.tsx";

// Views
import { RegisterView } from "@/routes/public/publicViews.tsx";
import { LoginView } from "@/routes/public/publicViews.tsx";

// TODO: Add a 404 page

export const publicRoutes: RouteObject[] = [
  {
    element: <PublicApp />,
    children: [
      {
        path: "/auth",
        children: [
          {
            path: "register",
            element: <RegisterView />,
          },
          {
            path: "login",
            element: <LoginView />,
          },
        ],
      },
    ],
  },
];
