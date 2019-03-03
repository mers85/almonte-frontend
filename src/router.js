import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Admin from './views/Admin.vue'
import BrotherhoodNew from './components/brotherhoods/New.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/admin', name: 'admin', component: Admin },
    { path: '/register', name: 'brotherhood-register', component: BrotherhoodNew }

  ]
})
