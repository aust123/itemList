<template>
  <div class="uploadList clearfix">
    <ul class="imgList">
      <li class="detail-upload">
        <a>
          <input @change="upLoadImg($event)" class="img" type="file"/>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
    mounted:function(){
      $('.imgList').delegate('.close','click',function(){
        $(this).parents('li').remove();
      });
    }
  }
</script>

<style scoped>
</style>
