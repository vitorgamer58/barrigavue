<template>
  <div class="home">
    <Saldo v-if="usuarioEstaLogado" />
    <div v-else>
      <p>Faça Login</p>
    </div>
  </div>
</template>

<script>
import Saldo from "../components/Saldo.vue";
export default {
  components: { Saldo },
  name: "Home",
  computed: {
    usuarioEstaLogado() {
      return Boolean(localStorage.getItem("token"));
    },
  },
};
</script>
