import Vue from 'vue'
import VueRouter from 'vue-router'
import SuiVue from 'semantic-ui-vue'
import App from './App.vue'

import routes from './routes'

import 'semantic-ui-css/semantic.min.css';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(SuiVue)

const router = new VueRouter({mode: 'history', routes})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
