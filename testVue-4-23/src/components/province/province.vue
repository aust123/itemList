<template>
  <div>
    <div class="return_prelevel">
      <a onclick="window.history.go(-1)" class="return_icon">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </a>
      选择省份
    </div>
    <ul class="province_list">
      <li @click="selectpro" v-for="item in prolist">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default{
    data:function(){
      return{
        prolist:[
          '全国','北京市','天津市','上海市','重庆市','河北省','河南省',
          '云南省','辽宁省','黑龙江省','湖南省','安徽省','山东省','新疆维吾尔',
          '江苏省','浙江省','江西省','湖北省','广西壮族','甘肃省','山西省',
          '内蒙古','陕西省','吉林省','福建省','贵州省','广东省','青海省',
          '西藏','四川省','宁夏回族','海南省','台湾省','香港特别行政区',
          '澳门特别行政区'
        ]
      }
    },
    methods:{
      selectpro:function(event){
        localStorage.setItem('userProv',$(event.target).html());
        window.history.back();
      }
    }
  }
</script>

<style scoped>
  .return_prelevel{
    position: fixed;
    top: 0;
    left: 0;
    padding: 0 5%;
    width: 90%;
  }
</style>
