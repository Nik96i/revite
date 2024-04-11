import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface AuthStore {
  token: string | null;
  isLoggedIn: () => boolean;
  login: (token: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      token: null,

      // Getters
      isLoggedIn: () => get().token !== null,

      // Actions
      login: (token: string) => {
        set(() => ({ token }));
      },
      logout: () => {
        set(() => ({ token: null }));
      },
    }),
    {
      name: "authStore",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useAuthStore;
