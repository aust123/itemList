import Vue from 'vue'
import Router from 'vue-router'
import entrance from '@/pages/Entrance'
import SaleList from '@/pages/sale/salelist'

import Orderdetail from '@/pages/sale/orderdetail'
import OrderdetailData from '@/pages/sale/orderdetaildata'
import Ordertrack from '@/pages/sale/ordertrack'
import Search from '@/pages/search/search'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    // {
    //   path: '/',
    //   name: 'entrance',
    //   component: entrance
    // },
    // {
    //   path: '/',
    //  // path:'/salelist',
    //   name:'销售订单',
    //   component:SaleList
    // },
    // {
    //   path: '/',
    //   // path:'/orderdetail',
    //   name: '销售订单详情',
    //   component: Orderdetail,
    //   children: [{
    //     path: 'orderdetaildata',
    //     name: 'OrderdetailData',
    //     component: OrderdetailData,
    //   }, {
    //     path: 'ordertrack',
    //     name: 'Ordertrack',
    //     component: Ordertrack,
    //   }]
    // },
    {
      path: '/',
      // path:'/search',
      name: '搜索',
      component: Search      
    }
  ]
})
