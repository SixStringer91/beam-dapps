import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import('vite').UserConfig

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    sourcemap: true,
  },
  server: {
    port: 5000,
    strictPort: true, // throw error if port in use
  }
})
