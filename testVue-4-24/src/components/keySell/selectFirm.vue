<template>
  <div class="selectFirm">
    <div class="return_prelevel">
      <router-link class="return_icon" to="/keySell">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </router-link>
      选择贸易公司
    </div>
    <div class="firmList">
      <ul>
        <li @click="changeActive(index)" v-for="(item,index) in firmList" :class="{'active':nowIndex==index}">
          <a>
            <div class="picture">
              <img src="../../assets/img/buy_zhoubian_img3.png" alt=""/>
            </div>
            <div class="content">
              <h4>{{item.name}}</h4>
              <p>
                <img src="../../assets/img/icon_rengzheng_shi.png" alt=""/>
                <img src="../../assets/img/icon_rengzheng_qi.png" alt=""/>
                <img src="../../assets/img/icon_rengzheng_tui.png" alt=""/>
                信用分：{{item.credit}}分
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    data:function(){
      return{
        firmList:[
          {
            name:'德润',
            credit:5
          },
          {
            name:'德润',
            credit:5
          },
          {
            name:'德润',
            credit:5
          },
          {
            name:'德润',
            credit:5
          }
        ],
        nowIndex:0
      }
    },
    methods:{
      changeActive:function($index){
//        this.$root.eventHub.$emit('selectFirm',$index);
        this.nowIndex=$index;
        this.$router.push('/keySell?'+$index);
      }
    }
  }
</script>

<style scoped>
</style>
