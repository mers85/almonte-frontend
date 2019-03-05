<template>
  <div class="colums is-mobile">
    <div class="column is-three-fifths is-offset-one-fifth">
      <h3 class="title is-3">{{ msg }}</h3>
      <p>Ha pasado un año desde que Skynet tomó conciencia de sí misma llevando
         a cabo una ofensiva masiva contra los seres humanos.
        La única forma de ganar esta guerra es organizando la resistencia,
        y para ello tenemos que saber con cuantas hermandades contamos para el dia del salto.</p>
      <p>
        Hermanos si estáis viendo esto, es que sois la resistencia!!
      </p>
      <div class="column is-three-fifths is-offset-one-fifth">
        <router-link :to="{ name: 'brotherhood-register' }" class="button is-primary">Registra tu simpecado</router-link>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomepageMessage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
