import Vue from 'vue'
import App from './App.vue'
import store from "./store";
import router from "./router";


/*Vue-CLI4.0版本*/
/**
  Vue.config.productionTip = false

  new Vue({
    render: h => h(App),
  }).$mount('#app')
 */


new Vue({
  el: "#app",
  store: store,
  router: router,
  render: c => c(App)
});
