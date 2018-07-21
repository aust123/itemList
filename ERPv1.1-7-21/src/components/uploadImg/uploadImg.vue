<template>
  <div class="uploadList clearfix">
    <ul class="imgList">
      <li v-for="item in upImg.imgList" class="imgItem">
        <img :src="global.serverPath+item"/>
        <a @click="deleteImg(item)" class="close"></a>
      </li>
      <li v-show="upImg.imgList.length<upImg.imgLength" class="detail-upload">
        <a>
          <input @change="upLoad_img($event)" class="img" type="file"/>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import ajax from '../../axios/api.js'
  export default{
    props:{
      upImg:Object
    },
    methods:{
      //删除图片
      deleteImg:function(url){
        for(var i=0;i<this.upImg.imgList.length;i++){
          if(this.upImg.imgList[i]==url){
            this.upImg.imgList.splice(i,1);
          }
        }
      },
      //上传图片
      upLoad_img:function(e){
        if(this.upImg.imgList.length<this.upImg.imgLength){
          //上传图片
          var files = e.target.files || e.dataTransfer.files;
          if (!files.length){
            return;
          }
          this.createImage(e,files[0]);
        }
      },
      createImage:function(event,file){
        var _this=this;
        var image = new Image();
        var reader = new FileReader();
        var imglist=event.target.parentNode.parentNode.parentNode;
        var uploadLi=event.target.parentNode.parentNode;
        reader.onload = (event) => {
          lrz(event.target.result,{
            //width: 184, //设置压缩参数
            quality:0.1
          })
            .then(function (rst) {
              rst.formData.append('base64img', rst.base64); // 添加额外参数

              // 处理成功会执行
              var params={
                pic: rst.base64
              }
              ajax.uploadImage(params).then(function(response){
                if(response.code==10000){
                  _this.upImg.imgList.push(response.data);
//                  var shtml=document.createElement("li");
//                  shtml.setAttribute('class','imgItem');
//                  shtml.innerHTML = '<img src="'+_this.global.serverPath+response.data+'"/><a class="close"></a>';
//                  imglist.insertBefore(shtml,uploadLi);
                }
              });
            })
            .catch(function (err) {
              // 处理失败会执行
              alert('图片上传失败');
            })
        };
        reader.readAsDataURL(file);
      }
    }
  }
</script>


