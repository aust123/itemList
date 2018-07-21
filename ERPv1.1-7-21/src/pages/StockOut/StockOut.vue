<template>
  <div class="billing">
    <header class="Return">
      <router-link :to="{path:$route.query.path}" class="ReturnIcon">
        <img src="../../assets/imgs/nav_jiantou_left.png" alt=""/>
      </router-link>
      出库
    </header>
    <div class="showList">
      <div class="show_item">
        出库单号：<span>{{msg.edo_number}}</span>
      </div>
      <div class="show_item">
        纸厂名称：<span>{{msg.eso_paper_name}}</span>
      </div>
      <div class="show_item">
        货品名称：<span>{{msg.edo_product_name}}</span>
      </div>
      <div class="show_item">
        规格等级：<span>{{msg.edo_product_stage}}</span>
      </div>
      <div class="show_item">
        订单重量：<span>{{msg.edo_should_delivery_amount}}吨</span>
      </div>
    </div>
    <div class="title">出库信息<a @click="add" class="add">添加</a></div>
    <table class="billTable">
      <thead>
        <tr>
          <th>仓库</th>
          <th>货位</th>
          <th>出库重量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in msg.storehouse_ppl">
          <td>{{msg.edo_storehouse_name}}</td>
          <td>{{item.sh_product_allocation_number}}</td>
          <td>{{item.sh_delivery_total_amount}}</td>
          <td v-longtouch="[timeOutEvent,item]">
            <a><img src="../../assets/imgs/billing_icon_edite.png" alt=""/></a>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="account divItem">
      <div class="h152">
        <h3>待出库：{{dck}}<span>吨</span></h3><br/>
        <h3>已出库：<b>{{msg.edo_delivery_total_amount}}</b><span>吨</span></h3>
        <a @click="sure" class="sure">确认</a>
      </div>
    </div>
    <tip :tipmsg="tipMsg"></tip>
    <div class="modal-content" v-show="show1">
      <div class="modal">
        <P class="modal-title">提示<img @click="show1=false" src="../../assets/imgs/window_cancel.png"></P>
        <p class="modal-info">出库重量（{{dck}}吨）与订单重量（{{this.msg.edo_should_delivery_amount}}吨）不一致</p>
        <p class="modal-info" style="text-align: center">确定出库吗？</p>
        <p class='modal-option'>
          <button @click="show1=false">返回</button>
          <button @click="submit" class="sure">确定</button>
        </p>
      </div>
    </div>
    <div class="modal-content" v-show="show2">
      <div class="modal">
        <P class="modal-title">提示<img @click="show2=false" src="../../assets/imgs/window_cancel.png"></P>
        <p class="modal-info">确定删除吗？</p>
        <p class='modal-option'>
          <button @click="show2=false">取消</button>
          <button @click="sureDel" class="sure">确定</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import tip from "../../components/tip/tip.vue";
export default {
  directives:{
    longtouch:function(el, binding,vnode){
      var oDiv = el,
        value = binding.value[0],
        x = 0,
        y = 0,
        z = 0,
        timer = null;
      oDiv.addEventListener("touchstart", function(e) {
        if (e.touches.length > 1) {
          return false;
        }
        z = 0;
        timer = setTimeout(function() {
          z = 1;
        }, 500);
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
        e.preventDefault();
      }, false);
      oDiv.addEventListener("touchmove", function(e) {
        if (x != e.touches[0].clientX || y != e.touches[0].clientY) {
          clearTimeout(timer);
          return false;
        }
      }, false);
      oDiv.addEventListener("touchend", function(ev) {
        if (z != 1) {
          vnode.context.edit(binding.value[1]);
          clearTimeout(timer);
          x = 0;
          y = 0;
          return false;
        } else {
          x = 0;
          y = 0;
          z = 0;
          vnode.context.del(binding.value[1]);
        }
      }, false);
    }
  },
  components: {
    tip
  },
  computed: {
    dck: function() {
      var dckVal =
        this.msg.edo_should_delivery_amount -
        this.msg.edo_delivery_total_amount;
      if (dckVal < 0) {
        dckVal = 0;
      }
      return Number(dckVal).toFixed(3);
    }
  },
  data: function() {
    return {
      msg: {},
      tipMsg: ["", false],
      show1:false,
      show2:false,
      delId:'',
      timeOutEvent: 0
    };
  },
  mounted: function() {
    this.getMsg();
  },
  methods: {
    //删除
    del:function(item){
      this.delId=item.sh_id;
      this.show2=true;
    },
    //删除确认
    sureDel:function(){
      var params={
        eo_id:this.cookie.getCookie('uid'),
        edo_id:this.$route.query.oid,
        sh_id:this.delId
      }
      var _this=this;
      this.ajax.stockOutDelete(params).then(function(res){
        _this.tipMsg=[res.msg,true];
      });
    },

    //出库确认
    sure:function(){
      if(this.dck!=0){
        this.show1=true;
      }else{
        this.submit();
      }
    },
    //出库信息提交
    submit: function() {
      var params = {
        eo_id: this.cookie.getCookie("uid"),
        edo_id: this.$route.query.oid
      };
      var _this = this;
      this.ajax.stockOutSure(params).then(function(res) {
        if (res.status_code == 10000) {
          _this.$router.push({
            path: _this.$route.query.path
          });
        } else {
          _this.tipMsg = [res.msg, true];
        }
      });
    },
    //添加出库信息
    add: function() {
      this.$router.push({
        path: "/stockOutAdd",
        query: {
          msg: JSON.stringify(this.msg),
          oid: this.$route.query.oid,
          path: this.$route.fullPath
        }
      });
    },
    //编辑出库信息
    edit: function(item) {
      this.$router.push({
        path: "/stockOutAdd",
        query: {
          msg: JSON.stringify(this.msg),
          item: JSON.stringify(item),
          oid: this.$route.query.oid,
          path: this.$route.fullPath
        }
      });
    },
    //获取详情信息
    getMsg: function() {
      var params = {
        eo_id: this.cookie.getCookie("uid"),
        edo_id: this.$route.query.oid,
        type: 1
      };
      var _this = this;
      _this.ajax.stockOutDetail(params).then(function(res) {
        //          console.log(res);
        _this.msg = res.data;
      });
    }
  }
};
</script>
<style lang="css" src="../../assets/css/billing.css" scoped>
</style>
<style scoped>
.billing {
  padding-bottom: 160px;
}
.account {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
