<template>
  <div class="home">
    <Saldo v-if="usuarioEstaLogado" />
    <div v-else>
      <p>{{ $t("home.login") }}</p>
    </div>
  </div>
</template>

<script>
import Saldo from "../components/Saldo.vue";
import { mapGetters } from "vuex";
export default {
  components: { Saldo },
  name: "home",
  computed: {
    ...mapGetters(["usuarioEstaLogado"])
  }
};
</script>
