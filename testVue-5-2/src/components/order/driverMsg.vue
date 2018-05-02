<template>
  <div class="drivers">
    <div class="return_prelevel">
      <a class="return_icon" onclick="window.history.go(-1)">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </a>
      上传司机信息
    </div>
    <div class="driver_msg">
      <p>
        司机名称<span>李四</span>
      </p>
      <p>
        联系方式<span>15890879098</span>
      </p>
      <p>
        车牌号<span>皖A-9999</span>
      </p>
    </div>
    <div class="driver_list">
      <div class="driver_msg">
        <a class="delete">删除</a>
        <p>
          司机名称
          <input type="text" placeholder="请填写司机名称"/>
        </p>
        <p>
          联系方式
          <input type="text" placeholder="请填写司机联系方式"/>
        </p>
        <p>
          车牌号
          <input type="text" placeholder="请填写车牌号"/>
        </p>
      </div>
    </div>
    <a class="addRemarkBtn"><img src="../../assets/img/orderbeizhu_add.png" />添加司机</a>
    <div class="submit">
      <a>确认上传</a>
    </div>
  </div>
</template>

<script>
  export default{
    mounted:function(){
      $('.addRemarkBtn').click(function(){
        var remarkHtml='<div class="driver_msg"><a class="delete">删除</a><p>司机名称<input type="text" placeholder="请填写司机名称"/></p><p>联系方式<input type="text" placeholder="请填写司机联系方式"/></p><p>车牌号<input type="text" placeholder="请填写车牌号"/></p></div>';
        $('.driver_list').append(remarkHtml);
      });
      $('.driver_list').delegate('.delete','click',function(){
        $(this).parents('.driver_msg').remove();
      });
    }
  }
</script>

<style scoped>
  .addRemarkBtn{
    margin: 20px 0;
  }
  .submit a{
    font-size: 36px;
  }
</style>
