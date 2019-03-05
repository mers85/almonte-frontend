import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Thanks from './views/Thanks.vue'
import BrotherhoodIndex from './components/brotherhoods/Index.vue'
import BrotherhoodNew from './components/brotherhoods/New.vue'
import BrotherhoodEdit from './components/brotherhoods/Edit.vue'
import BrotherhoodShow from './components/brotherhoods/Show.vue'
import Login from './components/auth/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/thanks', name: 'thanks', component: Thanks },
    { path: '/brotherhoods', name: 'brotherhoods', component: BrotherhoodIndex },
    { path: '/register', name: 'brotherhood-register', component: BrotherhoodNew },
    { path: '/brotherhoods/:id/edit/', name: 'brotherhood-edit', component: BrotherhoodEdit },
    { path: '/brotherhoods/:id', name: 'brotherhood-show', component: BrotherhoodShow },
    { path: '/login', name: 'login', component: Login }

  ]
})
