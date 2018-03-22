import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../components/home.vue'
import buy from '../components/buy/buy.vue'
import sale from '../components/sale/sale.vue'
import message from '../components/message/message.vue'
import order from '../components/order/order.vue'
import my from '../components/my/my.vue'
import Password from '../components/my/Password'
import About from '../components/my/About'
import Certification from '../components/my/Certification'
import Cocertification from '../components/my/Cocertification'
import CocertificationWrite from '../components/my/CocertificationWrite'
import Myteam from '../components/my/Myteam'
import FundManage from '../components/my/FundManage'
import OrderMemo from '../components/my/OrderMemo'
import aroundMall from '../components/aroundMall/aroundMall.vue'
import historyMsg from '../components/message/historyMsg.vue'
import msgDetail from '../components/message/msgDetail.vue'

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
			path: '/historyMsg',
			name: '历史消息',
			component: historyMsg
		},
		{
			path: '/msgDetail',
			name: '消息详情',
			component: msgDetail
		},
		{
			path: '/Password',
			name: '设置支付密码',
			component: Password
		},
		{
			path: '/About',
			name: '关于纸去哪了',
			component: About
		},
		{
			path: '/Certification',
			name: '实名认证',
			component: Certification
		},
		{
			path: '/Cocertification',
			name: '企业认证',
			component: Cocertification
		},
		{
			path: '/CocertificationWrite',
			name: '企业认证',
			component: CocertificationWrite
		},
		{
			path: '/Myteam',
			name: '我的团队',
			component: Myteam
		},
		{
			path: '/OrderMemo',
			name: '订单备忘录',
			component: OrderMemo
		},
		{
			path: '/FundManage',
			name: '资金管理',
			component: FundManage
		}
	]
})
// page跳转后title改变
router.afterEach(function(to) {
	// console.log(to);
	document.title = to.name
})
export default router