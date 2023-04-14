/// <reference types="vitest" />
/// <reference types="vitest/client" />

import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: resolve(__dirname, 'src/styles/variables.scss'),
          dest: 'public',
        },
        {
          src: resolve(__dirname, 'src/styles/theme.scss'),
          dest: 'public',
        },
      ],
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupTests.js'],
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.js'),
      name: 'Modyo widgets template react',
      fileName: '@modyo/modyo-widgets-template-react',
    },
  },
});
