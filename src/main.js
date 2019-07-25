import Vue from 'vue'
import App from './App.vue'
import 'expose-loader?$!expose-loader?jQuery!jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import eventBus from './EventBus'
import store from './store/store'
import router from './router/router'

Vue.config.productionTip = false
Vue.prototype = eventBus
new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
