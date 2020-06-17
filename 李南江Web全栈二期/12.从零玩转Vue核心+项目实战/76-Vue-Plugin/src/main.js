import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局组件
// import Loading from "./components/Loading"
// Vue.component(Loading.name, Loading)

// 注册组件
import Loading from "./plugin/loading/index"
// 注意点：如果想通过 use 的方式来注册组件，那么必须先将组件封装成插件
Vue.use(Loading, {
  title: '皇帝不急太监急'
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
