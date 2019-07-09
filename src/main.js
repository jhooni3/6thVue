import Vue from 'vue'
import App from './App.vue'
import 'expose-loader?$!expose-loader?jQuery!jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import eventBus from './EventBus'
import store from './store/store'

import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })
Vue.config.productionTip = false
Vue.prototype = eventBus
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
