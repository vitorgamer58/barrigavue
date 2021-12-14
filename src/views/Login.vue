<template>
  <div class="container">
    <h1>Login</h1>
    <form class="form-group" @submit.prevent="efetuarLogin">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" v-model="usuario.email" />
      </div>
      <div class="form-group">
        <label for="password">Senha</label>
        <input type="password" class="form-control" v-model="usuario.passwd" />
      </div>
      <button
        type="submit"
        class="btn btn-primary btn-block"
        :disabled="!isDisabled()"
      >
        Logar
      </button>
      <router-link :to="{ name: 'novo.usuario' }">
        Não possui cadastro? Cadastre-se aqui!
      </router-link>
    </form>
  </div>
</template>

<script>
import http from "../http";
export default {
  data() {
    return {
      usuario: {
        email: '',
        passwd: ''
      },
    };
  },
  methods: {
    efetuarLogin() {
      http
        .login(this.usuario)
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.data.token);
          this.$router.push({ name: "Home" });
        })
        .catch((err) => alert(err.response.data.error));
    },
    isDisabled() {
      return Boolean(this.usuario.email.length > 2 && this.usuario.passwd.length > 1);
    },
  },
};
</script>

<style>
</style>