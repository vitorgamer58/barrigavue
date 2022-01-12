<template>
  <div class="container">
    <h1>Login</h1>
    <form class="form-group" @submit.prevent="efetuarLogin">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" class="form-control" v-model="usuario.email" />
      </div>
      <div class="form-group">
        <label for="password">{{ $t("senha") }}</label>
        <input type="password" class="form-control" v-model="usuario.passwd" />
      </div>
      <button type="submit" class="btn btn-primary btn-block" :disabled="!isDisabled()">
        {{ $t("logar") }}
      </button>
      <router-link :to="{ name: 'novo.usuario' }">
        {{ $t("cadastro") }}
      </router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: {
        email: "",
        passwd: ""
      }
    };
  },
  methods: {
    efetuarLogin() {
      this.$store
        .dispatch("efetuarLogin", this.usuario)
        .then(() => this.$router.push({ name: "home" }))
        .catch((err) => alert(err.response.data.error));
    },
    isDisabled() {
      return Boolean(this.usuario.email.length > 2 && this.usuario.passwd.length > 1);
    }
  }
};
</script>

<style>
</style>