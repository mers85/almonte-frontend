<template>
  <div class="admin">
    <div class="column is-half is-offset-one-quarter has-text-justified ">
      <p class="title is-3 is-spaced">Admin panel</p>
    </div>
    <div class="columns is-mobile">
      <div class="column is-half is-offset-one-quarter">
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" placeholder="Usuario">
              <span class="icon is-small is-left">
                <font-awesome-icon icon="user" />
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="password" placeholder="Contraseña">
              <span class="icon is-small is-left">
                <font-awesome-icon icon="lock" />
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
  </div>
</template>
