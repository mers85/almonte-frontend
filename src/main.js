import './../node_modules/bulma/css/bulma.css'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faCalendar, faUsers, faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faEnvelope, faCalendar, faUsers, faUser, faLock)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
