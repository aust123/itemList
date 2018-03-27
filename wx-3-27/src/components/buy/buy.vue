<template>
  <div class="buy">
    <div class="buy-search">
      <a href="javascript:;">搜索废纸品类或纸厂</a>
      <span>
        <img src="../../assets/img/buy_title_look.png" />
      </span>
    </div>
    <div class="publish">
      <ul>
        <li>
          <a href="javascript:;">
            <p>
              <img src="../../assets/img/buy_icon_fabucaigou.png"/>
            </p>
            发布采购
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <p>
              <img src="../../assets/img/buy_icon_mycaigou.png"/>
            </p>
            我的采购
          </a>
        </li>
      </ul>
    </div>
    <div class="classify">
      <ul>
        <li>
          <a href="javascript:;">
            <p>
              <img src="../../assets/img/buy_icon_gongying.png" alt=""/>
            </p>
            供应大厅
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <p>
              <img src="../../assets/img/buy_icon_hangqing.png" alt=""/>
            </p>
            废纸行情
          </a>
        </li>
        <li>
          <router-link to="aroundMall">
            <p>
              <img src="../../assets/img/buy_icon_zhoubianmall.png" alt=""/>
            </p>
            周边商城
          </router-link>
        </li>
        <li>
          <a href="javascript:;">
            <p>
              <img src="../../assets/img/buy_icon_chengpzhi.png" alt=""/>
            </p>
            成品纸商城
          </a>
        </li>
      </ul>
    </div>
    <div class="current_news">
      <div>
        <img src="../../assets/img/buy_newest.png" alt=""/>
      </div>
      <div class="news_swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            111111111111111
          </div>
          <div class="swiper-slide">
            22222222222222222ssssssssssssssssss
          </div>
          <div class="swiper-slide">
            33333333333333333
          </div>
          <div class="swiper-slide">
            111111111111111
          </div>
          <div class="swiper-slide">
            22222222222222222sssssss
          </div>
          <div class="swiper-slide">
            33333333333333333
          </div>
        </div>
      </div>
    </div>
    <div class="ranking">
      <h3>采购排行榜</h3>
      <div class="my-ranking">
        <div class="ranking-show">
          <p>我的排名： <span>第<b>5</b>名</span></p>
          <a href="javascript:;">省份</a>
        </div>
        <ul class="ranking-list">
          <li>
            <div class="icon">
              <img src="../../assets/img/my_team_touxiang2.png"/>
              <img class="num" src="../../assets/img/my_team_num1.png" alt=""/>
            </div>
            <div class="name">
              <p>
                <b>穿靴子的猫</b>
                <img src="../../assets/img/icon_rengzheng_shi.png" alt=""/>
                <img src="../../assets/img/icon_rengzheng_qi.png" alt=""/>
                <img src="../../assets/img/icon_rengzheng_tui.png" alt=""/>
              </p>
              <p>成交量：700吨</p>
            </div>
          </li>
          <li>
            <div class="icon">
              <img src="../../assets/img/my_team_touxiang2.png"/>
              <img class="num" src="../../assets/img/my_team_num2.png" alt=""/>
            </div>
            <div class="name">
              <p>
                <b>穿靴子的猫</b>
                <img src="../../assets/img/icon_rengzheng_shi.png" alt=""/>
                <img src="../../assets/img/icon_rengzheng_qi.png" alt=""/>
                <img src="../../assets/img/icon_rengzheng_tui.png" alt=""/>
              </p>
              <p>成交量：700吨</p>
            </div>
          </li>
          <li>
            <div class="icon">
              <img src="../../assets/img/my_team_touxiang2.png"/>
              <img class="num" src="../../assets/img/my_team_num3.png" alt=""/>
            </div>
            <div class="name">
              <p>
                <b>穿靴子的猫</b>
                <img src="../../assets/img/icon_rengzheng_shi.png" alt=""/>
                <img src="../../assets/img/icon_rengzheng_qi.png" alt=""/>
                <img src="../../assets/img/icon_rengzheng_tui.png" alt=""/>
              </p>
              <p>成交量：700吨</p>
            </div>
          </li>
          <li>
            <div class="icon">
              <img src="../../assets/img/my_team_touxiang2.png"/>
              <img class="num" src="../../assets/img/my_team_num.png" alt=""/>
              <span>4</span>
            </div>
            <div class="name">
              <p>
                <b>穿靴子的猫</b>
                <img src="../../assets/img/icon_rengzheng_shi.png" alt=""/>
                <img src="../../assets/img/icon_rengzheng_qi.png" alt=""/>
                <img src="../../assets/img/icon_rengzheng_tui.png" alt=""/>
              </p>
              <p>成交量：700吨</p>
            </div>
          </li>
          <li>
            <div class="icon">
              <img src="../../assets/img/my_team_touxiang2.png"/>
              <img class="num" src="../../assets/img/my_team_num.png" alt=""/>
              <span>5</span>
            </div>
            <div class="name">
              <p>
                <b>穿靴子的猫</b>
                <img src="../../assets/img/icon_rengzheng_shi.png" alt=""/>
                <img src="../../assets/img/icon_rengzheng_qi.png" alt=""/>
                <img src="../../assets/img/icon_rengzheng_tui.png" alt=""/>
              </p>
              <p>成交量：700吨</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="advertise">
      <div class="adver_swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../assets/img/buy_banner1.png" alt=""/>
          </div>
          <div class="swiper-slide">
            <img src="../../assets/img/buy_banner2.png" alt=""/>
          </div>
          <div class="swiper-slide">
            <img src="../../assets/img/buy_banner3.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
    <div class="ranking around">
      <h3>推荐商家</h3>
      <div class="my-ranking">
        <ul class="ranking-list">
          <li>
            <div class="icon">
              <img src="../../assets/img/my_team_touxiang2.png"/>
            </div>
            <div class="name">
              <p>
                <b>山鹰纸厂</b>
              </p>
              <p>
                <img src="../../assets/img/icon_rengzheng_shi.png" alt=""/>
                <img src="../../assets/img/icon_rengzheng_qi.png" alt=""/>
                <img src="../../assets/img/icon_rengzheng_tui.png" alt=""/>
                山东省濉坊安东市
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from '../../../static/swiper.min'
  import '../../../static/swiper.min.css'
  import '../../assets/css/buy_sale.css'
export default {
  mounted: function () {
    var swiper1 = new Swiper('.news_swiper', {
      direction: 'vertical',
      loop : true,
      slidesPerView: 'auto',
      autoplay:true,
      allowTouchMove:false
    });
    var swiper2 = new Swiper('.adver_swiper', {
      loop : true,
      slidesPerView: 'auto',
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      }
    });
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .buy{
    width: 100%;
    overflow-x: hidden;
    height: 90%;
    overflow-y: scroll;
  }
  .ranking-list .icon{
    top: 5px;
  }
</style>
