import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@css': fileURLToPath(new URL('./src/assets/css', import.meta.url)),
      '@img': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // 모든 scss 스타일 탑재 전에 이 파일을 자동으로 불러옵니다.
        additionalData: `@use "@/assets/css/_variables.scss" as *;`,
      },
    },
  },
});
