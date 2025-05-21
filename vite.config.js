import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5000,
    host: "0.0.0.0",
    allowedHosts:
      "c84a55fa-6091-47f4-ab74-514043ad2277-00-1k3qp574lajgo.worf.replit.dev",
  },
});
