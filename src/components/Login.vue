<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="efetuarLogin">
      <div>
        <label for="email">Email</label>
        <input type="email" class="form-control" v-model="usuario.email" />
      </div>
      <div>
        <label for="password">Senha</label>
        <input type="password" class="form-control" v-model="usuario.senha" />
      </div>
      <button type="submit">Logar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: {},
      error: ''
    }
  },
  name: "Login",
  props: {},
  methods: {
    efetuarLogin() {
      
    }
  }
};
</script>

<style>
</style>