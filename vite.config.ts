import { defineConfig } from 'vite'
import { resolve } from "path"
import react from '@vitejs/plugin-react'
const env = process.env.NODE_ENV
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    },
  },
  base: env === 'production' ? '/project/react-music/' : '', // 配置是因为部署需要在对应的路径下访问
})
