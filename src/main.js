import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
import 'normalize.css/normalize.css'
import '@/styles/index.scss' // global css
import common from '@/utils/common.js'
Vue.use(common)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
