import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Multi_Theme_App/', // 👈 must match subfolder path in repo
  plugins: [react()],
});
