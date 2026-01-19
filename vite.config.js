import { defineConfig } from 'vite'

export default defineConfig({
  // PENTING: Ganti 'NAMA-REPO-KAMU' sesuai nama repository lo di GitHub
  // Misal repo lo: https://github.com/rokan/my-portfolio
  // Maka isinya: base: '/my-portfolio/',
  base: '/porto/', 
  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
})