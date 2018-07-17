import Vue from 'vue'
import Router from 'vue-router'
import '@/assets/css/public.css'

import entrance from '@/pages/Entrance'
import home from '@/pages/Home/Home'
import SucJump from '@/components/Jump/Success'
import ErrorJump from '@/components/Jump/Error'
import billingSmcg from '@/pages/Billing/BillingSmcg'
import billingSmcgLogistics from '@/pages/Billing/BillingSmcgLogistics'
import billingSmcgTruckLoad from '@/pages/Billing/BillingSmcgTruckLoad'
import billingSmmh from '@/pages/Billing/BillingSmmh'
import billingSmmhLogistics from '@/pages/Billing/BillingSmmhLogistics'
import billingSmmhTruckLoad from '@/pages/Billing/BillingSmmhTruckLoad'
import billingSale from '@/pages/Billing/BillingSale'
import accountSure from '@/pages/Settlement/AccountSure'
import uploadSettle from '@/pages/Settlement/UploadSettle'
import settlements from '@/pages/Settlement/Settlements'
import inspection from '@/pages/Inspection/Inspection'
import stockIn from '@/pages/StockIn/StockIn'
import stockOut from '@/pages/StockOut/StockOut'
import stockOutAdd from '@/pages/StockOut/StockOutAdd'
import delivery from '@/pages/Delivery/Delivery'
import addLogistics from '@/pages/Delivery/AddLogistics'
import billingSelect from '@/pages/Billing/BillingSelect'


//销售
import SaleList from '@/pages/sale/salelist'
import SaleOrderdetail from '@/pages/sale/orderdetail'
import SaleOrderdetailData from '@/pages/sale/orderdetaildata'
import SaleOrdertrack from '@/pages/sale/ordertrack'
import saleSearch from '@/pages/sale/search'
//采购
import BuyList from '@/pages/buy/buylist'

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
//登录页面
import Login from '@/pages/login'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/my_app/',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      meta:{
        title:'登录'
      }
    },
    {
      path: '/entrance',
      name: 'entrance',
      component: entrance,
      meta:{
        title:'纸元ERP'
      }
    },
    {
      path: '/home',
      name: '首页',
      component: home,
      meta:{
        title:'首页'
      }
    },
    {
      path: '/SucJump',
      name: '成功跳转',
      component: SucJump,
      meta:{
        title:'操作成功'
      }
    },
    {
      path: '/ErrorJump',
      name: '失败跳转',
      component: ErrorJump,
      meta:{
        title:'操作失败'
      }
    },
    {
      path: '/billingSmcg',
      name: '采购订单发起-上门采购',
      component: billingSmcg,
      meta:{
        title:'采购订单发起-上门采购'
      }
    },
    {
      path: '/billingSmcgLogistics',
      name: '采购订单开单-上门采购-采购物流录入',
      component: billingSmcgLogistics,
      meta:{
        title:'采购订单开单-上门采购-采购物流录入'
      }
    },
    {
      path: '/billingSmcgTruckLoad',
      name: '采购订单开单-上门采购-采购装车录入',
      component: billingSmcgTruckLoad,
      meta:{
        title:'采购订单开单-上门采购-采购装车录入'
      }
    },
    {
      path: '/billingSmmh',
      name: '采购订单开单-上门卖货',
      component: billingSmmh,
      meta:{
        title:'采购订单开单-上门卖货'
      }
    },
    {
      path: '/billingSmmhLogistics',
      name: '采购订单开单-上门卖货-采购物流录入',
      component: billingSmmhLogistics,
      meta:{
        title:'采购订单开单-上门卖货-采购物流录入'
      }
    },
    {
      path: '/billingSelect',
      name: '采购订单发起',
      component: billingSelect,
      meta:{
        title:'采购订单发起'
      }
    },
    {
      path: '/billingSmmhTruckLoad',
      name: '采购订单开单-上门卖货-采购装车录入',
      component: billingSmmhTruckLoad,
      meta:{
        title:'采购订单开单-上门卖货-采购装车录入'
      }
    },
    {
      path: '/billingSale',
      name: '销售订单开单',
      component: billingSale,
      meta:{
        title:'销售订单开单'
      }
    },
    {
      path:'/settlements',
      name:'上传结算清单',
      component:settlements,
      meta:{
        title:'上传结算清单'
      }
    },
    {
      path: '/uploadSettle',
      name: '上传结算清单',
      component: uploadSettle,
      meta:{
        title:'上传结算清单'
      }
    },
    {
      path: '/accountSure',
      name: '结算确认',
      component: accountSure,
      meta:{
        title:'结算确认'
      }
    },
    {
      path:'/inspection',
      name:'质检结果录入',
      component:inspection,
      meta:{
        title:'质检结果录入'
      }
    },
    {
      path:'/stockIn',
      name:'入库',
      component:stockIn,
      meta:{
        title:'入库'
      }
    },
    {
      path:'/stockOut',
      name:'出库',
      component:stockOut,
      meta:{
        title:'出库'
      }
    },
    {
      path:'/stockOutAdd',
      name:'出库',
      component:stockOutAdd,
      meta:{
        title:'出库'
      }
    },
    {
      path:'/delivery',
      name:'发货',
      component:delivery,
      meta:{
        title:'发货'
      }
    },
    {
      path:'/addLogistics',
      name:'添加物流',
      component:addLogistics,
      meta:{
        title:'添加物流'
      }
    },



    //——————————————————————————————————

    //销售
    {
      path: '/salelist',
      name: '销售订单',
      component: SaleList,
      meta: {
        title: '销售订单',
        keepAlive: true 
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
        path: '',
        component: SaleOrderdetailData,
        meta: {
          title: '订单详情',
          keepAlive: true 
        }
      }, {
        path: 'orderdetaildata',
        name: 'SaleOrderdetailData',
        component: SaleOrderdetailData,
        meta: {
          title: '订单详情',
          keepAlive: true 
        },
      }, {
        path: 'ordertrack',
        name: 'SaleOrdertrack',
        component: SaleOrdertrack,
        meta: {
          title: '订单追踪',
          keepAlive: true 
        },
      }]
    },
    //采购
    {
      path: '/buylist',
      name: '采购订单',
      component: BuyList,
      meta: {
        title: '采购订单',
        keepAlive: true 
      }
    },
   
    //质检
    {
      path: '/checklist',
      name: '质检单',
      component: Checklist,
      meta: {
        title: '质检单',
        keepAlive: true 
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
        title: '质检单详情',
        keepAlive: true 
      }
    },
    //结算
    {
      path: '/settlelist',
      name: '结算单',
      component: Settlelist,
      meta: {
        title: '结算单',
        keepAlive: true 
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
        title: '结算单详情',
        keepAlive: true 
      }
    },
    //入库
    {
      path: '/instoragelist',
      name: '入库单',
      component: Instoragelist,
      meta: {
        title: '入库单',
        keepAlive: true 
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
        title: '入库单详情',
        keepAlive: true 
      }
    },
    //出库
    {
      path: '/outstoragelist',
      name: '出库单',
      component: Outstoragelist,
      meta: {
        title: '出库单',
        keepAlive: true 
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
        title: '出库单详情',
        keepAlive: true 
      }
    },
    //发货
    {
      path: '/sendlist',
      name: '发货单',
      component: Sendlist,
      meta: {
        title: '发货单',
        keepAlive: true 
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
        title: '发货单详情',
        keepAlive: true 
      }
    },
    {
      path: '/notfound',
      name: 'Notfound',    
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
