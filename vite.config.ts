import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '',
  root: './',
  build: {
    emptyOutDir: true,
    outDir: "build"
  },
  plugins: [react(), tsconfigPaths()]
})
