import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundComponent from '../views/NotFoundComponent.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "主页"
      }
    },
    {
      path: '/warning',
      name: "warning",
      component: NotFoundComponent,
      meta: {
        title: "警告"
      }
    },
    {
      path: '/approvalProcess',
      name: 'approvalProcess',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/approvalProcess.vue')
    },
    { path: '/404', name: "404", component: NotFoundComponent },
    { path: '/405', name: "405", component: NotFoundComponent },
    { path: '/:pathMatch(.*)', component: NotFoundComponent }
  ]
})

export default router
