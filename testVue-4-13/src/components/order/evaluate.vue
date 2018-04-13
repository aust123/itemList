<template>
  <div class="evaluates">
    <div class="return_prelevel">
      <a class="return_icon" onclick="window.history.go(-1)">
        <img src="../../assets/img/title_jiantou.png" alt=""/>
      </a>
      评价
    </div>
    <div class="evaluate_box">
      <div class="evaluate evaluate1">
        订单评价
        <div class="star-box">
        <span @click="starClick($event)" class="star" :class='item'
              v-for='(item,index) in starGroup1'></span>
        </div>
      </div>
      <textarea placeholder="货品满足您的期待吗？说说它的优点和美中不足的地方吧"></textarea>
      <div class="publish_imgs">
        <div class="detail-upload">
          <a>
            <input class="img" type="file" @change="uploadImg($event)"/>
          </a>
        </div>
        <ul class="upload-list">
        </ul>
      </div>
    </div>
    <div class="evaluate_box">
      <div class="evaluate evaluate2">
        服务评价
        <div class="star-box">
        <span @click="starClick($event)" class="star" :class='item'
              v-for='(item,index) in starGroup2'></span>
        </div>
      </div>
      <textarea placeholder="服务满足您的期待吗？吐吐槽吧"></textarea>
      <div class="publish_imgs">
        <div class="detail-upload">
          <a>
            <input class="img" type="file" @change="uploadImg($event)"/>
          </a>
        </div>
        <ul class="upload-list">
        </ul>
      </div>
    </div>
    <div class="submit">提交</div>
  </div>
</template>

<script>
  export default {
    data:function() {
      return {
        starGroup1: [],
        starGroup2: [],
        score: 0
      }
    },
    mounted:function(){
      $('.upload-list').delegate('li.simg','click',function(){
        $(this).remove();
      })
    },
    methods: {
      //上传图片
      uploadImg:function (e) {
        this.upLoadImg(e);
//        var files = e.target.files || e.dataTransfer.files;
//        if (!files.length){
//          return;
//        }
//        this.createImage(e,files[0]);
      },
//      createImage:function(event,file) {
//        var image = new Image();
//        var reader = new FileReader();
//        reader.onload = (e) => {
//          var html = '<li class="simg"><img src="'+ e.target.result + '"/></li>';
//          $(html).insertBefore($($(event.target).parents('.detail-upload')));
//        };
//        reader.readAsDataURL(file);
//      },
      starClick:function(event){
        var centerRandom=(($(event.target).index()+1)+$(event.target).index())/2;
        var random=Math.random() * ($(event.target).index()+1 - $(event.target).index()) + $(event.target).index();
        if(random<centerRandom){
          this.score=$(event.target).index()+0.5;
        }else{
          this.score=$(event.target).index()+1;
        }
        if($(event.target).parents('.evaluate').hasClass('evaluate1')){
          this.starGroup1 = this.matchScore();
        }else{
          this.starGroup2 = this.matchScore();
        }
      },
      matchScore:function(){
        let len = parseInt(this.score),
          floor = parseFloat(this.score) - len,
          countStar = 5,
          group = [];
        for (var i = 0; i < len; i++) {
          group.push("on");
        }
        if (floor > 0) {
          group.push("half");
        }
        let residue = countStar - group.length;
        if (residue > 0) {
          for (var j = 0; j < residue; j++) {
            group.push("off");
          }
        }
        return group;
      }
    },
    created:function() {
      this.starGroup1 = this.matchScore();
      this.starGroup2 = this.matchScore();
    }
  };
</script>

<style scoped>
  .evaluates{
    padding-bottom: 98px;
  }
  .star{
    display: inline-block;
    width: 34px;
    height: 34px;
    margin-left: 12px;
  }
  .star.half{
    background-image: url('../../assets/img/sell_pingjia_star_half.png');
  }
  .star.on{
    background-image: url('../../assets/img/sell_pingjia_star.png');
  }
  .evaluate{
    background: #fff;
    border-bottom: 1px solid #e0e0e0;
    padding: 34px 30px;
    margin-top: 20px;
  }
  .star-box{
    margin-left: 44px;
  }
  textarea{
    width: 90%;
    height: 260px;
    background: #F8F7F8;
    font-size: 26px;
    color: #999;
    padding: 20px 5%;
  }
  .publish_form, .publish_imgs{
    margin-top: 0;
  }
  .detail-upload a{
    width: 150px;
    height: 150px;
    background-image: url('../../assets/img/sell_pingjia_add.png');
  }
  .detail-upload{
    padding: 28px 0 0 30px;
  }
  .upload-list{
    padding: 28px 30px;
  }
  .upload-list li{
    width: 150px;
    height: 150px;
  }
  .submit{
    font-size: 36px;
    color: #fff;
  }
</style>
