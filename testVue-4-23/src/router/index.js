import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../vuex/store'

import home from '../components/home.vue'
import buy from '../components/buy/buy.vue'
import sale from '../components/sale/sale.vue'
import message from '../components/message/message.vue'
import order from '../components/order/order.vue'
import my from '../components/my/my.vue'
import aroundMall from '../components/aroundMall/aroundMall.vue'
import aroundDetail from '../components/aroundMall/aroundDetail.vue'
import supply from '../components/supply/supply.vue'
import productDetail from '../components/supply/productDetail.vue'
import purchaseIntention from '../components/supply/purchaseIntention.vue'
import purchaseSuc from '../components/supply/purchaseSuc.vue'
import myPurchase from '../components/myPurchase/myPurchase.vue'
import intentionList from '../components/myPurchase/intentionList.vue'
import purchaseList from '../components/myPurchase/purchaseList.vue'
import inquiryMall from '../components/inquiryMall/inquiry.vue'
import myQuote from '../components/myQuote/myQuote.vue'
import onoffer from '../components/myQuote/onoffer.vue'
import soldout from '../components/myQuote/soldout.vue'
//新增路由组件
import quoteInfo from '../components/myQuote/quoteInfo.vue'

import publishSupply from '../components/publish/supply.vue'

import publishSupplyEdit from '../components/publish/supply_edit.vue'

import attention from '../components/attention/attention.vue'
import attentionProduct from '../components/attention/attentionProduct.vue'
import attentionShop from '../components/attention/attentionShop.vue'
import chatHistory from '../components/attention/chatHistory.vue'
import keySell from '../components/keySell/keySell.vue'
import selectFirm from '../components/keySell/selectFirm.vue'
import quotePrice from '../components/inquiryMall/quotePrice.vue'
import quoteDetail from '../components/inquiryMall/quoteDetail.vue'
import supplier from '../components/becomeSupplier/becomeSupplier.vue'
import shopDetail from '../components/shop/shopDetail.vue'
import shop from '../components/shop/shop.vue'
import keySellFirm from '../components/keySell/keySell_firm.vue'
import myAddress from '../components/address/myAddress.vue'

import addAddress from '../components/address/addAddress.vue'

import supplyPrice from '../components/publish/supply_price.vue'

import hotmill from '../components/keySell/hotmill.vue'

import myLogistics from '../components/logistics/myLogistics.vue'
import publishLogistics from '../components/logistics/publish_logistics.vue'
import hitchhiking from '../components/logistics/hitchhiking.vue'
import appointment from '../components/logistics/appointment.vue'
import logisticsdetail from '../components/logistics/logisticsdetail.vue'
import logisticsOrder from '../components/logistics/logistics_order.vue'
import historyOrder from '../components/order/history_order.vue'
import evaluate from '../components/order/evaluate.vue'
import orderDetail from '../components/order/orderDetail.vue'
import remark from '../components/order/remark.vue'
import account from '../components/order/account.vue'
import refund from '../components/order/refund.vue'
import driverMsg from '../components/order/driverMsg.vue'
import ious from '../components/ious/ious.vue'
//消息
import historyMsg from '../components/message/historyMsg'
import msgDetail from '../components/message/msgDetail'
import supplymsg from '../components/message/supplymsg'
//个人中心
import Password from '../components/my/Password'
import About from '../components/my/About'
import Certification from '../components/my/Certification'
import Cocertification from '../components/my/Cocertification'
import CocertificationWrite from '../components/my/CocertificationWrite'
import CocertificationShow from '../components/my/CocertificationShow'
import Myteam from '../components/my/Myteam'
import FundManage from '../components/my/FundManage'
import Enchashment from '../components/my/Enchashment'
import OrderMemo from '../components/my/OrderMemo'
import Cashdetail from '../components/my/Cashdetail'
import Details from '../components/my/Details'
import Mybankcard from '../components/my/Mybankcard'
import AddBackcard from '../components/my/AddBackcard'
import BankDeposit from '../components/my/BankDeposit'
import Editprofile from '../components/my/Editprofile'
import Storeinfo from '../components/my/Storeinfo'
import Editstore from '../components/my/Editstore'
import Serverpaper from '../components/my/Serverpaper'
import Mainpaper from '../components/my/Mainpaper'
import Login from '../components/my/Login'
import Register from '../components/my/Register'
import Findpwd from '../components/my/Findpwd'
import Refund from '../components/my/Refund'
import myrefund from '../components/my/myrefund'
import myapply from '../components/my/myapply'
import RefundDetail from '../components/my/RefundDetail'
import Share from '../components/my/Share'
import province from '../components/province/province'
import detailAddr from '../components/address/detailAddr'

Vue.use(VueRouter)

