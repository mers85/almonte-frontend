import Vue from 'vue'
import Vuex from 'vuex'
import BrotherhoodStore from './stores/brotherhood_store'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    BrotherhoodStore
  }
})

export default store
