// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'buefy/lib/buefy.css'
import Vue from 'vue'
import Buefy from 'buefy'
import Rx from 'rxjs'
import VueRx from 'vue-rx'
import App from './App'

Vue.use(Buefy)
Vue.use(VueRx, Rx)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
