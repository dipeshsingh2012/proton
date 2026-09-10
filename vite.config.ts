import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
        'tokens/index': path.resolve(__dirname, 'src/tokens/index.ts'),
        'react/index': path.resolve(__dirname, 'src/react/index.ts'),
        'vue/index': path.resolve(__dirname, 'src/vue/index.ts'),
      },
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        /^@mui\/material/,
        /^@emotion\//,
      ],
      output: {
        exports: 'named',
      },
    },
  },
});
