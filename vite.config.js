import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@functions": fileURLToPath(new URL("./src/functions", import.meta.url)),
      "@namespaces": fileURLToPath(
        new URL("./src/namespaces", import.meta.url),
      ),
    },
  },
});
