<template>
  <div class="sale">
    <div class="buy-search">
      <a href="javascript:;">搜索废纸品类或纸厂</a>
      <span>
        <img src="../../assets/img/buy_title_look.png" />
      </span>
    </div>
    <div class="publish">
      <ul>
        <li>
          <router-link to="publish">
            <p>
              <img src="../../assets/img/buy_icon_fabucaigou.png"/>
            </p>
            发布供应
          </router-link>
        </li>
        <li>
          <router-link to="myQuote">
            <p>
              <img src="../../assets/img/sell_icon_mygongying.png"/>
            </p>
            我的供应
          </router-link>
        </li>
      </ul>
    </div>
    <div class="classify">
      <ul>
        <li>
          <router-link to="inquiryMall">
            <p>
              <img src="../../assets/img/sell_icon_qiugou.png" alt=""/>
            </p>
            求购大厅
          </router-link>
        </li>
        <li>
          <a href="javascript:;">
            <p>
              <img src="../../assets/img/sell_icon_zixun.png" alt=""/>
            </p>
            资讯
          </a>
        </li>
        <li>
          <router-link to="/attention">
            <p>
              <img src="../../assets/img/sell_icon_focus.png" alt=""/>
            </p>
            关注
          </router-link>
        </li>
        <li>
          <router-link to="/supplier">
            <p>
              <img src="../../assets/img/sell_icon_seller.png" alt=""/>
            </p>
            成为供应商
          </router-link>
        </li>
      </ul>
    </div>
    <div class="findwuliu">
      <ul>
        <li>
          <router-link to="/myLogistics">
            <img src="../../assets/img/sell_xunzhaowuliu.png" alt=""/>
            寻找物流
          </router-link>
        </li>
        <li>
          <router-link to="/ious">
            <img src="../../assets/img/sell_study_logo.png" alt=""/>
            小猴白条
          </router-link>
        </li>
      </ul>
    </div>
    <div class="advertising">
      <router-link to="/hotmill">
        <img class="back" src="../../assets/img/sell_banner.png" alt=""/>
        <img class="btn" src="../../assets/img/sell_btn_click.png" alt=""/>
      </router-link>
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
            <router-link to="/shopDetail">
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
                <p>主营纸厂：九龙纸业</p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="ranking around">
      <h3>附近商家</h3>
      <div class="my-ranking">
        <ul class="ranking-list">
          <li>
            <router-link to="/shopDetail">
              <div class="icon">
                <img src="../../assets/img/my_team_touxiang2.png"/>
              </div>
              <div class="name">
                <p class="ranking_name">
                  <b>穿靴子的猫</b>
                </p>
                <p>
                  <img src="../../assets/img/icon_rengzheng_shi.png" alt=""/>
                  <img src="../../assets/img/icon_rengzheng_qi.png" alt=""/>
                  <img src="../../assets/img/icon_rengzheng_tui.png" alt=""/>
                  山东省濉坊安东市
                </p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../assets/css/buy_sale.css'
  export default {
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .sale{
    width: 100%;
    overflow-x: hidden;
    height: 90%;
    /*overflow-y: scroll;*/
  }
</style>
