/// <reference types="vitest" />
/// <reference types="vitest/client" />

import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
