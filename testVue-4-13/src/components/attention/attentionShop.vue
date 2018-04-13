<template>
  <div class="attentionShop supply_list">
    <ul>
      <li>
        <router-link class="supply_list_href" to="/productDetail">
          <div class="picture">
            <img src="../../assets/img/buy_zhoubian_img1.png" alt=""/>
          </div>
          <div class="content">
            <h4>山鹰纸厂</h4>
            <p>
              <img src="../../assets/img/icon_rengzheng_shi.png" alt=""/>
              <img src="../../assets/img/icon_rengzheng_qi.png" alt=""/>
              <img src="../../assets/img/icon_rengzheng_tui.png" alt=""/>
              山东省濉坊安东市
            </p>
          </div>
          <span>4小时前</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
</script>

<style scoped>
  .supply_list .picture img{
    margin-top: 0;
  }
  .supply_list .content h4{
    position: relative;
    top: 15px;
    margin-bottom: 40px;
  }
</style>
