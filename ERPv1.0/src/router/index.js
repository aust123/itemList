import Vue from 'vue'
import Router from 'vue-router'
import '@/assets/css/public.css'

import entrance from '@/pages/Entrance'
import home from '@/pages/Home/Home'
import SucJump from '@/components/Jump/Success'
import ErrorJump from '@/components/Jump/Error'
import billing from '@/pages/Billing/Billing'
import billingSale from '@/pages/Billing/BillingSale'
import billEntry from '@/pages/Billing/BillEntry'
import truckLoad from '@/pages/Billing/TruckLoad'
import accountSure from '@/pages/Billing/AccountSure'
import uploadSettle from '@/pages/Billing/UploadSettle'
import inspection from '@/pages/Billing/Inspection'
import stockIn from '@/pages/Billing/StockIn'
import stockOut from '@/pages/Billing/StockOut'
import stockOutAdd from '@/pages/Billing/StockOutAdd'
import delivery from '@/pages/Billing/Delivery'
import addLogistics from '@/pages/Billing/AddLogistics'
import settlements from '@/pages/Billing/Settlements'



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
  routes: [
    {
      path: '/',
      name: 'entrance',
      component: entrance
    },
    {
      path: '/home',
      name: '首页',
      component: home
    },
    {
      path: '/SucJump',
      name: '成功跳转',
      component: SucJump
    },
    {
      path: '/ErrorJump',
      name: '失败跳转',
      component: ErrorJump
    },
    {
      path: '/billing',
      name: '订单开单',
      component: billing
    },
    {
      path: '/billEntry',
      name: '物流物流录入',
      component: billEntry
    },
    {
      path: '/truckLoad',
      name: '物流装车录入',
      component: truckLoad
    },
    {
      path: '/accountSure',
      name: '结算确认',
      component: accountSure
    },
    {
      path: '/uploadSettle',
      name: '上传结算清单',
      component: uploadSettle
    },
    {
      path: '/billingSale',
      name: '销售订单发起',
      component: billingSale
    },
    {
      path:'/inspection',
      name:'质检结果录入',
      component:inspection
    },
    {
      path:'/stockIn',
      name:'入库',
      component:stockIn
    },
    {
      path:'/stockOut',
      name:'出库',
      component:stockOut
    },
    {
      path:'/stockOutAdd',
      name:'出库',
      component:stockOutAdd
    },
    {
      path:'/delivery',
      name:'发货',
      component:delivery
    },
    {
      path:'/addLogistics',
      name:'添加物流',
      component:addLogistics
    },
    {
      path:'/settlements',
      name:'上传结算清单',
      component:settlements
    }, 
    
    
    
    //——————————————————————————————————
    {
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
