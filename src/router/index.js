import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/mudarSenha',
    name: 'mudarsenha',
    component: () => import('../views/MudarSenhaView.vue')
  },
  {
    path: '/funcPage',
    name: 'funcPage',
    component: () => import('../views/FuncionarioPageView.vue')
  },
  {
    path: '/',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  
  {
    path: '/acessorio',
    name: 'acessorio',
    component: () => import('../views/tables/AcessorioTableView.vue')
  },
  {
    path: '/equipamento',
    name: 'equipamento',
    component: () => import('../views/tables/EquipamentoTableView.vue')
  },
  {
    path: '/conserto',
    name: 'conserto',
    component: () => import('../views/tables/ConsertoTableView.vue')
  },
  {
    path: '/emprestimo',
    name: 'emprestimo',
    component: () => import('../views/tables/EmprestimoTableView.vue')
  },
  {
    path: '/funcionario',
    name: 'funcionario',
    component: () => import('../views/tables/FuncionarioTableView.vue')
  },
  {
    path: '/adm',
    name: 'adm',
    component: () => import('../views/tables/AdmTableView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
