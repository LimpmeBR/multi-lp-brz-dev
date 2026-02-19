import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'react-router-dom',
        '@supabase/supabase-js',
        '@tanstack/react-query',
        'framer-motion',
        'lucide-react',
        'sonner',
        'embla-carousel-react',
        'browser-image-compression',
        'class-variance-authority',
        'clsx',
        'tailwind-merge',
        'date-fns',
        'react-hook-form',
        '@hookform/resolvers',
        'zod',
        /^@radix-ui\/.*/,
        /^@dnd-kit\/.*/,
      ],
    },
    outDir: 'dist',
    sourcemap: true,
  },
});
