import Vue from 'vue'
import Router from 'vue-router'
import entrance from '@/pages/Entrance'
//销售
import SaleList from '@/pages/sale/salelist'
import SaleOrderdetail from '@/pages/sale/orderdetail'
import SaleOrderdetailData from '@/pages/sale/orderdetaildata'
import SaleOrdertrack from '@/pages/sale/ordertrack'
//采购
import BuyList from '@/pages/buy/buylist'
import BuyOrderdetail from '@/pages/buy/orderdetail'
import BuyOrderdetailData from '@/pages/buy/orderdetaildata'
import BuyOrdertrack from '@/pages/buy/ordertrack'

//质检
import Checklist from '@/pages/qcheck/checklist'


//结算
import Settlelist from '@/pages/settle/settlelist'


//入库
import Instoragelist from '@/pages/instorage/instoragelist'


//出库
import Outstoragelist from '@/pages/outstorage/outstoragelist'


//发货
import Sendlist from '@/pages/send/sendlist'


import Search from '@/pages/search/search'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [{
      path: '/',
      name: 'entrance',
      component: entrance,
      meta: {
        title: '首页'
      }
    },
    //销售
    {    
      path: '/salelist',
      name: '销售订单',
      component: SaleList,
      meta: {
        title: '销售订单'
      }
    },
    {
      path: '/orderdetail',
      component: SaleOrderdetail,
      meta: {
        title: '订单详情'
      },
      children: [{
        path: '',
        component: SaleOrderdetailData,
        meta: {
          title: '订单详情'
        }
      }, {
        path: '/orderdetail/orderdetaildata',
        name: 'SaleOrderdetailData',
        component: SaleOrderdetailData,
      }, {
        path: '/orderdetail/ordertrack',
        name: 'SaleOrdertrack',
        component: SaleOrdertrack,
        meta: {
          title: '订单追踪'
        },
      }]
    },
    //采购
    {    
      path: '/buylist',
      name: '采购订单',
      component: BuyList,
      meta: {
        title: '采购订单'
      }
    },
    {
      path: '/buyorderdetail',
      component: BuyOrderdetail,
      meta: {
        title: '采购详情'
      },
      children: [{
        path: '',
        component: BuyOrderdetailData,
      }, {
        path: '/buyorderdetail/buyorderdetaildata',
        name: 'BuyOrderdetailData',
        component: BuyOrderdetailData,
      }, {
        path: '/buyorderdetail/buyordertrack',
        name: 'BuyOrdertrack',
        component: BuyOrdertrack,
      }]
    },
    //质检
    {   
      path: '/checklist',
      name: '质检单',
      component: Checklist,
      meta: {
        title: '质检单'
      }
    },   
    //结算
    {  
      path: '/settlelist',
      name: '结算单',
      component: Settlelist,
      meta: {
        title: '结算单'
      }
    },  

    //入库
    {    
      path: '/instoragelist',
      name: '入库单',
      component: Instoragelist,
      meta: {
        title: '入库单'
      }
    },
   
    //出库
    {    
      path: '/outstoragelist',
      name: '出库单',
      component: Outstoragelist,
      meta: {
        title: '出库单'
      }
    },
   
    //发货
    {    
      path: '/sendlist',
      name: '发货单',
      component: Sendlist,
      meta: {
        title: '发货单'
      }
    },
    
    //搜索
    {
      path: '/search',
      name: '搜索',
      component: Search,
      meta: {
        title: '搜索'
      }
    }
  ]
})
