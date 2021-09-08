import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Evenements from '../views/Evenements.vue'
import Connexion from '../views/Connexion.vue'
import Actualites from '../views/Actualites.vue'
import IdEvent from '../views/IdEvent.vue'



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
    component : Actualites
  },
  {
    path: '/evenements',
    name: 'Evenements',
    component: Evenements
  
  },
  {
    path: '/connexion',
    name: 'Connexion',
    component: Connexion
  },
  {
    path: '/IdEvent',
    name: 'IdEvent',
    component: IdEvent
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
