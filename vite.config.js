import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:
  {
    allowedHosts: [
      "da59-2409-40f4-4024-a98c-f04c-c011-ffb7-3553.ngrok-free.app",
    ],
    
  }
})
