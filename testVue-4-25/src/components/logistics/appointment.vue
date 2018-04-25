<template>
  <div>
    <div class="return_prelevel">
      <a class="return_icon" onclick="window.history.go(-1)">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </a>
      历史预约
    </div>
    <!--<div class="logistics_form">
      <p>
        <label>出发地：</label>
        <b>合肥</b>
      </p>
      <p>
        <label>目的地：</label>
        <b>杭州</b>
      </p>
      <p>
        <label>发货日期：</label>
        2017.10.11
      </p>
      <p>
        <label>货物品类：</label>
        国废A级纸
      </p>
      <p>
        <label>货物重量（吨）：</label>
        1000
      </p>
      <p>
        <label>联系方式：</label>
        1983242323
      </p>
      <p>
        <label>备注：</label>
        <span>山东省山东省山东省山东省山东省山东省山东省山东省山东省山东省山东省山东省山东省山东省</span>
      </p>
    </div>-->
    <div class="hitchhiking">
      <ul class="hitchhiking_list">
        <li v-for="item in appointList">
          <h3>
            <img :src="item.d_headurl" alt=""/>
           {{item.d_name}}
            <a class="phone_driver" :href="'tel:'+item.d_phone"><img src="../../assets/img/wuliu_phone_p.png"/>联系</a>
          </h3>
          <h4>
            {{item.dln_start_area_city}} <img src="../../assets/img/wuliu_jiantou.png" alt=""/> {{item.dln_end_area_city}}
          <span class="driver_state" v-if="item.ua_driver_advice==1">同意</span>
           <span class="driver_state" v-else-if="item.ua_driver_advice==2">不同意</span>
            <span class="driver_state" v-else-if="item.ua_driver_advice==3">司机确认中</span>
             <span class="driver_state" v-else-if="item.ua_driver_advice==4">平台介入中</span>
          </h4>
          <p>出发日期：{{item.dln_start_date}}</p>
          <p v-if="item.dln_is_mianyi==1">报价（元）：{{item.dln_fee}}</p>
          <p v-else-if="item.dln_is_mianyi==2">报价（元）：面议</p>
          <p>承载量（吨）：{{item.dln_can_weight}}</p>
          <!--<p>
            备注：
            <span>山东省山东省山东省山东省山东省山东省山东省山东省山东省</span>
          </p>-->
          <!--<div>
            <a>联系</a>
            <a>同意</a>
            <a>拒绝</a>
          </div>-->
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script>
	export default{
		data(){
			return{
				appointList:[]
			}
		},
		mounted(){
			var url = 'https://two.zhiqunale.cn/paper/driverneed/usergetdriverhistoryappointment';
				var params = {
					user_id: this.$store.state.loginUser.uid,
					device_number: this.$store.state.loginUser.device_number,					
					page: 1,
					size: 10
				}
				this.post(params, url, this.getAppointmentBack)
		},
		methods:{
			getAppointmentBack(data){
				if(data.status_code==10000){
					for(var i in data.data) {
						data.data[i].dln_start_date = this.getLocalTime(data.data[i].dln_start_date)
					}
					this.appointList=data.data;
				}
			}
		}
	}
</script>

<style scoped>
  .hitchhiking_list h3{
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 30px;
  }
  .hitchhiking_list li{
    margin-bottom: 0;
    margin-top: 14px;
  }
  .hitchhiking_list p span{
    display: inline-block;
    width: 83%;
    vertical-align: text-top;
  }
  .hitchhiking_list div{
    padding: 15px 30px;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    text-align: right;
  }
  .hitchhiking_list div a{
    width: 158px;
    height: 59px;
    border: 2px solid #ff5000;
    border-radius: 10px;
    line-height: 59px;
    color: #ff5000;
    margin-left: 20px;
  }
  .phone_driver img{
  	vertical-align: -6px;
  }
  .hitchhiking_list h4{
  	margin-top: 0;
  }
  .hitchhiking_list h4 img{
  	width: 50px;
  	height: 16px;
  }
  .driver_state{
  	float: right;
  	color: #208DF0;
  	font-size: 30px;
  }
</style>
