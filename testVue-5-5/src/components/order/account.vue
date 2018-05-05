<template>
  <div>
    <div class="return_prelevel">
      <a class="return_icon" onclick="window.history.go(-1)">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </a>
      结算
      <router-link to="/refund" class="logistics_order">退款</router-link>
    </div>
    <div class="account_weikuan">
      <p>
        <span>结算尾款</span>(不包含定金)<input type="text"/> 元
      </p>
      <p>
        <img src="../../assets/img/wuliu_tishi.png" alt=""/>
        已付定金：1000元
      </p>
    </div>
    <div class="remark_img">
      <h3>上传结算清单</h3>
      <div class="detail-upload">
        <a>
          <input class="img" type="file" accept="image/*" @change="uploadImg($event)"/>
        </a>
      </div>
      <ul class="upload-list">
      </ul>
    </div>
    <div class="remark_content">
      <div class="remark">
        <div class="add_remark">
          <span>备注</span>
        </div>
        <textarea placeholder="点击这里填写备注！"></textarea>
      </div>
    </div>
    <div class="submit_publish">确认上传</div>
  </div>
</template>

<script>
  export default{
    mounted:function(){
    },
    methods:{
      //上传图片
      uploadImg:function (e) {
        if($('.upload-list li').length<10){
          var files = e.target.files || e.dataTransfer.files;
          if (!files.length){
            return;
          }
          this.createImage(files[0]);
        }
      },
      createImage:function(file) {
        var image = new Image();
        var reader = new FileReader();
        var ullist = document.getElementsByClassName('upload-list')[0];
        reader.onload = (e) => {
          var html = '<li class="simg"><img src="'+ e.target.result + '"/></li>';
          $('.upload-list').append(html);
        };
        reader.readAsDataURL(file);
      }
    }
  }
</script>

<style scoped>
  .detail-upload a{
    background-image: url('../../assets/img/orderbeizhu_addphoto.png');
    width: 180px;
    height: 180px;
  }
  .detail-upload a input{
    width: 180px;
    height: 180px;
  }
  .submit_publish{
    margin-bottom: 100px;
  }
</style>
