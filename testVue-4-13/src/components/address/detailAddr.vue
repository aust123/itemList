<template>
  <div class="detailAddr">
    <div class="r-result">
      <input type="text" id="suggestId" placeholder="请输入关键字"/>
    </div>
    <div id="allmap"></div>
    <div class="panel">
      <ul class="moren">
        <li :data-lat="userpoint.point.lat" :data-lng="userpoint.point.lng" class="active">
          <h3>{{userpoint.address.street}}</h3>
          <p>{{userpoint.address.province}} {{userpoint.address.city}} {{userpoint.address.district}} </p>
        </li>
      </ul>
      <ul id="r-result">
      </ul>
    </div>
    <div @click="subDetilAddr" class="submit">确 定</div>
  </div>
</template>

<script>
  export default{
    data:function(){
      return{
        userpoint:this.$store.state.userAddr
      }
    },
    mounted:function(){
      var _this=this;
      var map = new BMap.Map("allmap");
      var point=new BMap.Point(_this.userpoint.point.lng,_this.userpoint.point.lat);
      map.centerAndZoom(point,16);
      _this.addmarker(map,_this.userpoint.point);
      // 添加定位控件
      var geolocationControl = new BMap.GeolocationControl();
      geolocationControl.addEventListener("locationSuccess", function(e){
        // 定位成功事件
        _this.addmarker(map, e.point);
        _this.searchlist(map,e.point);
      });
      map.addControl(geolocationControl);

      _this.searchlist(map,_this.userpoint.point);

      var ac = new BMap.Autocomplete(    //建立一个自动完成的对象
        {
          "input" : "suggestId"
          ,"location" : map
        });
      ac.addEventListener("onconfirm", function(e) {    //鼠标点击下拉列表后的事件
        var _value = e.item.value;
        var myvalue=_value.province +  _value.city +  _value.district +  _value.street +  _value.business;
        var local = new BMap.LocalSearch(map, { //智能搜索
          onSearchComplete: function(){
            var pp = local.getResults().getPoi(0).point;    //获取第一个智能搜索的结果
            _this.addmarker(map,pp);
            _this.searchlist(map,pp);
          }
        });
        local.search(myvalue);

      });

      // 开启事件监听
      map.addEventListener("dragend", function(){
          var center = map.getCenter();
          _this.addmarker(map,center);
          _this.searchlist(map,center);
        }
      );

      $('.panel').delegate('li','click',function(){
        $('.panel li').removeClass('active');
        $(this).addClass('active');
      });
    },
    methods:{
      subDetilAddr:function(){
        var detailAddr_lng=$('.panel li.active').attr('data-lng');
        var detailAddr_lat=$('.panel li.active').attr('data-lat');
        var detailAddr=$('.panel li.active h3').html();
        sessionStorage.setItem('detailAddr_lng',detailAddr_lng);
        sessionStorage.setItem('detailAddr_lat',detailAddr_lat);
        sessionStorage.setItem('detailAddr',detailAddr);
        window.history.back();
      },
      addmarker:function(map,point){
        map.clearOverlays();
        var marker = new BMap.Marker(point);  // 创建标注
        map.addOverlay(marker);              // 将标注添加到地图中
        map.panTo(point);
      },
      searchlist:function(map,point){
        var options = {
          onSearchComplete: function(results){
            if (local.getStatus() == BMAP_STATUS_SUCCESS){
              $('.panel').scrollTop(0);
              // 判断状态是否正确
              var s = [];
              for (var i = 0; i < results.getCurrentNumPois(); i ++){
                s.push('<li data-lat="'+results.getPoi(i).point.lat+'" data-lng="'+results.getPoi(i).point.lng+'"><h3>'+results.getPoi(i).title + "</h3><p>"
                + results.getPoi(i).address+'</p></li>');
              }
              $("#r-result").html(s.join("")) ;
            }
          }
        };
        var local = new BMap.LocalSearch(map, options);
        local.searchNearby("路", point);
      }
    }
  }
</script>
<style>
  #suggestId{
    font-size: 30px;
    color: #333;
    width: 90%;
    padding: 13px 5%;
    border-top: 2px solid #e0e0e0;
    border-bottom: 4px solid #e0e0e0;
  }
  .submit{
    font-size: 36px;
    color: #fff;
  }
  .detailAddr{
    overflow: hidden;
    height: 100%;
  }
  #allmap{
    height: 50%;
    width: 100%;
  }
  .panel{
    background: #fff;
    width:100%;
    font-size: 26px;
    line-height: 30px;
    color: #666;
    position: fixed;
    top: 50%;
    left: 0;
    height: 42%;
    overflow: scroll;
    border-top: 5px solid #e0e0e0;
  }
  .panel li{
    padding: 20px;
    border-bottom: 1px solid #e0e0e0;
  }
  .panel li.active{
    background:#ececec;
  }
  .panel h3{
    font-size: 32px;
    color: #333;
    margin-bottom: 12px;
  }
</style>