let router = new VueRouter({
	//mode: 'history',
	routes: [{
			path: '/',
			//redirect:'/home'
			component: home,
			children: [{
				path: '/',
				component: buy
			}]
		},
		{
			path: '/home',
			name: 'home',
			component: home,
			children: [{
					path: '/',
					name: '我要买',
					component: buy
				},
				{
					path: '/buy',
					name: '我要买',
					component: buy
				},
				{
					path: '/sale',
					name: '我要卖',
					component: sale
				},
				{
					path: '/message',
					name: '消息',
					component: message
				},
				{
					path: '/order',
					name: '订单',
					component: order
				},
				{
					path: '/my',
					name: '我的',
					component: my
				}
			]
		},
		{
			path: '/aroundMall',
			name: '周边商城',
			component: aroundMall
		},
		{
			path: '/aroundDetail',
			name: '商品详情',
			component: aroundDetail
		},
		{
			path: '/supply',
			name: '供应大厅',
			component: supply
		},
		{
			path: '/productDetail',
			name: '商品详情',
			component: productDetail
		},
		{
			path: '/purchaseIntention',
			name: '提交采购意向',
			component: purchaseIntention
		},
		{
			path: '/purchaseSuc',
			name: '我的采购',
			component: purchaseSuc
		},
		{
			path: '/myPurchase',
			name: '我的采购',
			component: myPurchase,
			children: [{
					path: '/',
					name: '我的采购意向',
					component: intentionList
				},
				{
					path: '/myPurchase/intentionList',
					name: '我的采购意向',
					component: intentionList
				},
				{
					path: '/myPurchase/purchaseList',
					name: '我发布的采购',
					component: purchaseList
				}
			]
		},
		{
			path: '/inquiryMall',
			name: '求购大厅',
			component: inquiryMall
		},
		{
			path: '/quotePrice',
			name: '报价',
			component: quotePrice
		},
		{
			path: '/quoteDetail',
			name: '报价详情',
			component: quoteDetail
		},
		{
			path: '/myQuote',
			name: '我的供应',
			component: myQuote,
			children: [{
					path: '/',
					name: '我的供应',
					component: onoffer
				},
				{
					path: '/myQuote/onoffer',
					name: '我的供应-出售中',
					component: onoffer
				},
				{
					path: '/myQuote/soldout',
					name: '我的供应-已下架',
					component: soldout
				},

			]
		},
		{
			path: '/quoteInfo',
			name: '供应信息',
			component: quoteInfo
		},
		{
			path: '/publish',
			name: '发布供应',
			meta: {
				keepAlive: true
			},
			component: publishSupply
		},
		{
			path: '/publishEdit',
			name: '编辑供应',
			meta: {
				keepAlive: true
			},
			component: publishSupplyEdit
		},
		{
			path: '/attention',
			name: '关注',
			component: attention,
			children: [{
					path: '/attention',
					name: '关注',
					component: attentionProduct
				},
				{
					path: '/attention/attentionProduct',
					name: '关注的商品',
					component: attentionProduct
				},
				{
					path: '/attention/attentionShop',
					name: '关注的店铺',
					component: attentionShop
				},
				{
					path: '/attention/chatHistory',
					name: '聊天记录',
					component: chatHistory
				}
			]
		},
		{
			path: '/hotmill',
			name: '热门纸厂',
			component: hotmill
		},
		{
			path: '/keySell',
			name: '一键卖货',
			component: keySell
		},
		{
			path: '/keySellFirm',
			name: '一键卖货',
			component: keySellFirm
		},
		{
			path: '/selectFirm',
			name: '选择贸易公司',
			component: selectFirm
		},
		{
			path: '/supplier',
			name: '成为供应商',
			component: supplier
		},
		{
			path: '/shopDetail',
			name: '店铺详情',
			component: shopDetail
		},
		{
			path: '/shop',
			name: '店铺',
			component: shop
		},
		{
			path: '/myAddress',
			name: '我的地址',
			component: myAddress,
			meta: {
				auth: true // 这里设置，当前路由需要校验
			}
		},
		{
			path: '/addAddress',
			name: '添加地址',
			component: addAddress
		},
		{
			path: '/supplyPrice',
			name: '货品价格',
			component: supplyPrice
		},
		{
			path: '/myLogistics',
			name: '我的物流需求',
			component: myLogistics
		},
		{
			path: '/publishLogistics',
			name: '发布需求',
			component: publishLogistics
		},		
		{
			path: '/logisticsdetail',
			name: '需求详情',
			component: logisticsdetail
		},
		{
			path: '/hitchhiking',
			name: '找顺路车',
			component: hitchhiking
		},
		{
			path: '/appointment',
			name: '历史预约',
			component: appointment
		},
		{
			path: '/logisticsOrder',
			name: '物流订单',
			component: logisticsOrder
		},
		{
			path: '/historyOrder',
			name: '历史订单',
			component: historyOrder
		},
		{
			path: '/evaluate',
			name: '评价',
			component: evaluate
		},
		{
			path: '/orderDetail',
			name: '订单详情',
			component: orderDetail
		},
		{
			path: '/remark',
			name: '订单备注',
			component: remark
		},
		{
			path: '/account',
			name: '去结算',
			component: account
		},
		{
			path: '/refund',
			name: '申请退款',
			component: refund,
			meta: {
				auth: true // 这里设置，当前路由需要校验
			}
		},
		{
			path: '/driverMsg',
			name: '上传司机信息',
			component: driverMsg
		},
		{
			path: '/ious',
			name: '小猴白条',
			component: ious
		},
		{
			path: '/historyMsg',
			name: '历史消息',
			component: historyMsg
		},
		{
			path: '/supplymsg',
			name: '供应消息',
			component: supplymsg
		},
		{
			path: '/msgDetail',
			name: '消息详情',
			component: msgDetail
		},
		{
			path: '/Password',
			name: '设置支付密码',
			component: Password,
			meta: {
				auth: true // 这里设置，当前路由需要校验
			}
		},
		{
			path: '/About',
			name: '关于纸去哪了',
			component: About
		},
		{
			path: '/Certification',
			name: '实名认证',
			component: Certification,
			meta: {
				auth: true // 这里设置，当前路由需要校验
			}
		},
		{
			path: '/Cocertification',
			name: '企业认证',
			component: Cocertification,
			meta: {
				auth: true // 这里设置，当前路由需要校验
			}
		},
		{
			path: '/CocertificationWrite',
			name: 'CocertificationWrite',
			component: CocertificationWrite
		},
		{
			path: '/CocertificationShow',
			name: 'CocertificationShow',
			component: CocertificationShow
		},
		{
			path: '/Myteam',
			name: '我的团队',
			component: Myteam,
			meta: {
				auth: true // 这里设置，当前路由需要校验
			}
		},
		{
			path: '/OrderMemo',
			name: '订单备忘录',
			component: OrderMemo,
			meta: {
				auth: true // 这里设置，当前路由需要校验
			}
		},
		{
			path: '/FundManage',
			name: '资金管理',
			component: FundManage,
			meta: {
				auth: true // 这里设置，当前路由需要校验
			}
		},
		{
			path: '/Cashdetail',
			name: '提现明细',
			component: Cashdetail
		},
		{
			path: '/Details',
			name: '明细详情',
			component: Details
		},
		{
			path: '/Mybankcard',
			name: '我的银行卡',
			component: Mybankcard,
			meta: {
				auth: true // 这里设置，当前路由需要校验
			}
		},
		{
			path: '/AddBackcard',
			name: '添加银行卡',
			component: AddBackcard
		},
		{
			path: '/BankDeposit',
			name: '选择银行卡',
			component: BankDeposit
		},
		{
			path: '/Editprofile',
			name: '编辑个人资料',
			component: Editprofile,
			meta: {
				auth: true // 这里设置，当前路由需要校验
			}
		},
		{
			path: '/Storeinfo',
			name: '店铺资料',
			component: Storeinfo,
			meta: {
				auth: true // 这里设置，当前路由需要校验
			}
		},
		{
			path: '/Editstore',
			name: '编辑店铺资料',
			component: Editstore
		},
		{
			path: '/Mainpaper',
			name: '选择主营纸厂',
			component: Mainpaper
		},
		{
			path: '/Serverpaper',
			name: '选择服务纸厂',
			component: Serverpaper
		},
		{
			path: '/Login',
			name: '登录',
			component: Login
		},
		{
			path: '/Findpwd',
			name: '找回密码',
			component: Findpwd
		},
		{
			path: '/Register',
			name: '注册',
			component: Register
		},
		{
			path: '/Enchashment',
			name: '提现',
			component: Enchashment
		},
		{
			path: '/Refund',
			name: '退款处理',
			component: Refund,
			children: [{
					path: '/',
					name: 'myrefund',
					component: myrefund
				},
				{
					path: '/myapply',
					name: 'myapply',
					component: myapply
				},
				{
					path: '/myrefund',
					name: 'myrefund',
					component: myrefund
				}
			]
		},
		{
			path: '/RefundDetail',
			name: '退款详情',
			component: RefundDetail
		},
		{
			path: '/Share',
			name: '分享',
			component: Share,
			meta: {
				auth: true // 这里设置，当前路由需要校验
			}
		},
		{
			path: '/province',
			name: '选择省份',
			component: province
		},
		{
			path: '/detailAddr',
			name: '详细地址',
			component: detailAddr
		}
	]
})

router.beforeEach((to, from, next) => {
	if(to.matched.some(m => m.meta.auth)) {
		// 对路由进行验证
		if(store.state.hasLogin) { // 已经登陆
			next();
		} else {
			// 未登录,跳转到登陆页面，并且带上 将要去的地址，方便登陆后跳转。
			next({
				path: '/Login',
				query: {
					referrer: to.fullPath
				}
			});
		}
	} else {
		next();
	}
})

// page跳转后title改变
router.afterEach(function(to) {
	// console.log(to);
	document.title = to.name
})

export default router