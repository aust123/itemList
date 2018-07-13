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
import saleSearch from '@/pages/sale/search'
//采购
import BuyList from '@/pages/buy/buylist'
import BuyOrderdetail from '@/pages/buy/orderdetail'
import BuyOrderdetailData from '@/pages/buy/orderdetaildata'
import BuyOrdertrack from '@/pages/buy/ordertrack'

//质检
import Checklist from '@/pages/qcheck/checklist'
import checkSearch from '@/pages/qcheck/search'
import checkOrderdetail from '@/pages/qcheck/orderdetail'
//结算
import Settlelist from '@/pages/settle/settlelist'
import settleSearch from '@/pages/settle/search'
import settleOrderdetail from '@/pages/settle/orderdetail'

//入库
import Instoragelist from '@/pages/instorage/instoragelist'
import instorageSearch from '@/pages/instorage/search'
import instorageOrderdetail from '@/pages/instorage/orderdetail'

//出库
import Outstoragelist from '@/pages/outstorage/outstoragelist'
import outstorageSearch from '@/pages/outstorage/search'
import outstorageOrderdetail from '@/pages/outstorage/orderdetail'
//发货
import Sendlist from '@/pages/send/sendlist'
import sendSearch from '@/pages/send/search'
import sendOrderdetail from '@/pages/send/orderdetail'


//404页面
import Notfound from '@/pages/Notfound'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [{
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
      path: '/inspection',
      name: '质检结果录入',
      component: inspection
    },
    {
      path: '/stockIn',
      name: '入库',
      component: stockIn
    },
    {
      path: '/stockOut',
      name: '出库',
      component: stockOut
    },
    {
      path: '/stockOutAdd',
      name: '出库',
      component: stockOutAdd
    },
    {
      path: '/delivery',
      name: '发货',
      component: delivery
    },
    {
      path: '/addLogistics',
      name: '添加物流',
      component: addLogistics
    },
    {
      path: '/settlements',
      name: '上传结算清单',
      component: settlements
    },



    //——————————————————————————————————

    //销售
    {
      path: '/salelist',
      name: '销售订单',
      component: SaleList,
      meta: {
        title: '销售订单'
      }
    },
    //销售订单搜索
    {
      path: '/saleSearch',
      name: '搜索',
      component: saleSearch,
      meta: {
        title: '搜索'
      }
    },
    //销售订单详情
    {
      path: '/orderdetail',
      component: SaleOrderdetail,
      meta: {
        title: '订单详情'
      },
      children: [{
        path: '/orderdetail',
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
    //采购订单搜索
    {
      path: '/saleSearch',
      name: '采购订单搜索',
      component: saleSearch,
      meta: {
        title: '搜索'
      }
    },
    //采购订单详情
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
        meta: {
          title: '采购详情'
        }
      }, {
        path: '/buyorderdetail/buyordertrack',
        name: 'BuyOrdertrack',
        component: BuyOrdertrack,
        meta: {
          title: '采购详情'
        }
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
    //质检单搜索
    {
      path: '/checkSearch',
      name: '质检单搜索',
      component: checkSearch,
      meta: {
        title: '搜索'
      }
    },
    //质检单详情
    {
      path: '/checkOrderdetail',
      name: '质检单详情',
      component: checkOrderdetail,
      meta: {
        title: '质检单详情'
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
    //结算单搜索
    {
      path: '/settleSearch',
      name: '结算单搜索',
      component: settleSearch,
      meta: {
        title: '搜索'
      }
    },
    //结算单详情
    {
      path: '/settleOrderdetail',
      name: '结算单详情',
      component: settleOrderdetail,
      meta: {
        title: '结算单详情'
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
    //入库单搜索
    {
      path: '/instorageSearch',
      name: '入库单搜索',
      component: instorageSearch,
      meta: {
        title: '搜索'
      }
    },
    //入库单详情
    {
      path: '/instorageOrderdetail',
      name: '入库单详情',
      component: instorageOrderdetail,
      meta: {
        title: '入库单详情'
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
    //出库单搜索
    {
      path: '/outstorageSearch',
      name: '出库单搜索',
      component: outstorageSearch,
      meta: {
        title: '搜索'
      }
    },
    //出库单详情
    {
      path: '/outstorageOrderdetail',
      name: '出库单详情',
      component: outstorageOrderdetail,
      meta: {
        title: '出库单详情'
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
    //发货单搜索
    {
      path: '/sendSearch',
      name: '发货单搜索',
      component: sendSearch,
      meta: {
        title: '搜索'
      }
    },
    //发货单详情
    {
      path: '/sendOrderdetail',
      name: '发货单详情',
      component: sendOrderdetail,
      meta: {
        title: '发货单详情'
      }
    },
    {
      path: '/notfound',
      name: 'Notfound',
      //redirect:'/notfound',
      component: Notfound,
      meta: {
        title: '404'
      }
    },
    {
      path: '*',
      redirect: '/notfound'
    }
  ]
})
