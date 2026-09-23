import path from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const rootDir = path.dirname(fileURLToPath(import.meta.url));


export default defineConfig({
  base: "/mohamed-web-portfolio/",
  plugins: [react(), tailwindcss()],
});
