import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages project site is served from /om-patel-portfolio/
export default defineConfig({
  base: "/om-patel-portfolio/",
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false
  }
});
