import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import FlashView from '../views/FlashView.vue'
import ArtistsView from '../views/ArtistsView.vue'
import ArtistDavidView from '../views/ArtistDavidView.vue'
import ArtistVeroniqueView from '../views/ArtistVeroniqueView.vue'
import ContactView from '../views/ContactView.vue'
import QAView from '../views/QAView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopView
    },
    {
      path: '/flash',
      name: 'flash',
      component: FlashView
    },
    {
      path: '/artistes',
      name: 'artists',
      component: ArtistsView
    },
    {
      path: '/artistes-david',
      name: 'artist-david',
      component: ArtistDavidView
    },
    {
      path: '/artistes-veronique',
      name: 'artist-veronique',
      component: ArtistVeroniqueView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/faq',
      name: 'qa',
      component: QAView
    },
    
  ]
})

export default router