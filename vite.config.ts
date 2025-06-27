import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  build: {
    assetsInlineLimit: 4096, // 小于4KB的图片转为base64
    assetsDir: "assets", // 静态资源输出目录
  },
});
