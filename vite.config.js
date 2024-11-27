import { defineConfig } from 'vite'
<<<<<<< HEAD
import { fileURLToPath } from 'url'
import vue from '@vitejs/plugin-vue'
=======
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from 'url'
>>>>>>> main

// https://vite.dev/config/
export default defineConfig({
<<<<<<< HEAD
  plugins: [vue()],
=======
  plugins: [react()],
>>>>>>> main
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
