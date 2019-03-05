<template>
  <div class="container">
    <div class="columns is-mobile">
      <div class="column is-half is-offset-one-quarter has-text-justified ">
        <p class="title is-3 is-spaced">Editando Hermandad: {{brotherhood.name}}</p>
      </div>
    </div>
    <form v-on:submit.prevent="update" accept-charset="UTF-8" class="form">
      <div class="columns is-mobile">
        <div class="column is-half is-offset-one-quarter">
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" v-model="brotherhood.name" placeholder="Nombre de la Hermandad">
              <span class="icon is-small is-left">
                <font-awesome-icon icon="users" />
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" v-model="brotherhood.contact_email" type="email" placeholder="Correo electrónico">
              <span class="icon is-small is-left">
                <font-awesome-icon icon="envelope" />
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left">
              <input class="input" v-model="brotherhood.foundation_date" type="date" placeholder="Fecha de creación de la Hermandad">
              <span class="icon is-small is-left">
                <font-awesome-icon icon="calendar" />
              </span>
            </p>
          </div>

          <div class="field is-grouped">
            <p class="control">
              <input type="submit" class="button is-primary" value="Enviar"/>
            </p>
            <p class="control">
              <router-link :to="{ name: 'brotherhoods' }" class="button has-text-grey"> Cancelar </router-link>
            </p>
          </div>

        </div>
      </div>
    </form>
  </div>
</template>

<script>
import FormBrotherhood from './_Form.vue';

export default {
  components: {
    'form-brotherhood': FormBrotherhood
  },

  data: function() {
    return this.$store.state.BrotherhoodStore;
  },

  mounted: function() {
    this.$store.dispatch('BrotherhoodStore/show', this.$route.params.id)
  },

  methods: {
    update: function() {
      this.$store.dispatch('BrotherhoodStore/update', this.brotherhood).then(
        ()=> {
          this.$router.push({ name: 'brotherhoods' })
        }
      )
    }
  }
}
</script>
