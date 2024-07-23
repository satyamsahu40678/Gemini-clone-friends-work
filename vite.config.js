import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['@google/generative-ai'], // Externalize the module
    },
  },
  server: {
    host: '0.0.0.0', // Ensure the server is accessible from outside
    port: parseInt(import.meta.env.VITE_PORT, 10) || 4173, // Use VITE_PORT environment variable or default to 4173
  },
});
