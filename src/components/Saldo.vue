<template>
  <div>
    <ul>
      <li v-for="conta in contas" v-bind:key="conta.id">
        Conta {{ conta.id }} possui {{ conta.sum }}
      </li>
    </ul>
  </div>
</template>

<script>
import http from "../http";
export default {
  name: "Saldo",
  data() {
    return {
      contas: [],
    };
  },
  mounted() {
    http
      .getSaldo()
      .then(({ data }) => {
        this.contas = data;
        console.log(data);
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style>
</style>