import { lazyImport } from "@/utils/lazyImport.ts";

// Views
export const { Users: UsersView } = lazyImport(async () => import("@/views/users"), "Users");
