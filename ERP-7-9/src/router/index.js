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
import CheckOrderdetail from '@/pages/qcheck/orderdetail'

//结算
import Settlelist from '@/pages/settle/settlelist'
import SettleOrderdetail from '@/pages/settle/orderdetail'

//入库
import Instoragelist from '@/pages/instorage/instoragelist'
import InstorageOrderdetail from '@/pages/instorage/orderdetail'

//出库
import Outstoragelist from '@/pages/outstorage/outstoragelist'
import OutstorageOrderdetail from '@/pages/outstorage/orderdetail'

//发货
import Sendlist from '@/pages/send/sendlist'
import SendOrderdetail from '@/pages/send/orderdetail' 

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
    //销售
    {
      //path: '/',
      path:'/salelist',
      name: '销售订单',
      component: SaleList
    },
    {
      path: '/orderdetail',      
      component: SaleOrderdetail,
      children: [{
        path: '',      
        component: SaleOrderdetailData,
      },{
        path: '/orderdetail/orderdetaildata',
        name: 'SaleOrderdetailData',
        component: SaleOrderdetailData,
      }, {
        path: '/orderdetail/ordertrack',
        name: 'SaleOrdertrack',
        component: SaleOrdertrack,
      }]
    },
    //订单
    {
      //path: '/',
      path:'/buylist',
      name: '采购订单',
      component: BuyList
    },
    {
      path: '/buyorderdetail',      
      component: BuyOrderdetail,
      children: [{
        path: '',      
        component: BuyOrderdetailData,
      },{
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
      //path: '/',
      path:'/checklist',
      name: '质检单',
      component: Checklist
    },
    {
      path: '/checkorderdetail',  
      name:'质检单详情',    
      component: CheckOrderdetail,     
    },
     //结算
     {
      // path: '/',
      path:'/settlelist',
      name: '结算单',
      component: Settlelist
    },
    {
      path: '/settleorderdetail',  
      name:'质检单详情',    
      component: SettleOrderdetail,     
    },

     //入库
     {
      //path: '/',
      path:'/instoragelist',
      name: '入库单',
      component: Instoragelist
    },
    {
      path: '/instorageorderdetail',  
      name:'入库单详情',    
      component: InstorageOrderdetail,     
    },
     //出库
     {
     // path: '/',
     path:'/outstoragelist',
      name: '出库单',
      component: Outstoragelist
    },
    {
      path: '/outstorageorderdetail',  
      name:'出库详情',    
      component: OutstorageOrderdetail,     
    },
     //发货
     {
      path: '/',
     //path:'/sendlist',
      name: '发货单',
      component: Sendlist
    },
    {
      path: '/sendorderdetail',  
      name:'发货单详情',    
      component: SendOrderdetail,     
    },
    {     
      path:'/search',
      name: '搜索',
      component: Search      
    }
  ]
})
