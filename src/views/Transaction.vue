<template>
  <div>
    <h3 v-if="!this.id">{{ $t("transacao.titulo") }}</h3>
    <h3 v-else>{{ $t("transacao.editar") }}</h3>
    <form @submit.prevent="tratarTransacao">
      <div>
        <label for="description">{{ $t("transacao.descricao") }}:</label>
        <input type="description" v-model="transacao.description" />
      </div>
      <div>
        {{ $t("transacao.tipo") }}:
        <label for="i">{{ $t("transacao.entrada") }}</label>
        <input type="radio" id="i" value="I" v-model="transacao.type" />
        <label for="o">{{ $t("transacao.saida") }}</label>
        <input type="radio" id="o" value="O" v-model="transacao.type" />
      </div>
      <div>
        {{ $t("transacao.conta") }}:
        <select v-model="transacao.acc_id">
          <option v-for="conta in contas" v-bind:key="conta.id" :value="conta.id">
            {{ conta.name }}
          </option>
        </select>
      </div>
      <div>
        <label for="value">{{ $t("transacao.valor") }}:</label>
        <input type="value" v-model="transacao.ammount" />
      </div>
      <div>
        {{ $t("transacao.status") }}:
        <select v-model="transacao.status">
          <option :value="true">{{ $t("transacao.pago") }}</option>
          <option :value="false">{{ $t("transacao.apagar") }}</option>
        </select>
      </div>
      <button type="submit" v-if="!this.id">{{ $t("transacao.criar") }}</button>
      <button type="submit" v-else>{{ $t("transacao.editar") }}</button>
    </form>
  </div>
</template>

<script>
import http from "../http";
export default {
  name: "Transação",
  data() {
    return {
      transacao: {
        description: "",
        date: "",
        ammount: "",
        type: "I",
        acc_id: "",
        status: true
      },
      contas: [],
      id: this.$route.params.id
    };
  },
  created() {
    if (this.id) {
      http
        .obterTransacao(this.id)
        .then(({ data }) => (this.transacao = data))
        .catch((err) => alert(err.response.data.error));
    }
  },
  mounted() {
    http
      .getContas()
      .then(({ data }) => {
        this.contas = data;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    tratarTransacao() {
      if (this.id) this.editarTransacao();
      else this.criarTransacao();
    },
    criarTransacao() {
      const transaction = this.transacao;
      transaction.date = new Date();
      http
        .criarTransacao(transaction)
        .then(() => {
          alert("Transação Adicionada com sucesso");
          this.transacao = {};
        })
        .catch((err) => alert(err.response.data.error));
    },
    editarTransacao() {
      http
        .editarTransacao(this.id, this.transacao)
        .then(() => {
          alert("Editado com sucesso");
          this.$router.push({ name: "extrato" });
        })
        .catch((err) => alert(err.response.data.error));
    }
  }
};
</script>

<style>
label {
  margin-right: 5px;
}
</style>