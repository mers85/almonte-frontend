<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/escudo-matriz.png">
    <HomepageMessage msg="Pontificia Real e Ilustre Hermandad del Matriz de
     Nuestra Señora Rocío de Almonte"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomepageMessage from '@/components/HomepageMessage.vue'

export default {
  name: 'home',
  components: {
    HomepageMessage
  }
}
</script>
