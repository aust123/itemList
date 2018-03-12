import Vue from 'vue'
import Router from 'vue-router'
import tabbar from '@/components/tabbar'
import Accept from '../pages/Accept'
import Release from '../pages/Release'
import My from '../pages/My'
import Mybankcard from '../pages/Mybankcard'
import Certification from '../pages/Certification'
import BankDeposit from '../pages/BankDeposit'
import Appointment from '../pages/Appointment'
import AddBackcard from '../pages/AddBackcard'
import AddRelease from '../pages/AddRelease'
import Enchashment from '../pages/Enchashment'
import FundManage from '../pages/FundManage'
import NotFound from '../pages/NotFound'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Accept',
      component: Accept
    },
    {
      path: '/Accept',
      name: 'Accept',
      component: Accept
    },
    {
      path: '/Release',
      name: 'Release',
      component: Release
    },
    {
      path: '/My',
      name: 'My',
      component: My
    },
    {
      path: '/My/Mybankcard',
      name: 'Mybankcard',
      component: Mybankcard
    },
    {
      path: '/My/Certification',
      name: 'Certification',
      component: Certification
    },
    {
      path: '/My/BankDeposit',
      name: 'BankDeposit',
      component: BankDeposit
    },
    {
      path: '/My/Appointment',
      name: 'Appointment',
      component: Appointment
    },
    {
      path: '/My/AddBackcard',
      name: 'AddBackcard',
      component: AddBackcard
    },
    {
      path: '/My/AddRelease',
      name: 'AddRelease',
      component: AddRelease
    },
    {
      path: '/My/Enchashment',
      name: 'Enchashment',
      component: Enchashment
    },
    {
      path: '/My/FundManage',
      name: 'FundManage',
      component: FundManage
    },
    {
      path: '*',
      name: 'notfound',
      component: NotFound
    }
  ]
})
