import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/actualites',
    name: 'Actualites',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "actualites" */ '../views/Actualites.vue')
  },
  {
    path: '/evenements',
    name: 'Evenements',
    component: () => import(/* webpackChunkName: "evenements" */ '../views/Evenements.vue')
  
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: () => import(/* webpackChunkName: "connexion" */ '../views/Connexion.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
