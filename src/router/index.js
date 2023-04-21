import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView/AccueilView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      // de cette façon le composant est généré dès qu'on affiche le site
      component: AccueilView
    },
    {
      path: '/a-propos',
      name: 'a propos',
      // de cette façon le composant est généré seulement quand on visite le lien qui y mène
      component: () => import('../views/AboutView/AboutView.vue')
    },
    {
      path: '/projets',
      name: 'projets',
      component: () => import('../views/ProjetsView/ProjetsView.vue')
    },
    {
      path: '/projet-detail',
      name: 'detail du projet',
      component: () => import('../views/DetailProjetView/DetailProjetView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView/ContactView.vue')
    },
  ]
})

export default router
