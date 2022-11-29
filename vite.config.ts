import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        /*
        引入var.scss全局预定义变量，
        如果引入多个文件，
        可以使用
        '@import "@/assets/scss/globalVariable1.scss";@import "@/assets/scss/globalVariable2.scss";'
        这种格式
         */
        additionalData: '@import "src/assets/scss/globalVariable.scss";'
      }
    }
  },
  resolve: {
    alias: {
      "@":resolve(__dirname,"/src"),
      "@asserts": resolve(__dirname,"/src/asserts"),
      '@components':resolve(__dirname,'/src/components'),
      '@api':resolve(__dirname,'/src/api')
    }
  },
})
