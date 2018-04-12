<template>
  <div class="my_logistics">
    <div class="return_prelevel">
      <router-link class="return_icon" to="/sale">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </router-link>
      我的物流需求
      <router-link to="/logisticsOrder" class="logistics_order">物流订单</router-link>
    </div>
    <ul class="logistics_list">
      <li class="pubing">
        <p>
          <span>出发地：</span>
          <b>合肥</b>
          <a>发布中...</a>
        </p>
        <p>
          <span>目的地：</span>
          <b>杭州</b>
        </p>
        <p>
          <span>发货日期：2017.12.12</span>
        </p>
        <p>
          <span>货物重量（吨）：2222</span>
        </p>
        <div>
          <span>未处理（1）</span>
          <span>已同意（3）</span>
          <span>编辑</span>
          <span>取消</span>
        </div>
      </li>
      <li>
        <p>
          <span>出发地：</span>
          <b>合肥</b>
          <a>已过期/已完成</a>
        </p>
        <p>
          <span>目的地：</span>
          <b>杭州</b>
        </p>
        <p>
          <span>发货日期：2017.12.12</span>
        </p>
        <p>
          <span>货物重量（吨）：2222</span>
        </p>
        <div>
          <span>未处理（1）</span>
          <span>已同意（3）</span>
        </div>
      </li>
    </ul>
    <ul class="logistics_option">
      <li class="pub">
        <router-link to="/publishLogistics">
          <img src="../../assets/img/xunzhaowuliu_fabu.png" alt=""/>
          发布需求
        </router-link>
      </li>
      <li class="find">
        <router-link to="/hitchhiking">
          <img src="../../assets/img/xunzhaowuliu_car.png" alt=""/>
          找顺风车
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
</script>

<style scoped>
  .return_prelevel{
    position: relative;
  }
</style>
