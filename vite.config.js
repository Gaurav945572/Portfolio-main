import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-tilt/dist/tilt'],
    },
    rollupOptions: {
      external: ['react-tilt/dist/ReactTilt.default'],
    }
  },
});
