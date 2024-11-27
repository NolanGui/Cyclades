import { createRouter, createWebHistory } from 'vue-router'

import Accueil from '@/views/Accueil.vue'
import Inscriptions from '@/views/Inscriptions.vue'
import Recherche from '@/views/Recherche.vue'
import Resultats from '@/views/Resultats.vue'

const routes = [
  { path: '/', component: Accueil, name: 'Accueil' },
  { path: '/inscriptions', component: Inscriptions, name: 'Inscriptions' },
  { path: '/recherche', component: Recherche, name: 'Recherche' },
  { path: '/resultats', component: Resultats, name: 'Résultats' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
