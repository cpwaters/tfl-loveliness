import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config/
export default defineConfig({
  // base: 'https://magical-genie-b7081c.netlify.app/',
  // root: '/',
  publicDir: 'public',
  plugins: [reactRefresh()]
})
