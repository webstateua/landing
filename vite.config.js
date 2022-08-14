import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath, URL} from "url";

export default defineConfig({
  plugins: [vue()],
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: "all",
      },
    },
  },
  build: {
    rollupOptions: {
      input: {
        app: './index.html', // default
      },
    },
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  resolve:  {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/main.scss";`
      }
    }
  },
  server: {
    host: true
  }
})
