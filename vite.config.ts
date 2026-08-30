import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: parseInt(process.env.PORT ?? "8999"),
    proxy: {
      "/api": {
        target: process.env.VITE_API_URL ?? "http://localhost:8800",
        changeOrigin: true,
      },
    },
  },
  plugins: [react()], // componentTagger removed
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
