<template>
  <div class="" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li v-for="route in rotas" v-bind:key="route.titulo">
        <router-link :to="route.path" v-if="route.name == 'Home'">{{ route.titulo }}</router-link>
        <router-link :to="route.path" v-if="!route.logado">{{ route.titulo }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    rotas: {
      type: Array
    }
  }
};
</script>

<style>
</style>