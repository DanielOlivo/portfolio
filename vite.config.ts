import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import tsConfigPaths from 'vite-tsconfig-paths'

// https://vite.dev/config/
export default defineConfig({
  build: {
    // emptyOutDir: true,
    // lib: {
    //   entry: 'src/main.tsx',
    //   formats: ['cjs', 'es']
    // }
  },
  plugins: [
    
    react(),
  ],
})
