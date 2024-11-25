import { createRouter, createWebHistory } from 'vue-router'

// Importation des pages
import Accueil from '@/views/Accueil.vue'
import Inscriptions from '@/views/Inscriptions.vue'
import Convocations from '@/views/Convocations.vue'
import Resultats from '@/views/Resultats.vue'

const routes = [
  { path: '/', component: Accueil, name: 'Accueil' },
  { path: '/inscriptions', component: Inscriptions, name: 'Inscriptions' },
  { path: '/convocations', component: Convocations, name: 'Convocations' },
  { path: '/resultats', component: Resultats, name: 'Résultats' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
