import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { leadApiPlugin } from './server/vite-lead-api-plugin';

// https://vite.dev/config/
export default defineConfig({
  publicDir: 'Public',
  plugins: [
    react(),
    tailwindcss(),
    leadApiPlugin()
  ],
  optimizeDeps: {
    include: ['react', 'react-dom', 'motion/react', 'lucide-react']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (id.includes('motion')) return 'motion';
          if (id.includes('lucide-react')) return 'lucide';
          if (id.includes('react-dom') || id.includes('/react/')) return 'react-vendor';
        }
      }
    }
  },
  server: {
    port: 3000,
    host: true
  }
});
