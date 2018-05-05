<template>
  <div class="shop">
    <div class="return_prelevel">
      <router-link class="return_icon" to="/shopDetail">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </router-link>
      <span>张三的店铺</span>
      <a class="share">分享</a>
    </div>
    <div class="shop_message">
      <div class="icon">
        <img src="../../assets/img/my_team_touxiang2.png" alt=""/>
      </div>
      <div class="text">
        <h3>张三</h3>
        <p>安徽省合肥市蜀山区</p>
        <p>经纪人/代办&nbsp;&nbsp;&nbsp;&nbsp;主营：打包站</p>
      </div>
    </div>
    <div class="stars">
      <div class="star-box">
        <span class="star" v-for='(item,index) in starGroup' :class='item' ></span>
      </div>
      <b>{{score}}</b>
      <span>（3个评价）</span>
      <img src="../../assets/img/icon_rengzheng_shi.png" alt=""/>
    </div>
    <div class="shop_online">
      <h3>在线货品（8）</h3>
      <ul>
        <li class="clearfix">
          <div class="picture">
            <img src="../../assets/img/buy_zhoubian_img3.png" alt=""/>
          </div>
          <div class="text">
            <p>国废A级纸</p>
            <p>
              <b>2000元/吨</b>
              <span>7人联系</span>
            </p>
            <span class="time">1小时前</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="options">
      <a class="focus">
        <img src="../../assets/img/sell_shopdetail_focus.png"/>
        加关注
      </a>
      <a class="chat">
        <img src="../../assets/img/orderdetail_liao.png"/>
        聊一聊
      </a>
      <a class="call">
        <img src="../../assets/img/orderdetail_phone.png"/>
        打电话
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    data:function() {
      return {
        starGroup: [],
        score: 4
      }
    },
    methods: {
      matchScore:function(){
        let len = parseInt(this.score),
          floor = parseFloat(this.score) - len,
          countStar = 5,
          group = [];
        for (var i = 0; i < len; i++) {
          group.push("on");
        }
        if (floor > 0) {
          group.push("half");
        }
        let residue = countStar - group.length;
        if (residue > 0) {
          for (var j = 0; j < residue; j++) {
            group.push("off");
          }
        }
        return group;
      }
    },
    created:function() {
      this.starGroup = this.matchScore();
    }
  };
</script>

<style scoped>
  .return_prelevel{
    position: relative;
  }
  .return_prelevel .share{
    color: #fff;
    font-size: 34px;
    float: none;
    position: absolute;
    right: 30px;
  }
</style>
