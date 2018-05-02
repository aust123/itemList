<template>
  <div class="supply">
    <div class="return_prelevel">
      <router-link class="return_icon" to="/buy">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </router-link>
      供应大厅
    </div>
    <div class="select_area">
      <a href="javascript:;">选择地区</a>
      <button>搜索</button>
      <input type="text" placeholder="搜索废纸品类"/>
    </div>
    <div class="supply_list aroundMall_tuijian_list">
      <ul>
        <li>
          <router-link class="supply_list_href" to="/productDetail">
            <div class="picture">
              <img src="../../assets/img/buy_zhoubian_img1.png" alt=""/>
            </div>
            <div class="content">
              <h4>打包机</h4>
              <h5>
                <b>200000</b>元/个
              </h5>
              <p>
                2017.10.11-2017.11.12
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
</template>

<script>
</script>

<style scoped>
</style>
