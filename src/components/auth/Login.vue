<template>
  <div class="login">
    <div class="column is-half is-offset-one-quarter has-text-justified ">
      <p class="title is-3 is-spaced">Login</p>
    </div>
    <p>{{ errors }}</p>
    <div class="columns is-mobile">
      <div class="column is-half is-offset-one-quarter">
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" v-model="username" placeholder="Usuario">
              <span class="icon is-small is-left">
                <font-awesome-icon icon="user" />
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="password" v-model="password" placeholder="Contraseña">
              <span class="icon is-small is-left">
                <font-awesome-icon icon="lock" />
              </span>
            </p>
          </div>

          <div class="field is-grouped">
            <p class="control">
              <input type="submit" @click="login" class="button is-primary" value="Enviar"/>
            </p>
            <p class="control">
              <router-link :to="{ name: 'home' }" class="button has-text-grey"> Cancelar </router-link>
            </p>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
import { HTTP } from '../../http-common'
import { EventBus } from '../../_helpers/event-bus'

export default {
  data () {
    return {
      username: undefined,
      password: undefined,
      errors: ""
    }
  },
  methods: {
    login () {
      window.localStorage.removeItem('user_credentials')
      if (this.username && this.password) {
        var self = this
        HTTP({
          method: 'get',
          url: '/brotherhoods/',
          auth: {
            username: this.username,
            password: this.password
          }
        })
        .then(response => {
          var apiKey = response.data.api_key
          var headers= 'Basic ' + this.username + ':' + this.password
          window.localStorage.setItem('user_credentials', headers)
          HTTP.defaults.headers.common['Authorization'] = headers
          EventBus.$emit('logged', 'User logged')
          this.$router.push({'name': 'admin'})
          console.log('success')
        })
        .catch(error => {
          console.log('error')
          this.errors = "error"
        })
      } else {
        console.log('Please enter a username and password.')
        this.errors = 'Please enter a username and password.'
      }
    }
  }
}
</script>
