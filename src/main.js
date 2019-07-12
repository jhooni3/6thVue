import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/store'

import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })
Vue.config.productionTip = false
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
