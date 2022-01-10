<template>
  <div>
    <table>
      <tr>
        <th>{{ $t("contas") }}</th>
      </tr>
      <tr v-for="conta in contas" v-bind:key="conta.id">
        {{
          conta.name
        }}
        <button v-on:click.prevent="deletarConta(conta)">{{ $t("apagar") }}</button>
      </tr>
    </table>
    <br />
    <div>
      <form @submit.prevent="criarConta">
        <h3>{{ $t("contas.criar") }}</h3>
        <div>
          <label for="Nome"></label>
          <input type="Nome" v-model="conta.name" />
        </div>
        <button type="submit" class="btn btn-primary btn-block">{{ $t("contas.botao") }}</button>
      </form>
    </div>
  </div>
</template>

<script>
import http from "../http";
export default {
  data() {
    return {
      contas: [],
      conta: {}
    };
  },
  mounted() {
    this.atualizarContas();
  },
  methods: {
    criarConta() {
      http
        .criarConta(this.conta)
        .then(({ data }) => this.contas.push({ ...this.conta, id: data.id }))
        .catch((err) => console.log(err));
    },
    atualizarContas() {
      http
        .getContas()
        .then(({ data }) => {
          this.contas = data;
        })
        .catch((err) => alert(err.response.data.error));
    },
    deletarConta(conta) {
      http
        .deletarConta(conta.id)
        .then(() => {
          for (let index = 0; index < this.contas.length; index++) {
            // Laço for percorre o array para remover a conta que foi excluída
            if (this.contas[index].id === conta.id) {
              this.contas.splice(index, 1);
            }
          }
        })
        .catch((err) => alert(err.response.data.error));
    }
  }
};
</script>

<style>
.btn {
  margin: 5px;
}
</style>