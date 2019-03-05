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

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/', '/thanks', '/register']
  const authRequired = !publicPages.includes(to.path)
  const loggedIn = localStorage.getItem('user_credentials')

  if (authRequired && !loggedIn) {
    return next({
      path: '/login',
      query: { returnUrl: to.path }
    })
  }

  next()
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
