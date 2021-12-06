import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    titulo: 'BarrigaVue',
    component: Home,
    logado: true
  },
  {
    path: '/cadastre-se',
    name: 'novo.usuario',
    titulo: 'Cadastre-se',
    logado: false,
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    titulo: 'Login',
    logado: false,
    component: () => import('../views/Login.vue')
  }
]
/* TODO: Se o usuário estiver logado:
Deve mostrar rotas para: movimentação, histórico e contas  */
const router = new VueRouter({
  routes
})

export { router, routes }
