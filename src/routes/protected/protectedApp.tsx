import { Outlet } from "react-router";
import type { ReactElement } from "react";
import { Suspense } from "react";

// We don't lazy load layouts for now (Also, because of an ESLint error)
import AppLayout from "@/layouts/AppLayout.tsx";

// TODO: Add a beautiful lading

export function ProtectedApp(): ReactElement {
  return (
    <AppLayout>
      <Suspense fallback={<div>Loading ...</div>}>
        <Outlet />
      </Suspense>
    </AppLayout>
  );
}
