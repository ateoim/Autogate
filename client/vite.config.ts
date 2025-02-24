import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import themePlugin from '@replit/vite-plugin-shadcn-theme-json';
import runtimeErrorModal from '@replit/vite-plugin-runtime-error-modal';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    themePlugin(),
    runtimeErrorModal()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  // Optimize serving of static assets
  server: {
    port: 5000,
    host: true
  }
});
