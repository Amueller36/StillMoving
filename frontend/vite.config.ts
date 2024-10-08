import { fileURLToPath, URL } from 'node:url'
import dotenv from 'dotenv'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  base: '/StillMoving/',
  server: {
    port: Number(process.env.VITE_FRONTEND_PORT) || 3000
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
