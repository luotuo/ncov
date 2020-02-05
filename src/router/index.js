import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/views/index')
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: () => import('@/views/statistics')
    },
    {
      path: '/relax',
      name: 'relax',
      component: () => import('@/views/relax')
    }
  ]
})
