import { Outlet } from "react-router";
import type { ReactElement } from "react";
import { Suspense } from "react";

// We don't lazy load layouts for now (Also, because of an ESLint error)
import AuthLayout from "@/layouts/AuthLayout.tsx";

// TODO: Add a beautiful lading

export function PublicApp(): ReactElement {
  return (
    <AuthLayout>
      <Suspense fallback={<div>Loading ...</div>}>
        <Outlet />
      </Suspense>
    </AuthLayout>
  );
}
