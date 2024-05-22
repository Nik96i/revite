import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from "node:url"

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version)
  },
  resolve: {
    // alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }]
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    },
  },
  plugins: [react()],
})
