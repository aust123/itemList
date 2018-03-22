import axios from 'axios';
import qs from 'qs';
//配置axios

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.default.baseURL = 'https://two.zhiqunale.cn';

//POST传参序列化
axios.interceptors.request.use(function(config) {
	// Do something before request is sent
	if(config.method === 'post') {
		config.data = qs.stringify(config.data);
	}
	console.log(config)
	return config;
}, function(error) {
	// Do something with request error
	return Promise.reject(error);
});
//返回状态判断
axios.interceptors.response.use((res) => {
	if(!res.data.success) {
		return Promise.reject(res);
	}
	return res;
}, (error) => {
	return Promise.reject(error);
});

export function fetch(url, params) {
	if(params) {
		if(!params.pic || !params.code) {
			params.sign = Serialize(params);
		}
	}
	return new Promise((resolve, reject) => {
		axios.post(url, params)
			.then(response => {
				resolve(response.data);
			}, err => {
				reject(err);				

			})
			.catch((error) => {
				reject(error)
			})
	})
}
//序列化请求参数
function Serialize(arr) {
	var secret = "key=pass4zhiqunale";
	var param = [];
	for(var k in arr) {
		param.push(k)
	}
	param.sort();
	var str = '';
	for(var key in param) {
		str += param[key] + '=' + arr[param[key]] + '&'
	}
	str += secret;
	return md5(str);
}
//导出后台请求接口
export default {

	/**
	 * 微信获取用户信息
	 */
	Login(params) {
		return fetch('https://two.zhiqunale.cn/paper/driver/get_wxuser_info', params)
	},
	//  Login(params) {
	//      return fetch('/users/api/userLogin', params)
	//  },

	/**
	 * 获取用户发布的需求
	 */
	GetReleaseRequirement(params) {
		return fetch('https://two.zhiqunale.cn/paper/driver/get_user_needs', params)
	},

	/**
	 * 发送注册验证码
	 */
	RegistVerifiCode(tellphone) {
		return fetch('https://two.zhiqunale.cn/paper/user/send_code_func', tellphone)
	},
	/**
	 *上传照片
	 * */
	Uploadimg(params) {
		return fetch('https://two.zhiqunale.cn/paper/img/receivePcFile', params)
	},
	/**
	 *提交实名认证
	 * */
	Authentication(params) {
		return fetch('https://two.zhiqunale.cn/Paper/DriverCenter/driver_authentication', params)
	},

	/**
	 *获取司机实名认证信息
	 * */
	GetAuthentication(params) {
		return fetch('https://two.zhiqunale.cnPaper/DriverCenter/driver_obtaining_authentication_information', params)
	},
	/**
	 * 接单
	 */
	DriverAppoint(params) {
		return fetch('https://two.zhiqunale.cn/paper/driver/driver_appoint_user_need', params)
	},

	/**
	 * 获取历史预约
	 */
	GetHistoryAppoint(params) {
		return fetch('https://two.zhiqunale.cn/paper/driver/get_history_appoint', params)
	},

	/**
	 * 司机取消预约
	 */
	DriverCancelAppoint(id) {
		return fetch('https://two.zhiqunale.cn/paper/driver/driver_cancel_appoint', id)
	},

	/**
	 * 司机申请平台介入
	 */
	PlatformHelp(params) {
		return fetch('https://two.zhiqunale.cn/paper/driver/driver_apply_platform_help', params)
	},

	/**
	 * 司机发布行程
	 */
	PublishWay(params) {
		return fetch('https://two.zhiqunale.cn/paper/driver/driver_publish_way', params)
	},

	/**
	 * 获取我的发布
	 */
	GetMySend(params) {
		return fetch('https://two.zhiqunale.cn/paper/driver/get_my_send_info', params)
	},

	/**
	 * 取消我的发布
	 */
	CancelMySend(params) {
		return fetch('https://two.zhiqunale.cn/paper/driver/cancel_my_send', params)
	},

	/**
	 * 修改我的发布信息
	 */
	ModifyMySend(id) {
		return fetch('https://two.zhiqunale.cn/paper/driver/modify_my_send', {
			userId: id
		})
	},

	/**
	 * 获取我发布的信息详情
	 */
	MySendDetail(params) {
		return fetch('https://two.zhiqunale.cn/paper/driver/my_send_detail', params)
	},

	/**
	 * 同意或拒绝用户的预约
	 */
	AgreeRefuseUserAppoint(params) {
		return fetch('https://two.zhiqunale.cn/paper/driver/agree_or_refuse_user_appoint', params)
	},
	/**
	 * 同意或拒绝用户的取消预约
	 */
	AgreeRefuseUserCancel(params) {
		return fetch('https://two.zhiqunale.cn/paper/driver/agree_or_refuse_user_cancel', params)
	},
	/*
	 
	 * 获取银行卡列表*/
	GetBankNameList(params) {
		return fetch('https://two.zhiqunale.cn/paper/common/getbanknamelist', params)
	},
	/*	 
	 * 司机添加银行卡*/
	AddBankNameList(params, ) {
		return fetch('https://two.zhiqunale.cn/Paper/DriverCenter/driver_adding_bank_cards', params)
	},
	/*
	 * 司机删除银行卡*/
	DeleteBankNameList(params) {
		return fetch('https://two.zhiqunale.cn/Paper/DriverCenter/driver_del_bankcard', params)
	},
	/*
	 * 获取银行卡列表*/
	GetBankList(params) {
		return fetch('https://two.zhiqunale.cn/Paper/DriverCenter/driver_bankcard_list', params)
	},
	/*
	 * 设置支付密码*/
	SetPassWord(params) {
		return fetch('https://two.zhiqunale.cn/Paper/DriverCenter/driver_paypasswrod', params)
	},
	/*
	 * 获取个人资金信息*/
	GetMyFund(params) {
		return fetch('https://two.zhiqunale.cn/Paper/DriverCenter/driver_fund_management', params)
	},
	/*
	 * 获取认证信息*/
	GetCertifateInfo(params) {
		return fetch('https://two.zhiqunale.cn/Paper/DriverCenter/driver_obtaining_authentication_information', params)
	},
	/*
	 * 提现申请*/
	ToApplyCash(params) {
		return fetch('https://two.zhiqunale.cn/Paper/DriverCenter/driver_withdrawals', params)
	},
	/*
	 * 修改昵称、头像*/
	EditName() {
		return fetch('https://two.zhiqunale.cn/Paper/DriverCenter/driver_modify_data')
	},
	/*
	 * 资金流水列表*/
	GetFundList() {
		return fetch('https://two.zhiqunale.cn/Paper/DriverCenter/driver_presentation_details')
	},
	/*
	 
	 * 获取物流订单列表*/
	GetLogisticsList(params) {
		return fetch('https://two.zhiqunale.cn/paper/driver/get_my_logistic_orders', params)
	},
	/*
	 
	 * 司机确认收货*/
	DriverSureRecive(params) {
		return fetch('https://two.zhiqunale.cn/paper/driver/driver_click_receive', params)
	},
	/*
	 
	 * 司机确认到货*/
	DriverSureArrive(params) {
		return fetch('https://two.zhiqunale.cn/paper/driver/driver_click_arrival', params)
	}
}