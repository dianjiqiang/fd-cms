import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { cjs2esmVitePlugin } from 'cjs2esmodule'
import { join } from 'path'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    cjs2esmVitePlugin(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  server: {
    proxy: {
      '^/api': {
        target: 'http://106.52.69.24:7890', // 后端服务实际地址
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
      assets: join(__dirname, 'src', 'assets'),
      components: join(__dirname, 'src', 'components'),
      views: join(__dirname, 'src', 'views')
    }
  }
})
