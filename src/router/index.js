
import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'
import { computed } from 'vue'

const history = createWebHashHistory()

const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      beforeEnter: (to, from, next) => {
        const token = computed(() => store.state.token)
        if (!token.value) {
          next('/login')
        } else {
          next()
        }
      },
      component: () => import('../views/dashboard.vue'),
      children: [
        {
          path: 'detail',
          name: 'detail',
          component: () => import('../views/detail.vue')
        },
        {
          path: 'chart',
          name: 'chart',
          component: () => import('../views/chart.vue')
        },
        {
          path: ':pathMatch(.*)*',
          redirect: {
            name: 'detail'
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: () => import('../views/404.vue')
    }
  ]
})

export default router