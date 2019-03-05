<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> /
      <router-link to="/brotherhoods" >Admin</router-link> <span v-if="isLogged === true"> / </span>
      <logout v-if="isLogged === true">Logout</logout>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Logout from './components/auth/Logout'
import { EventBus } from './_helpers/event-bus'

export default {
  data: function () {
    return {
      isLogged: this.checkIfIsLogged()
    }
  },
  components: {
    'logout': Logout
  },
  methods: {
    checkIfIsLogged () {
      let token = localStorage.getItem('user_credentials')
      if (token) {
        return true
      } else {
        return false
      }
    }
  },
  created () {
    EventBus.$on('logged', () => {
      this.isLogged = this.checkIfIsLogged()
    })
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
