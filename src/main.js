import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import elementui from 'element-ui';
import * as echarts from 'echarts';
Vue.use(elementui)
Vue.use(echarts)
Vue.prototype.$echart = echarts
Vue.config.productionTip = false
import 'normalize.css/normalize.css'
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss' // global css
import common from '@/utils/common.js'
Vue.use(common)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
