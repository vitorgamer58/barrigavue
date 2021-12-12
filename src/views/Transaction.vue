<template>
  <div>
    <h3>Nova Transação</h3>
    <form @submit.prevent="criarTransacao">
      <div>
        <label for="description">Descrição:</label>
        <input type="description" v-model="transacao.description" />
      </div>
      <div>
        Tipo:
        <label for="i">Entrada</label>
        <input type="radio" id="i" value="I" v-model="transacao.type" />
        <label for="o">Saída</label>
        <input type="radio" id="o" value="O" v-model="transacao.type" />
      </div>
      <div>
        Conta: 
        <select v-model="transacao.acc_id">
          <option v-for="conta in contas" v-bind:key="conta.id" :value="conta.id">{{ conta.name }}</option>
        </select>
      </div>
      <div>
        <label for="value">Valor:</label>
        <input type="value" v-model="transacao.ammount">
      </div>
      <div>
        Status:
        <select v-model="transacao.status">
          <option :value="true">Pago</option>
          <option :value="false">À pagar</option>
        </select>
      </div>
      <button type="submit">Criar transacao</button>
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
        status: true,
      },
      contas: [],
    };
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
    criarTransacao() {
      const transaction = this.transacao
      transaction.date = new Date()
      http.criarTransacao(transaction)
      .then(() => {
        alert('Transação Adicionada com sucesso')
        this.transacao = {}
      })
      .catch((err) => alert(err.response.data.error))
    }
  }
};
</script>

<style>
label {
  margin-right: 5px;
}
</style>