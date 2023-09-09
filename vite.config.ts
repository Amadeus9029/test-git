import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    hmr: true
  },
  plugins: [
    vue(),
    viteMockServe({
      mockPath: './src/mock/source' // 解析刚刚user.ts的位置
    })
  ]
})
