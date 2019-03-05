<template>

       <div class="columns is-mobile">

         <div class="column is-half is-offset-one-quarter" >
           <div class="card">
             <div class="card-content">
               <div class="media">
                 <div class="media-left">
                   <figure class="image is-48x48">
                     <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                   </figure>
                 </div>
                 <div class="media-content">
                   <p class="subtitle is-6">Orden de salto# {{brotherhood.jump_order}}</p>
                   <p class="title is-5 has-text-left">{{brotherhood.name}}</p>
                   <p class="subtitle is-6">contacto: {{brotherhood.contact_email}}</p>
                   <p class="is-italic"> Fundada: {{brotherhood.foundation_date}}</p>
                 </div>
               </div>
             </div>
             <footer class="card-footer">
               <div class="field is-grouped is-grouped-left card-footer-item">
                 <router-link :to="{ name: 'brotherhood-edit', params: { id: brotherhood.id }}" class="button is-primary is-outlined">Edit</router-link>
               </div>
             </footer>
           </div>
         </div>

        </div>

</template>

<script>

export default {
  name: 'BrotherhoodShow',
  data: function () {
    return this.$store.state.BrotherhoodStore
  },
  mounted: function () {
    this.$store.dispatch('BrotherhoodStore/show', this.$route.params.id)
  }
}
</script>
