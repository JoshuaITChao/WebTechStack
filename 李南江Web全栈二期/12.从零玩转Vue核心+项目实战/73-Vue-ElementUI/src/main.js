import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 一.全量导入 elementUI 和 elementUI 的 CSS 文件
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

// .告诉 Vue ,我们需要在项目中使用 elementUI
// Vue.use(ElementUI)


// 二.按需导入
import { Row, Button, Switch } from "element-ui"
Vue.use(Row)
Vue.use(Button)
Vue.use(Switch)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
