<template>

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
          <router-link :to="{ name: 'home' }" class="button has-text-grey"> Cancelar </router-link>
        </p>
      </div>

    </div>
  </div>
</template>

<script>

export default {
    data: function() {
      return this.$store.state.BrotherhoodStore;
    },
}
</script>
