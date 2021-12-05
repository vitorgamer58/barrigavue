<template>
  <div class="container">
    <h1>Novo usuário</h1>
    <form @submit.prevent="cadastrarUsuario">
      <div class="form-group">
        <label for="nome">Nome</label>
        <input type="text" class="form-control" v-model="usuario.name" />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text" class="form-control" v-model="usuario.email" />
      </div>
      <div class="form-group">
        <label for="email">Senha</label>
        <input type="text" class="form-control" v-model="usuario.passwd" />
      </div>
      <button class="btn btn-primary" type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
import http from '../http'
export default {
  data: function () {
    return {
      usuario: {
        name: '',
        passwd: '',
        email: ''
      }
    }
  },
  methods: {
    cadastrarUsuario () {
      http.cadastro(this.usuario)
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
  }
};
</script>

<style>
</style>