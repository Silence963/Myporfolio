/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Myporfolio/',
  define: {
    'import.meta.env.BASE_URL': JSON.stringify('/Myporfolio/')
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
}) 