import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        catalogue: resolve(__dirname, "catalogue.html"),
        stationery: resolve(__dirname, "stationery.html"),
        furniture: resolve(__dirname, "furniture.html"),
        ppe: resolve(__dirname, "ppe.html"),
        cleaning: resolve(__dirname, "cleaning.html"),
      },
    },
  },
});