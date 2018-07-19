<template>
  <div class="home">
    <header class="Return">
      <router-link to="/entrance" href="" class="ReturnIcon">
        <img src="../../assets/imgs/nav_jiantou_left.png" alt=""/>
      </router-link>
      纸元ERP
    </header>
    <div class="personMsg">
      <h2>{{uname}}</h2>
      <p>欢迎登录</p>
    </div>
    <div class="billList">
     <a @click="test" data-url ='/salelist' >
        <img src="../../assets/imgs/index_icon_sell.png" alt=""/>
        <p>销售订单</p>
      </a>
      <a @click="test" data-url ="/buylist">
        <img src="../../assets/imgs/index_icon_buy.png" alt=""/>
        <p>采购订单</p>
     </a>

      <router-link to="/billingSelect">
        <img src="../../assets/imgs/index_icon_buyBilling.png" alt=""/>
        <p>采购开单</p>
      </router-link>

      <router-link to="/billingSale">
        <img src="../../assets/imgs/index_icon_sellBilling.png" alt=""/>
        <p>销售开单</p>
       </router-link>

      <a  @click="test" data-url ="/checklist">
        <img src="../../assets/imgs/index_icon_qc.png" alt=""/>
        <p>质检单</p>
      </a>

       <a  @click="test" data-url ="/settlelist">
        <img src="../../assets/imgs/index_icon_settle.png" alt=""/>
        <p>结算单</p>
      </a>
      <a  @click="test" data-url ="/instoragelist">
        <img src="../../assets/imgs/index_icon_enter.png" alt=""/>
        <p>入库单</p>
      </a>

       <a  @click="test" data-url ="/outstoragelist">
        <img src="../../assets/imgs/index_icon_out.png" alt=""/>
        <p>出库单</p>
      </a>
      <a  @click="test" data-url ="/sendlist">
        <img src="../../assets/imgs/index_icon_deliver.png" alt=""/>
        <p>发货单</p>
      </a>
      <a @click="tip">
        <img src="../../assets/imgs/index_icon_manage.png" alt=""/>
        <p>仓库管理</p>
      </a>
      <a @click="tip">
        <img src="../../assets/imgs/index_icon_pay.png" alt=""/>
        <p>付款单</p>
      </a>
      <a @click="tip">
        <img src="../../assets/imgs/index_icon_receipt.png" alt=""/>
        <p>收款单</p>
      </a>
    </div>
  <template  v-for=" item in homelistdata">
     <template v-if="item.length>0">
    <div class="homeorderList">
      <h3>
        {{item[0].type}}
        <router-link :to="{path:item[0].listUrl}">更多<img src="../../assets/imgs/jiantou_left.png" alt=""/></router-link>
      </h3>
      <ul><li v-for="(subitem,subindex) in item" :key="subindex">
         <router-link v-if="subitem.listUrl&&subitem.listUrl.includes('sale')" :to="{path:subitem.detailUrl,query:{type:'1',oid:subitem.id}}">
            发往 <span>{{subitem.name}}</span> 的订单
            <b>{{subitem.result | splice}}</b>
         </router-link>
          <router-link v-else-if="subitem.listUrl&&subitem.listUrl.includes('buy')" :to="{path:subitem.detailUrl,query:{type:'2',oid:subitem.id}}">
            发往 <span>{{subitem.name}}</span> 的订单
            <b>{{subitem.result | splice}}</b>
         </router-link>
         <router-link v-else-if='subitem.listUrl' :to="{path:subitem.detailUrl,query:{oid:subitem.id}}">
            发往 <span>{{subitem.name}}</span> 的订单
            <b>{{subitem.result | splice}}</b>
         </router-link>
         <router-link v-else to="">
            发往 <span>{{subitem.name}}</span> 的订单
            <b>{{subitem.result | splice}}</b>
         </router-link>
        </li>
      </ul>

    </div>
      </template>
  </template>

    <tip :tipmsg="tipMsg"></tip>
  </div>
</template>

