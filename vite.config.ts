import { defineConfig, loadEnv } from "vite";
import type { ProxyOptions } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const proxyConfigs: Record<string, string | ProxyOptions> = {
    "/api/": {
      secure: false,
      target: env.VITE_DEV_SERVER,
      changeOrigin: true
    }
  };

  return {
    define: {
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version)
    },
    preview: {
      proxy: proxyConfigs
    },
    server: {
      proxy: proxyConfigs
    },
    resolve: {
      // alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }]
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    },
    plugins: [react()]
  };
});
