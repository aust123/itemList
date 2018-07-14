/**
 * Created by Administrator on 2018/7/9.
 */
exports.install = function (Vue, options) {
  //全局函数——上传图片
  Vue.prototype.upLoadImg = function (e) {
    //上传图片
    var files = e.target.files || e.dataTransfer.files;
    if (!files.length){
      return;
    }
    createImage(e,files[0]);
  }
  function createImage(event,file) {
    var image = new Image();
    var reader = new FileReader();
    var imglist=$(event.target).parents('.imgList');
    reader.onload = (event) => {
      lrz(event.target.result,{
        //width: 184, //设置压缩参数
        quality:0.1
      })
        .then(function (rst) {
          rst.formData.append('base64img', rst.base64); // 添加额外参数
          var shtml = '<li><img src="'+rst.base64+'"/><a class="close"></a></li>';
          $(shtml).insertBefore(imglist.children('.detail-upload'));
          //// 处理成功会执行
          //$.ajax({
          //  type: 'post',
          //  url: Vue.prototype.global.serverPath+'paper/img/receivePcFile',
          //  data: {
          //    pic: rst.base64
          //  },
          //  success: function(data) {
          //    var html = '<li class="simg"><img src="'+store.state.baseURL+data.data +'"/></li>';
          //    $($(event.target).parents('.detail-upload').siblings('.upload-list')).append(html);
          //  },
          //  error: function(XMLHttpRequest, textStatus, errorThrown) {
          //    alert('图片上传失败');
          //  }
          //});
        })
        .catch(function (err) {
          // 处理失败会执行
          alert('图片上传失败');
        })
    };
    reader.readAsDataURL(file);
  }
};
