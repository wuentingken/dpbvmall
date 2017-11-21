import Vue from 'vue'
import Router from 'vue-router'
import Welcom from '@/components/Welcom'
import BluePrint from '@/components/BluePrint'
import BinDing from '@/components/BinDing'
import BinPhone from '@/components/BinPhone'

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
    },
    {
      path: '/binding',
      name: 'BinDing',
      component: BinDing
    },
    {
      path: '/binphone',
      name: 'BinPhone',
      component: BinPhone
    }
  ]
})
