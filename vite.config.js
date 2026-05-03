import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * GitHub Pages:
 * - Pour un repo utilisateur Antgst.github.io, gardez base: "/".
 * - Pour un repo projet, lancez le build avec VITE_BASE_PATH="/nom-du-repo/".
 */
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || "/",
});
