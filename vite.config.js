import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/liviali-portfolio/",
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["react-icons"],
      output: {
        globals: {
          "react-icons": "ReactIcons",
        },
      },
    },
  },
  assetsInclude: ["**/*.glb"],
});
