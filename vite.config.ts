import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/SchoolMap/', // GitHubリポジトリ名を設定ins: [react()],
  plugins: [react()],
})
