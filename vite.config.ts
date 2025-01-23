import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['paths-js'], // Si une dépendance spécifique pose problème
    esbuildOptions: {
      // Cette option permet de gérer des dépendances qui ne respectent pas l'ESM
      target: 'esnext',
    },
  },
  build: {
    target: 'esnext', // Assurez-vous que Vite cible ES Modules modernes

    rollupOptions: {
      output: {
        format: 'esm', // Assurez-vous que la sortie est dans un format compatible
      }
    }
  }
})
