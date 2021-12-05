<template>
  <nav class="navbar navbar-expand-lg navbar-barriga">
    <a href="/">BarrigaVue</a>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <barra-navegacao-deslogado />
    </div>
  </nav>
</template>

<script>
import BarraNavegacaoDeslogado from './BarraNavegacaoDeslogado.vue';
export default {
  components: { BarraNavegacaoDeslogado },

};
</script>

<style>
.navbar-barriga {
  background: rgb(99, 114, 161);
}

.navbar-barriga a {
  margin-left: 15px;
}
</style>