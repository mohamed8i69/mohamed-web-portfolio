import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  root: path.resolve(rootDir, "client"),

  base: "/",

  plugins: [
    react(),
    tailwindcss(),
  ],

  build: {
    outDir: path.resolve(rootDir, "dist"),
    emptyOutDir: true,
  },
});