<script>
import tip from "../../components/tip/tip.vue";
import { ajax } from "@/axios/api.js";
import api from "@/axios/api.js";
import { Toast } from 'mint-ui';
import { Indicator } from 'mint-ui';
import { setTimeout } from 'timers';
export default {
  components: {
    tip
  },
  filters: {
    splice: function(val) {
      return val.substr(val.length - 3, 3);
    }
  },
  created() {
   // Indicator.open('加载中..');
    this.cookie.delCookie("keywords");
    this.cookie.delCookie("searchId");
  },
  methods: {
    tip() {
      this.tipMsg = ["开发中，敬请期待", true];
    },
    feedback($requrl, $params, $location) {
      ajax($requrl,$params).then(res => {
        if (res.status_code == 10002 || res.status_code == 10049) {
          this.tipMsg = ["您暂未开通该权限，无法访问", true];
        } else {
          this.$router.push({ path: $location });
        }
      });
    },
    test(ev) {
      let url = ev.target.getAttribute("data-url")||ev.target.parentNode.getAttribute("data-url"),
        requrl,
        params = {};
      if (url.includes("salelist")) {
        requrl = "cloud/saleorder/getorderlist";
        params = {
          user_id: this.cookie.getCookie("uid"),
          order_type:1,
           state: 0
        };
      } else if (url.includes("buylist")) {
        requrl = "cloud/saleorder/getorderlist";
        params = {
          user_id: this.cookie.getCookie("uid"),
          order_type: 2,
          state: 0
        };
      } else if (url.includes("checklist")) {
        requrl = "cloud/qualitycheck/getqualitychecklist";
        params = {
          uid: this.cookie.getCookie("uid"),
          pageNum: 1,
          size: 1,
          state: 0
        };
      } else if (url.includes("settlelist")) {
        requrl = "cloud/balance/getbalancelist";
        params = {
          uid: this.cookie.getCookie("uid"),
          pageNum: 1,
          size: 1,
          state: 0
        };
      } else if (url.includes("instoragelist")) {
        requrl = "Cloud/Warehousing/warehousing_list";
        params = {
          eo_id: this.cookie.getCookie("uid")
        };
      } else if (url.includes("outstoragelist")) {
        requrl = "Cloud/OutOfTheTreasury/out_of_the_treasury_list";
        params = {
          eo_id: this.cookie.getCookie("uid")
        };
      } else if (url.includes("sendlist")) {
        requrl = "Cloud/DeliverGoods/invoice_list";
        params = {
          eo_id: this.cookie.getCookie("uid")
        };
      }
      this.feedback(requrl,params,url);
    }
  },

  data: function() {
    return {
      homelistdata: [],
      uname: "",
      tipMsg: ["", false]
    };
  },

  mounted: function() {
    var params = {
      uid: this.cookie.getCookie("uid")
    };
    var _this = this;
    this.ajax.homeShow(params).then(function(res) {
      if (res.status_code == 10000) {
        res.data.forEach((item, index) => {
          item.forEach(subitem => {
            if (subitem["type"].includes("销售")) {
              (subitem.listUrl = "/salelist"),
                (subitem.detailUrl = "/orderdetail");
            } else if (subitem["type"].includes("采购")) {
              (subitem.listUrl = "/buylist"),
                (subitem.detailUrl = "/orderdetail");
            } else if (subitem["type"].includes("质检")) {
              (subitem.listUrl = "/checklist"),
                (subitem.detailUrl = "/checkOrderdetail");
            } else if (subitem["type"].includes("结算")) {
              (subitem.listUrl = "/settlelist"),
                (subitem.detailUrl = "/settleOrderdetail");
            } else if (subitem["type"].includes("入库")) {
              (subitem.listUrl = "/instoragelist"),
                (subitem.detailUrl = "/instorageOrderdetail");
            } else if (subitem["type"].includes("出库")) {
              (subitem.listUrl = "/outstoragelist"),
                (subitem.detailUrl = "/outstorageOrderdetail");
            } else if (subitem["type"].includes("发货")) {
              (subitem.listUrl = "/sendlist"),
                (subitem.detailUrl = "/sendOrderdetail");
            }
          });
        });
        _this.homelistdata = res.data;
        console.log(_this.homelistdata);

        _this.uname = res.username;
      } else {
        alert(res.msg);
      }
    });
  }
};
</script>

<style lang="css" src="../../assets/css/home.css">
</style>
<style scoped>
.home {
  padding-bottom: 50px;
  overflow: auto;
}
</style>
