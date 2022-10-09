/*
 * @Author: dovelin 823548797@qq.com
 * @Date: 2022-07-06 19:49:12
 * @LastEditors: dovelin 823548797@qq.com
 * @LastEditTime: 2022-09-19 00:02:59
 * @FilePath: \myblog\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './assets/scss/main.scss'
import utils from "./utils/install_prototype"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import { createI18n } from 'vue-i18n'
// import  messages from "./assets/js/i18n"
// const i18n = createI18n({
//     // something vue-i18n options here ...
//     locale: 'ja', // set locale
//     fallbackLocale: 'en', // set fallback locale
//     messages, // set locale messages
//     // If you need to specify other options, you can set other options
//     // ...
//   })
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router).use(ElementPlus).use(store).use(utils).mount('#app')

