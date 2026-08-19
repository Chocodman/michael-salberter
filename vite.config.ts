import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    publicDir: 'public',
    assetsInclude: [
      '**/*.png',
      '**/*.jpg',
      '**/*.jpeg',
      '**/*.gif',
      '**/*.svg',
      '**/*.webp',
      '**/*.mp4',
      '**/*.PNG',
      '**/*.JPG',
      '**/*.JPEG',
      '**/*.MP4',
    ],
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      copyPublicDir: true,
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

