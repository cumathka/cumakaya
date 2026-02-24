import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  base: "/", // özel domain kullanıyorsan bu olmalı
  build: {
    outDir: "docs", 
    emptyOutDir: true,
  },
});