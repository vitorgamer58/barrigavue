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
  },
  {
    path: '/contas',
    name: 'contas',
    titulo: 'Contas',
    logado: true,
    component: () => import('../views/Accounts.vue')
  },
  {
    path: '/transacao',
    name: 'transacao',
    titulo: 'Transação',
    logado: true,
    component: () => import('../views/Transaction.vue')
  },
  {
    path: '/transacao/:id',
    name: 'editar-transacao',
    titulo: 'Editar transação',
    component: () => import('../views/Transaction.vue')
  },
  {
    path: '/extrato',
    name: 'extrato',
    titulo: 'Extrato',
    logado: true,
    component: () => import('../views/History.vue')
  }
]
/* TODO: Se o usuário estiver logado:
Deve mostrar rotas para: movimentação, histórico e contas  */
const router = new VueRouter({
  routes
})

export { router, routes }
