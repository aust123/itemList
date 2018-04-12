<template>
  <div>
    <div class="return_prelevel">
      <a class="return_icon" onclick="window.history.go(-1)">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </a>
      找顺路车
      <router-link to="/appointment" class="logistics_order">历史预约</router-link>
    </div>
    <div class="hitchhiking">
      <div class="select_area">
        <a>
          <x-address @click.native="selsectArea1" class="address_select" title=" "
                     v-model="value1" raw-value :list="addressData1"
                     hide-district placeholder="出发地">
          </x-address>
          <cell class="address_show" :title="title1"
                :value="getName(value1)">
          </cell>
        </a>
        <a>
          <x-address @click.native="selsectArea2" class="address_select" title=" "
                     v-model="value2" raw-value :list="addressData2"
                     hide-district placeholder="目的地">
          </x-address>
          <cell class="address_show" :title="title2"
                :value="getName(value2)">
          </cell>
        </a>
        <datetime class="dateshow" v-model="valuedate"></datetime>
        <button>筛选</button>
      </div>
      <p class="tip">
        <img src="../../assets/img/wuliu_tishi.png" alt=""/>
        预约前请先打电话联系对方！
      </p>
      <ul class="hitchhiking_list">
        <li>
          <h3>
            <img src="../../assets/img/my_team_touxiang2.png" alt=""/>
            李师傅
          </h3>
          <h4>
            合肥 <img src="../../assets/img/wuliu_jiantou.png" alt=""/> 杭州
          </h4>
          <p>出发日期：2017.10.11</p>
          <p>承载量（吨）：30</p>
          <p>费用（元）：200</p>
          <div>
            <a>
              <img src="../../assets/img/wuliu_phone.png" alt=""/>联系
            </a>
            <a>
              <img src="../../assets/img/wuliu_appointment.png" alt=""/>预约
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { Datetime,XAddress,Cell, ChinaAddressV4Data,Value2nameFilter as value2name  } from 'vux'
  export default{
    components: {
      XAddress,
      Cell,
      Datetime
    },
    created:function(){
      $('.address_show').attr('title','出发地');
    },
    data:function(){
      return{
        active: false,
        value1: [],
        title1:'出发地',
        value2:[],
        title2:'目的地',
        addressData1: ChinaAddressV4Data,
        addressData2: ChinaAddressV4Data,
        showAddress: false,
        valuedate:'出发日期'
      }
    },
    methods:{
      doShowAddress :function() {
        this.showAddress = true;
        setTimeout(function(){
          this.showAddress = false;
        }, 500)
      },
      getName :function(value) {
        var addr=value2name(value, ChinaAddressV4Data).split(' ')[1];
        return addr;
      },
      selsectArea1:function(){
        this.title1='';
      },
      selsectArea2:function(){
        this.title2='';
      }
    }
  }
</script>

<style scoped>
  .select_area{
    padding: 30px 0;
  }
  .select_area a{
    position: relative;
    width: 130px;
    display: inline-block;
    height: 46px;
    overflow: hidden;
  }
  .address_select{
    position: absolute;
    top: 5px;
    left: 0;
    opacity: 0;
    width: 78%;
    height: 100%;
    z-index: 100;
  }
  .address_show{
    position: absolute;
    top: 5px;
    left: 0;
    width: 78%;
    height: 100%;
  }
  .select_area .dateshow{
    position: relative;
    top: 10px;
    width: auto;
    /*padding-right: ;*/
  }
</style>
