<template>
  <div class="" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li v-for="route in rotas" v-bind:key="route.name">
        <router-link :to="route.path" v-if="route.name == 'home'">{{ $t(route.name) }}</router-link>
        <router-link :to="route.path" v-if="route.logado === false && route.logado !== undefined">
          {{ $t(route.name) }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    rotas: {
      type: Array,
    },
  },
};
</script>

<style>
</style>