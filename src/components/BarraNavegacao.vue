<template>
  <nav class="navbar navbar-expand-lg navbar-barriga">
    <barra-navegacao-logado :rotas="rotas" v-if="usuarioEstaLogado" />
    <barra-navegacao-deslogado :rotas="rotas" v-else />
    <div class="locale"><LocaleChanger /></div>
  </nav>
</template>

<script>
import BarraNavegacaoDeslogado from "./BarraNavegacaoDeslogado.vue";
import { routes } from "@/router";
import BarraNavegacaoLogado from "./BarraNavegacaoLogado.vue";
import LocaleChanger from "./localeChanger.vue";
export default {
  components: {
    BarraNavegacaoDeslogado,
    BarraNavegacaoLogado,
    LocaleChanger
  },
  data() {
    return {
      rotas: routes
    };
  },
  computed: {
    usuarioEstaLogado() {
      return this.$store.getters.usuarioEstaLogado;
    }
  }
};
</script>

<style>
.navbar-barriga {
  background: rgb(99, 114, 161);
}

.navbar-barriga a {
  margin-left: 15px;
}

.locale {
  margin-right: 1rem;
  margin-left: auto;
}
</style>