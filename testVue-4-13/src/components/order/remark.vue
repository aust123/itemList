<template>
  <div>
    <div class="return_prelevel">
      <a class="return_icon" onclick="window.history.go(-1)">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </a>
      订单备注
    </div>
    <div class="remark_content">
      <div class="remark">
        <div class="add_remark">
          <span>添加备注</span>
          <select>
            <option value="0">服务费</option>
            <option value="1">车费</option>
            <option value="2">打款日期</option>
            <option value="3">其他</option>
          </select>
          <a class="delete">删除</a>
        </div>
        <textarea placeholder="请填写备注信息！"></textarea>
      </div>
    </div>
    <a class="addRemarkBtn"><img src="../../assets/img/orderbeizhu_add.png" alt=""/>添加</a>
    <div class="remark_img">
      <h3>添加图片备注</h3>
      <div class="detail-upload">
        <a>
          <input class="img" type="file" accept="image/*" @change="uploadImg($event)"/>
        </a>
        <b>（最多可以添加9张！）</b>
      </div>
      <ul class="upload-list">
      </ul>
    </div>
    <div class="submit">
      <a>保存</a>
    </div>
  </div>
</template>

<script>
  export default{
    mounted:function(){
      $('.addRemarkBtn').click(function(){
        var remarkHtml='<div class="remark"><div class="add_remark"><span>添加备注</span><select><option value="0">服务费</option><option value="1">车费</option><option value="2">打款日期</option><option value="3">其他</option></select><a class="delete">删除</a></div><textarea placeholder="请填写备注信息！"></textarea></div>';
        $('.remark_content').append(remarkHtml);
      });
      $('.remark_content').delegate('.delete','click',function(){
        $(this).parents('.remark').remove();
      });
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
  .detail-upload a{
    background-image: url('../../assets/img/orderbeizhu_addphoto.png');
    width: 180px;
    height: 180px;
  }
  .detail-upload a input{
    width: 180px;
    height: 180px;
  }
  .submit a{
    font-size: 36px;
    color: #fff;
  }
</style>
