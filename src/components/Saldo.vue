<template>
  <div>
    <table>
      <tr>
        <th>Conta</th>
        <th>Saldo</th>
      </tr>
      <tr v-for="conta in contas" v-bind:key="conta.id">
        <th>{{ conta.name }}</th>
        <th>{{ conta.sum }}</th>
      </tr>
    </table>
  </div>
</template>

<script>
/* eslint-disable no-unused-vars */
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
      .then((saldo) => {
        http.getContas().then((getcontas) => {
          getcontas.data.forEach((e) => {
            const acc = { ...e };
            const getsaldo = saldo.data.filter((s) => s.id == acc.id);
            if (getsaldo[0]) acc.sum = getsaldo[0].sum;
            else acc.sum = 0;
            this.contas.push(acc);
          });
        });
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
  },
};
</script>

<style>
table {
  margin-left: auto;
  margin-right: auto;
}
</style>