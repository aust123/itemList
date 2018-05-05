<template>
  <div class="footer">
    <ul class="footer-list">
      <li class="item" v-for="(item,index) in footerList"
          :class="{'active':nowIndex===index}" @click="tabClick(index)">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default{
  data: function () {
    return {
      footerList: [
        {name: '我要买'},
        {name: '我要卖'},
        {name: '消息'},
        {name: '订单'},
        {name: '我的'}
      ],
      nowIndex: 0
    }
  },
  mounted:function(){
    this.$nextTick(()=>{
      this.initPage();
    });
    this.$root.eventHub.$on('slideTab',this.slideTab);
  },
  methods:{
    initPage:function(){
      this.nowIndex=this.$route.path==='/buy' ? 0
        : this.$route.path === '/sale' ? 1
        : this.$route.path === '/message' ? 2
        : this.$route.path === '/order' ? 3
        : this.$route.path === '/my' ? 4 : 0
    },
    tabClick:function(index){
      this.nowIndex=index;
      this.$root.eventHub.$emit('changeTab',index);
    },
    slideTab:function(index){
      this.nowIndex=index;
      let href=index===0?'/buy':index===1?'/sale':index===2?'/message':index===3?'/order':index===4?'/my':'/buy';
      this.$router.push(href);
    }
  }
}
</script>

<style scoped>
  .footer{
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10%;
    z-index: 10;
    box-shadow: 0 -2px 2px 1px #F1F1F1;
  }
  .footer-list{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .item{
    width: 20%;
    display: inline-block;
    text-align: center;
    background-size: 49px 41px;
    background-repeat: no-repeat;
    background-position: center 20px;
    padding-top: 72px;
    padding-bottom: 20px;
    font-size: 26px;
    color: #999;
  }
  .item.active{
    color: #00D3AF;
  }
  .item:nth-child(1){
    background-image:url('../../assets/img/tab_buy_n.png');
  }
  .item:nth-child(1).active{
    background-image:url('../../assets/img/tab_buy_p.png');
  }
  .item:nth-child(2){
    background-image:url('../../assets/img/icon_sell_n.png');
  }
  .item:nth-child(2).active{
    background-image:url('../../assets/img/icon_sell_p.png');
  }
  .item:nth-child(3){
    background-image:url('../../assets/img/tab_message_n.png');
  }
  .item:nth-child(3).active{
    background-image:url('../../assets/img/tab_message_p.png');
  }
  .item:nth-child(4){
    background-image:url('../../assets/img/tab_order_n.png');
  }
  .item:nth-child(4).active{
    background-image:url('../../assets/img/tab_order_p.png');
  }
  .item:nth-child(5){
    background-image:url('../../assets/img/tab_my_n.png');
  }
  .item:nth-child(5).active{
    background-image:url('../../assets/img/tab_my_p.png');
  }
</style>
