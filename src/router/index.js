import { createRouter, createWebHistory } from 'vue-router'
import AccueilView from '../views/AccueilView/AccueilView.vue'
import AboutView from '../views/AboutView/AboutView.vue'
// import ProjetsView from '../views/ProjetsView/ProjetsView.vue'
// import DetailProjetView from '../views/DetailProjetView/DetailProjetView.vue'
import ContactView from '../views/ContactView/ContactView.vue'

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
      // component: () => import('../views/AboutView/AboutView.vue')
      component: AboutView
    },
    {
      path: '/projets',
      name: 'projets',
      component: () => import('../views/ProjetsView/ProjetsView.vue')
      // component: ProjetsView
    },
    {
      path: '/projet-detail/:id',
      name: 'detail du projet',
      component: () => import('../views/DetailProjetView/DetailProjetView.vue')
      // component: DetailProjetView
    },
    {
      path: '/contact',
      name: 'contact',
      // component: () => import('../views/ContactView/ContactView.vue')
      component: ContactView
    },
    {
      path: '/liste-projets',
      name: 'liste-projets',
      component: () => import('../views/ProjetsView/ListProjects.vue')
    },
    {
      path: '/admin-ajouter-projet',
      name: 'admin-ajouter-projet',
      component: () => import('../views/AddProjetView/AddProjetView.vue')
    },
  ]
})

export default router
