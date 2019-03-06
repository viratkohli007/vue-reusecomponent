// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Multiselect from 'vue-multi-select'
import 'vue-multi-select/dist/lib/vue-multi-select.min.css'

Vue.config.productionTip = false
// register globally
 Vue.component("multi-select", Multiselect);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

