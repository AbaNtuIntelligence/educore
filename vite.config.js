import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({

server: {
  port: 5173,
  proxy: {
    "/catalogue-image": {
      target: "https://educorestationery-hygiene-ppe.co.za",
      changeOrigin: true,
      rewrite: (path) =>
        path.replace(/^\/catalogue-image/, "")
    }
  }
},

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
        printers: resolve(__dirname, "printers.html"),
        educational: resolve(__dirname, "educational.html"),
        fireSafety: resolve(__dirname, "fire-safety.html"),
        officeAccessories: resolve(__dirname, "office-accessories.html"),
        safetySignage: resolve(__dirname, "safety-signage.html"),
        security: resolve(__dirname, "security.html"),
        hospital: resolve(__dirname, "hospital.html"),
        product: resolve(__dirname, "product.html"),
        quote: resolve(__dirname, "quote.html"),
        about: resolve(__dirname, "about.html"),
        contact: resolve(__dirname, "contact.html"),
        download: resolve(__dirname, "download.html"),
      },
    },
  },
});

