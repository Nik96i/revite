import type { RouteObject } from "react-router-dom";

// App
import { ProtectedApp } from "@/routes/protected/protectedApp.tsx";

// Views
import { UsersView } from "@/routes/protected/protectedViews.tsx";

// TODO: Add a 404 page

export const protectedRoutes: RouteObject[] = [
  {
    element: <ProtectedApp />,
    children: [
      {
        path: "/users",
        element: <UsersView />
      }
    ]
  }
];
