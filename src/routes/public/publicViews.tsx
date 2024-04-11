import { lazyImport } from "@/utils/lazyImport.ts";

// Pages
export const { Register: RegisterView } = lazyImport(async () => import("@/views/auth"), "Register");

export const { Login: LoginView } = lazyImport(async () => import("@/views/auth"), "Login");
