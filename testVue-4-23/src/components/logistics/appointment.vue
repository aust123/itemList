<template>
  <div>
    <div class="return_prelevel">
      <a class="return_icon" onclick="window.history.go(-1)">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </a>
      历史预约
    </div>
    <div class="logistics_form">
      <p>
        <label>出发地：</label>
        <b>合肥</b>
      </p>
      <p>
        <label>目的地：</label>
        <b>杭州</b>
      </p>
      <p>
        <label>发货日期：</label>
        2017.10.11
      </p>
      <p>
        <label>货物品类：</label>
        国废A级纸
      </p>
      <p>
        <label>货物重量（吨）：</label>
        1000
      </p>
      <p>
        <label>联系方式：</label>
        1983242323
      </p>
      <p>
        <label>备注：</label>
        <span>山东省山东省山东省山东省山东省山东省山东省山东省山东省山东省山东省山东省山东省山东省</span>
      </p>
    </div>
    <div class="hitchhiking">
      <ul class="hitchhiking_list">
        <li>
          <h3>
            <img src="../../assets/img/my_team_touxiang2.png" alt=""/>
            李师傅
            <a>待处理</a>
          </h3>
          <p>出发日期：2017.10.11</p>
          <p>报价（元）：200</p>
          <p>承载量（吨）：30</p>
          <p>
            备注：
            <span>山东省山东省山东省山东省山东省山东省山东省山东省山东省</span>
          </p>
          <div>
            <a>联系</a>
            <a>同意</a>
            <a>拒绝</a>
          </div>
        </li>
        <li>
          <h3>
            <img src="../../assets/img/my_team_touxiang2.png" alt=""/>
            李师傅
            <a>已拒绝/已过期/已同意</a>
          </h3>
          <p>出发日期：2017.10.11</p>
          <p>报价（元）：200</p>
          <p>承载量（吨）：30</p>
          <p>
            备注：
            <span>山东省山东省山东省山东省山东省山东省山东省山东省山东省</span>
          </p>
          <div>
            <a>联系</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
  .hitchhiking_list h3{
    border-bottom: 1px solid #e0e0e0;
    margin-bottom: 30px;
  }
  .hitchhiking_list li{
    margin-bottom: 0;
    margin-top: 14px;
  }
  .hitchhiking_list p span{
    display: inline-block;
    width: 83%;
    vertical-align: text-top;
  }
  .hitchhiking_list div{
    padding: 15px 30px;
    border-top: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    text-align: right;
  }
  .hitchhiking_list div a{
    width: 158px;
    height: 59px;
    border: 1px solid #ff5000;
    border-radius: 10px;
    line-height: 59px;
    color: #ff5000;
    margin-left: 20px;
  }
</style>
