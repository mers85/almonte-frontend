<template>
  <span>
    <a class="logout" @click="logout">Logout</a>
  </span>
</template>

<script>
import HTTP from '../../http-common'
import { EventBus } from '../../_helpers/event-bus'

export default {
  methods: {
    logout () {
      window.localStorage.removeItem('user_credentials')
      HTTP.defaults.headers.common['Authorization'] = undefined
      EventBus.$emit('logged', 'User logged')
      this.$router.push({'name': 'home'})
    }
  }
}
</script>
