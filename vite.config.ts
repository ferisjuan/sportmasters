import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '.',
  root: 'src',
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
    }
  },
  build: {
    emptyOutDir: true,
    outDir: "../build",
    sourcemap: true,
    // rollupOptions: {
    //   input: {
    //     login: resolve(__dirname, 'pages/**/*.tsx'),
    //   },
    //   external: ['react', 'react-dom', 'vite', 'vite-tsconfig-paths'],
    // }
  },
  plugins: [react(), tsconfigPaths()]
})
