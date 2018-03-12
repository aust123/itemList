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
	params.sign = Serialize(params);
	return new Promise((resolve, reject) => {
		axios.post(url, params)
			.then(response => {
				resolve(response.data);
			}, err => {
				reject(err);
				console.log(err.data)
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
	Login() {
		return fetch('https://two.zhiqunale.cn/paper/driver/get_wxuser_info')
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
		return fetch('https://two.zhiqunale.cn/paper/user/send_code_func', {
			tellphone: tellphone
		})
	},

	/**
	 * 接单
	 */
	DriverAppoint() {
		return fetch('https://two.zhiqunale.cn/paper/driver/driver_appoint_user_need')
	},

	/**
	 * 获取历史预约
	 */
	GetHistoryAppoint() {
		return fetch('https://two.zhiqunale.cn/paper/driver/get_history_appoint')
	},

	/**
	 * 司机取消预约
	 */
	DriverCancelAppoint(id) {
		return fetch('https://two.zhiqunale.cn/paper/driver/driver_cancel_appoint', {
			sportId: id
		})
	},

	/**
	 * 司机申请平台介入
	 */
	PlatformHelp(id) {
		return fetch('https://two.zhiqunale.cn/paper/driver/driver_apply_platform_help', {
			travelId: id
		})
	},

	/**
	 * 司机发布行程
	 */
	PublishWay(id) {
		return fetch('https://two.zhiqunale.cn/paper/driver/driver_publish_way', {
			travelId: id
		})
	},

	/**
	 * 获取我的发布
	 */
	GetMySend(id) {
		return fetch('https://two.zhiqunale.cn/paper/driver/get_my_send_info', {
			userId: id
		})
	},

	/**
	 * 取消我的发布
	 */
	CancelMySend(id) {
		return fetch('https://two.zhiqunale.cn/paper/driver/cancel_my_send', {
			userId: id
		})
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
	MySebdDetail(params) {
		return fetch('https://two.zhiqunale.cn/paper/driver/my_send_detail')
	},

	/**
	 * 同意或拒绝用的预约
	 */
	AgreeRefuseUserAppoint() {
		return fetch('https://two.zhiqunale.cn/paper/driver/agree_or_refuse_user_appoint')
	},
	/**
	 * 同意或拒绝用的取消预约
	 */
	AgreeRefuseUserCancel() {
		return fetch('https://two.zhiqunale.cn/paper/driver/agree_or_refuse_user_cancel')
	}
}