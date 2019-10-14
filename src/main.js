import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vueclazyload from 'vue-clazy-load'

Vue.config.productionTip = false
Vue.use(Vueclazyload)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
