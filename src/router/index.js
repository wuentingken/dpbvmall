import Vue from 'vue'
import Router from 'vue-router'
import Welcom from '@/components/Welcom'
import BluePrint from '@/components/BluePrint'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcom',
      component: Welcom
    },
    {
      path: '/blueprint',
      name: 'BluePrint',
      component: BluePrint
    }
  ]
})
