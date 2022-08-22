import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: './tmp/bundle-visualizer.html',
    }),
  ],
  build: {
    target: 'esnext',
  },
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
});
