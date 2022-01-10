<template>
  <div>
    <li
      v-for="transacao in transacoes"
      v-bind:key="transacao.id"
      class="list-group-item list-group-item-action flex-column align-items-start"
    >
      <div class="row">
        {{ transacao.description }}, R$ {{ transacao.ammount }}
        <div class="col col-md-1">
          <button v-on:click.prevent="deletarTransacao(transacao)">
            {{ $t("apagar") }}
          </button>
        </div>
        <div class="col col-md-1">
          <router-link
            :to="{
              name: 'editar-transacao',
              params: { id: transacao.id }
            }"
            ><button>{{ $t("transacao.editar") }}</button></router-link
          >
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
      transacoes: []
    };
  },
  mounted() {
    http
      .obterTransacoes()
      .then(({ data }) => {
        this.transacoes = data;
      })
      .catch((err) => alert(err.response.data.error));
  },
  methods: {
    deletarTransacao(transacao) {
      http
        .deletarTransacao(transacao.id)
        .then(() => {
          for (let index = 0; index < this.transacoes.length; index++) {
            // Laço for percorre o array para remover a transacao que foi excluída
            if (this.transacoes[index].id === transacao.id) {
              this.transacoes.splice(index, 1);
            }
          }
          alert("Deletado com sucesso");
        })
        .catch((err) => console.log(err));
    }
  }
};
</script>

<style>
</style>