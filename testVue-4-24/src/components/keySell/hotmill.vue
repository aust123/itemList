<template>
  <div class="hotmill">
    <div class="return_prelevel">
      <router-link class="return_icon" to="/sale">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </router-link>
      热门纸厂
    </div>
    <div class="select_area">
      <a href="javascript:;">选择地区</a>
      <button>搜索</button>
      <input type="text" placeholder="搜索废纸品类"/>
    </div>
    <div class="hotmill_list">
      <ul>
        <li>
          <router-link to="/keySell">
            <h3>山鹰纸业</h3>
            <p>安徽合肥市</p>
            <span>一键卖货</span>
          </router-link>
        </li>
        <li>
          <router-link to="/keySell">
            <h3>山鹰纸业</h3>
            <p>安徽合肥市</p>
            <span>一键卖货</span>
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
