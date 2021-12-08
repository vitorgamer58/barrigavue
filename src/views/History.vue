<template>
  <div>
    <li
      v-for="transacao in transacoes"
      v-bind:key="transacao.id"
      class="
        list-group-item list-group-item-action
        flex-column
        align-items-start
      "
    >
      <div class="row">
        {{ transacao.description }}, R$ {{ transacao.ammount }}
        <div class="col col-md-1">
          <button v-on:click.prevent="deletarTransacao(transacao)">
            Apagar
          </button>
        </div>
      </div>
    </li>
  </div>
</template>

<script>
import http from "../http";
export default {
  data() {
    return {
      transacoes: [],
    };
  },
  mounted() {
    http
      .obterTransacoes()
      .then(({ data }) => {
        this.transacoes = data;
      })
      .catch((err) => console.log(err));
  },
  methods: {
    deletarTransacao(transacao) {
      http
        .deletarTransacao(transacao.id)
        .then(() => {
          console.log('Deletado')
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
</style>