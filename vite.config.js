import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Absolute base. Public assets and photos are referenced through
  // import.meta.env.BASE_URL, which a relative base cannot resolve correctly on
  // nested client-side routes such as /products.
  //
  // Deploy at a domain root: leave as '/'.
  // Deploy under a subfolder (e.g. XAMPP at /ANB/): set VITE_BASE=/ANB/
  base: process.env.VITE_BASE || '/',
  plugins: [react(), tailwindcss()],
})
