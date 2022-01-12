import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    logado: true
  },
  {
    path: '/cadastre-se',
    name: 'novo.usuario',
    logado: false,
    component: () => import('../views/Register.vue')
  },
  {
    path: '/login',
    name: 'login',
    logado: false,
    component: () => import('../views/Login.vue')
  },
  {
    path: '/contas',
    name: 'contas',
    logado: true,
    component: () => import('../views/Accounts.vue')
  },
  {
    path: '/transacao',
    name: 'transacao',
    logado: true,
    component: () => import('../views/Transaction.vue')
  },
  {
    path: '/transacao/:id',
    name: 'editar-transacao',
    component: () => import('../views/Transaction.vue')
  },
  {
    path: '/extrato',
    name: 'extrato',
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
