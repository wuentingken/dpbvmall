import Vue from 'vue'
import Router from 'vue-router'
import Welcom from '@/components/Welcom'
import BluePrint from '@/components/BluePrint'
import BinDing from '@/components/BinDing'
import BinPhone from '@/components/BinPhone'
import UserCenter from '@/components/UserCenter'
import Integral from '@/components/Integral'
import Sign from '@/components/Sign'
import SignDone from '@/components/SignDone'

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
    },
    {
      path: '/usercenter',
      name: 'UserCenter',
      component: UserCenter
    },
    {
      path: '/integral',
      name: 'Integral',
      component: Integral
    },
    {
      path: '/sign',
      name: 'Sign',
      component: Sign
    },
    {
      path: '/signdone',
      name: 'SignDone',
      component: SignDone
    }
  ]
})
