import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import('vite').UserConfig

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    sourcemap: true,
  },
})
