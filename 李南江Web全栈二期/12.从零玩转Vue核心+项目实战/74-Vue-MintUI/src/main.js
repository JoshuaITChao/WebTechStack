import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 完整引入
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
//
// Vue.use(MintUI)

// 按需引入
import { Button } from 'mint-ui';

Vue.component(Button.name, Button)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
