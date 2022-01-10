<template>
  <div class="home">
    <Saldo v-if="usuarioEstaLogado" />
    <div v-else>
      <p>{{ $t('login') }}</p>
    </div>
  </div>
</template>

<script>
import Saldo from "../components/Saldo.vue";
import { mapGetters } from "vuex";
export default {
  components: { Saldo },
  name: "Home",
  computed: {
    ...mapGetters(['usuarioEstaLogado'])
  },
};
</script>
