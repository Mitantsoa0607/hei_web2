import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path";
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find : '@',
        replacement: path.resolve(__dirname,'src'),
      },
      {
        find: '@layout',
        replacement: path.resolve(__dirname,'src/components/layout'),
      },
      {
        find: '@partials',
        replacement: path.resolve(__dirname,'src/components/partials'),
      },
    ]
  }
})