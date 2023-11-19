// 此文件运行在浏览器中
import { createSSRApp } from 'vue'
import { root } from './vueApp.js'
// Vue 的服务端渲染 API 位于 `vue/server-renderer` 路径下

const app = createSSRApp(root)

app.mount('#app')