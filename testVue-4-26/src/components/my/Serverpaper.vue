<template>
  <div>
    <!--头部-->
    <div class="header_box">
      <header class="header">
        <a class="back" @click="Back" href="javascript:void(0);">
          <img src="../../assets/img/title_jiantou.png" />
        </a>
        <span class="title">选择服务纸厂</span>
      </header>
      <div class="select_area">
        <input v-model="keyword" type="text" placeholder="请输入搜索内容"/>
        <button @click="searkey">搜索</button>
      </div>
    </div>
    <!--内容区域-->
    <scroller class="paper-list" :lockX=true :use-pullup="true" height="-198" ref="myScroller"
              :pullup-config="{content:'上拉加载更多',upContent:'上拉加载更多', downContent: '释放后加载',loadingContent:'加载中...'}"
              @on-pullup-loading="getArticleList()">
      <ul>
        <li @click="selectpaper($event)"
            :data-paper_id="item.paper_id"
            :data-paper_type="item.paper_type"
            v-for="(item,index) in listdata">
          <b>{{item.paper_name}}</b><br/>
          <span>{{item.address}}</span>
        </li>
      </ul>
    </scroller>
    <div @click="submitpaper" class="submit">确定</div>
  </div>
</template>

<script>
  import { Scroller } from 'vux'

  export default {
    components: {
      Scroller
    },
    data() {
    return {
      keyword:'',
      listdata:[],
      page:1,
      mainpaper:[]
    }
  },
  mounted() {
    this.getpapers();
  },
  methods: {
    submitpaper:function(){
      for(var i=0;i<$('.paper-list li.active').length;i++){
        var mainpaperlist={
          paper_id:$($('.paper-list li.active')[i]).attr('data-paper_id'),
          paper_type:$($('.paper-list li.active')[i]).attr('data-paper_type'),
          paper_name:$($('.paper-list li.active')[i]).children('b').html()
        }
        this.mainpaper.push(mainpaperlist);
      }
      this.$store.commit('ServicePaper',this.mainpaper);
      window.history.back();
    },
    selectpaper:function(e){
      var This;
      if(e.target.nodeName!=='LI'){
        This=$(e.target).parents('li');
      }else{
        This=$(e.target);
      }
      $(This).toggleClass('active');
    },
    searkey:function(){
      this.$nextTick(() => {
        this.$refs.myScroller.reset({
          top: 0
        })
    });
    this.page=1;
    this.listdata=[];
    this.getpapers();
  },
  getArticleList:function(){
    this.page++;
    this.getpapers();
  },
  getpapers:function(){
    var path='https://two.zhiqunale.cn/Paper/PersonalCenter/paper_factory_list_2';
    var params={
      c_id:this.$store.state.loginUser.uid,
      user_state:2,
      device_number:'pc_online',
      page:this.page,
      size:8,
      keyword: this.keyword
    }
    this.post(params,path,this.getMymsg);
  },
  getMymsg:function(_data){
//        console.log(_data);
    if(_data.status_code=='10000'){
      if(_data.data.length<8){
        this.$refs.myScroller.disablePullup();
      }
      this.listdata=this.listdata.concat(_data.data);
      this.$refs.myScroller.enablePullup();
    }else{
      this.$refs.myScroller.disablePullup();
    }
  },
  Back() {
    window.history.back();
  }
  }
  }
</script>

<style scoped="scoped">
  .header_box{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }
  .select_area{
    padding: 0 30px;
    height: 110px;
    line-height: 110px;
    border-bottom: 1px solid #e0e0e0;
  }
  .select_area input{
    float: none;
    width: 300px;
    margin: 0 50px;
  }
  .select_area button{
    float: none;
  }
  .header {
    height: 88px;
    line-height: 88px;
    width: 100%;
    background-color: #00d3af;
    position: relative;
    color: #fff;
    text-align: center;
  }

  .title {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    font-size: 36px;
  }

  .header a {
    font-size: 30px;
    float: right;
    color: #fff;
    margin-right: 29px;
    position: relative;
    z-index: 66;
  }

  .header .back {
    float: left;
    margin-left: 30px;
    top: 4px;
  }

  .header .right {
    float: right;
    font-size: 26px;
  }

  .back img {
    width: 20px;
    height: 38px;
  }

  .paper-list {
    padding: 198px 0 98px 0;
    margin-top: 14px;
    margin-bottom: 14px;
  }
  .paper-list li{
    color: #333;
    font-size: 32px;
    padding: 28px 30px;
    background-color: #fff;
    border-bottom: 1px solid #e0e0e0;
    position: relative;
    overflow: hidden;
    background-image: url('../../assets/img/sell_fabugongying_xuankuang_n.png');
    background-repeat: no-repeat;
    background-size: 22px 22px;
    background-position: 5% center;
  }
  .paper-list li.active{
    background-image: url('../../assets/img/sell_fabugongying_xuankuang_p.png');
  }
  .paper-list li input{
    position: absolute;
    top: 35%;
  }
  .paper-list li b{
    margin-left: 60px;
  }
  .paper-list li span{
    font-size: 22px;
    color: #666;
    margin-left: 60px;
    display: inline-block;
  }

  .submit {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 36px;
    color: #fff;
  }

  .add_bankcard a {
    display: block;
    width: 100%;
    color: #fff;
    background-color: #00D3AF;
    height: 98px;
    line-height: 98px;
    text-align: center;
    font-size: 36px;
  }
</style>
