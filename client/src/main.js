import Vue from 'vue'
import Axios from 'axios'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

Vue.prototype.$http = Axios.create({
  baseURL: 'http://localhost:3000/'
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
