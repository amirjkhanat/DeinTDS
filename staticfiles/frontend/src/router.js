import Vue from 'vue'
import Router from 'vue-router'
import DashboardComponent from './components/DashboardComponent.vue'
import OffersComponent from './components/OffersComponent.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/admin/',
      name: 'dashboard',
      component: DashboardComponent
    },
    {
      path: '/admin/offers',
      name: 'offers',
      component: OffersComponent
    },
    // Добавьте здесь другие маршруты по мере необходимости
  ]
})