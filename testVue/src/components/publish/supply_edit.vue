<template>
  <div class="publish_supply">
    <div class="return_prelevel">
      <router-link class="return_icon" to="/sale">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </router-link>
      发布供应-编辑
    </div>
    <div class="publish_form">
      <p>
        <span>货品规格</span>
        <input type="text" value="国废A级纸" placeholder="点击这里填写货品规格"/>
      </p>
      <p>
        <span>货品价格</span>
        <input type="text" value="20000" placeholder="点击这里填写货品价格"/>
        <label>30吨起</label>
      </p>
      <p>
        <span>供货量</span>
        <input type="text" value="100" placeholder="点击这里填写供货量"/>
      </p>
      <p>
        <span>发货地址</span>
        <input type="text" value="合肥市" placeholder="点击这里填写发货地址"/>
      </p>
      <p>
        <span>货品描述</span>
        <textarea placeholder="点击这里填写货品描述，如废纸特点、发货特殊需求等。">备注</textarea>
      </p>
    </div>
    <div class="publish_imgs">
      <div class="detail-upload">
        <a>
          <input class="img" type="file" @change="uploadImg($event)"/>
        </a>
      </div>
      <ul class="upload-list">
        <li class="simg">
          <img src="../../assets/img/buy_zhoubian_img3.png" alt=""/>
        </li>
      </ul>
    </div>
    <div class="submit_publish">确认发布</div>
    <p class="fabuguifan">
      <a>纸去哪了发布规范</a>
    </p>
  </div>
</template>

<script>
  export default{
    mounted:function(){
      $('.upload-list').delegate('li','click',function(){
        $(this).remove();
      })
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
  .publish_form input,.publish_form textarea{
    color: #333;
  }
</style>
