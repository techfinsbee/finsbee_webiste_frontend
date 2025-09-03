// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // listen on 0.0.0.0 (needed for tunnels)
    // If you use ngrok, either allow all or put your exact subdomain
    // allowedHosts: true,
    allowedHosts: ['localhost', '.ngrok-free.app'], // or 'your-subdomain.ngrok-free.app'
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,          // harmless for http; useful if target is self-signed https
        // rewrite: (path) => path, // keep /api prefix (your backend expects /api/...)
      },
      // Optional: if you test webhook endpoints via the browser
      '/webhooks': {
        target: 'http://localhost:8000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
