import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundComponent from '../views/NotFoundComponent.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/warning',
      name: "warning",
      component: NotFoundComponent
    },
    { path: '/404', name: "404", component: NotFoundComponent },
    { path: '/405', name: "405", component: NotFoundComponent },
    { path: '/:pathMatch(.*)', component: NotFoundComponent }
  ]
})

export default router
