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
import Distribution from '@/components/Distribution'
import Sharewecord from '@/components/Sharewecord'
import FanMall from '@/components/FanMall'
import Myfan from '@/components/Myfan'
import Setting from '@/components/Setting'
import Shouaddress from '@/components/Shouaddress'
import Newaddress from '@/components/Newaddress'

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
    },
    {
      path: '/distribution',
      name: 'Distribution',
      component: Distribution
    },
    {
      path: '/sharewecord',
      name: 'Sharewecord',
      component: Sharewecord
    },
    {
      path: '/fanmall',
      name: 'FanMall',
      component: FanMall
    },
    {
      path: '/myfan',
      name: 'Myfan',
      component: Myfan
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/shouaddress',
      name: 'Shouaddress',
      component: Shouaddress
    },
    {
      path: '/newaddress',
      name: 'Newaddress',
      component: Newaddress
    }
  ]
})
