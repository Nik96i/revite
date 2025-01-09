import { createBrowserRouter, RouterProvider } from "react-router";
import useAuthStore from "@/stores/useAuthStore.ts";
import { publicRoutes } from "@/routes/public/publicRoutes.tsx";
import { protectedRoutes } from "@/routes/protected/protectedRoutes.tsx";
import type { ReactElement } from "react";
import type { RouteObject } from "react-router";

// Views
// TODO: We can make them lazy
import { Home } from "@/views/home";
import { NotFound } from "@/views/notFound";

export function AppRoutes(): ReactElement {
  const { isLoggedIn } = useAuthStore();

  const commonRoutes = [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "*",
      element: <NotFound />
    }
  ];

  const routes: RouteObject[] = isLoggedIn() ? protectedRoutes : publicRoutes;

  const appRouter = createBrowserRouter([...routes, ...commonRoutes]);

  return <RouterProvider router={appRouter} />;
}
