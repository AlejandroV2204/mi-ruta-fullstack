import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,  // Puerto para el frontend
    proxy: {
      '/api': 'http://localhost:3000',  // Redirige las solicitudes API a localhost:3000
    },
  },
});
