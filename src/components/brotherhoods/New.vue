<template>
  <div class="container">
    <div class="columns is-mobile">
      <div class="column is-half is-offset-one-quarter has-text-justified ">
        <p class="title is-3 is-spaced">Registra tu Hermandad</p>
      </div>
    </div>
    <form v-on:submit.prevent="create" accept-charset="UTF-8" class="form">
      <form-brotherhood ref='form'></form-brotherhood>
    </form>
  </div>
</template>

<script>
import FormBrotherhood from './_Form.vue'

export default {
  components: {
    'form-brotherhood': FormBrotherhood
  },
  /*
  mounted: function() {
    this.$store.dispatch('MapStore/new')
  },
  */
  methods: {
    create: function () {
      this.$store.dispatch('BrotherhoodStore/create', this.$refs.form.brotherhood).then(
        response => {
          console.log('llega')
          setTimeout(() =>
            this.$router.push({ name: 'home' })
          , 1000)
        }
      )
    }
  }
}
</script>
