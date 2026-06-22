import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' para que funcione tanto en dominio propio como en subcarpeta (GitHub Pages)
export default defineConfig({
  base: '/',
  plugins: [react()],
})
