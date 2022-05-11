import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig((({command, mode}) => ({
  build: {
    emptyOutDir: true,
    sourcemap: mode === 'development' ? 'inline' : false,
  },
  envPrefix: 'REACT_APP_',
  resolve: {
    alias: {
      '~': resolve(__dirname, './src'),
    }
  },
  optimizeDeps: {
    include: [
      '@firebase/auth',
      '@firebase/app',
      '@firebase/firestore',
      '@mantine/core',
      '@mantine/hooks',
      '@mantine/notifications',
      '@mantine/styles',
      'firebase/app',
      'firebase/auth',
      'firebase/firestore',
      'react-icons/ai',
      'react-icons/bs',
      'react-icons/fc',
    ]
  },
  preview: {
    host: true,
    open: true,
    port: 8080,
  },
  plugins: [react()],
  server: {
    host: true,
  },
})))
