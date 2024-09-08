import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '../store';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue'),
      children: [
        {
          path: '/properties',
          name: 'properties',
          component: () => import('../views/Properties.vue'),
          beforeEnter: async (to, from, next) => {
            if (!store.state.allBrokers) {
              await store.dispatch('allBrokers')
            }
            if (!store.state.allProperities) {
              await store.dispatch('allProperities')
            }
            next()
          },
        },
        {
          path: '/clients',
          name: 'clients',
          component: () => import('../views/Clients.vue'),
          beforeEnter: async (to, from, next) => {
            if (!store.state.allClients) {
              await store.dispatch('allClients')
            }
            next()
          },
        },
        {
          path: '/brokers',
          name: 'brokers',
          component: () => import('../views/Brokers.vue'),
          beforeEnter: async (to, from, next) => {
            if (!store.state.allBrokers) {
              await store.dispatch('allBrokers')
            }
            next()
          },
        },
        {
          path: '/sales',
          name: 'sales',
          component: () => import('../views/Sales.vue'),
          beforeEnter: async (to, from, next) => {
            if (!store.state.salesData) {
              await store.dispatch('sales')
            }
            next()
          },
        },
        {
          path: '/employees',
          name: 'employees',
          component: () => import('../views/Employees.vue'),
          beforeEnter: async (to, from, next) => {
            if (!store.state.allEmployees) {
              await store.dispatch('allEmployees')
            }
            next()
          },
        },
        {
          path: '/business-expenses',
          name: 'business-expenses',
          component: () => import('../views/BusinessExpenses.vue'),
          beforeEnter: async (to, from, next) => {
            if (!store.state.BusinessExpenses) {
              await store.dispatch('BusinessExpenses')
            }
            next()
          },
        },
        {
          path: '/office-expenses',
          name: 'office-expenses',
          component: () => import('../views/OfficeExpenses.vue'),
          beforeEnter: async (to, from, next) => {
            if (!store.state.officeExpenses) {
              await store.dispatch('OfficeExpenses')
            }
            next()
          },
        },
        {
          path: '/salaries',
          name: 'salaries',
          component: () => import('../views/Salaries.vue'),
          beforeEnter: async (to, from, next) => {
            if (!store.state.salaries) {
              await store.dispatch('salaries')
            }
            next()
          },
        },
      ]
    }
  ]
})

export default router
