<template>
  <div id="app">
    <div id="nav">
      <barra-navegacao />
    </div>
    <router-view />
    <rodape />
  </div>
</template>
<script>
import BarraNavegacao from "./components/BarraNavegacao.vue";
import Rodape from "./components/Rodape.vue";
import { routes } from "./router/index";

export default {
  components: {
    BarraNavegacao,
    Rodape
  },
  data() {
    return {
      routes: routes
    };
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
