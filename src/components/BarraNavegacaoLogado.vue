<template>
  <div class="" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li v-for="route in rotas" v-bind:key="route.name">
        <router-link :to="route.path" v-if="route.logado">{{ $t(route.name) }}</router-link>
      </li>
      <li>
        <a href="#" @click.prevent="efetuarLogout">{{ $t('sair') }}</a>
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
  },
  methods: {
    efetuarLogout() {
      this.$store.commit("DESLOGAR_USUARIO");
      this.$router.push({ name: "home" });
    }
  }
};
</script>

<style>
</style>