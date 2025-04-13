import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: true,
    port: 5173,
    open: true,
    hmr: {
      overlay: true,
    },
  },
  preview: {
    port: 5173,
    open: true,
  },
});
