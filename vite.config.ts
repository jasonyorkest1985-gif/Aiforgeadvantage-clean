import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // This is the "kill switch" for the 'client' folder error
  root: './', 
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})