<template>
    <div>
        <section class="track-content">
           <div class="track-status">              
                <h3 class="track-title"><img src="../../assets/imgs/trackorder_icon.png" alt=""><b>订单已取消</b><span>6-30 18:30:40</span></h3>
                <div class="track-info">
                    <p>操作人：老白</p>
                    <p>取消原因：无货</p>
                </div>                
            </div> 
            <div class="track-status">              
                <h3 class="track-title"><img src="../../assets/imgs/trackorder_icon.png" alt=""><b>收货成功，订单已完成</b><span>6-30 18:30:40</span></h3>
                <div class="track-info">
                    <p>实收合计：￥12000.00</p>                   
                </div>                
            </div>
            <div class="track-status">              
                <h3 class="track-title"><img src="../../assets/imgs/trackorder_icon.png" alt=""><b>结算单已录入，等待首付款</b><span>6-30 18:30:40</span></h3>
                <div class="track-info">
                     <p>应收合计：￥12000.00</p>    
                </div>                
            </div>
            <div class="track-status">              
                <h3 class="track-title"><img src="../../assets/imgs/trackorder_icon.png" alt=""><b>发货成功，将发往<em>广东玖龙纸业</em></b><span>6-30 18:30:40</span></h3>
                <div class="track-info">
                    <p>皖A 66666 等10辆</p>                  
                </div>                
            </div>
            <div class="track-status">              
                <h3 class="track-title"><img src="../../assets/imgs/trackorder_icon.png" alt=""><b><em>纸元仓库</em>出库成功，等待发货</b><span>6-30 18:30:40</span></h3>
                <div class="track-info">
                    <p>操作人：老白</p>                   
                </div>                
            </div>
            <div class="track-status">              
                <h3 class="track-title"><img src="../../assets/imgs/trackorder_icon.png" alt=""><b>订单生成成功，等待出库</b><span>6-30 18:30:40</span></h3>
                <div class="track-info">
                    <p>订单号：SD7898988998988</p>
                    <p>关联审批号：CD787778978979</p>
                </div>                
            </div>
        </section>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style>
.track-content {
  margin-top: 14px;
  background-color: #fff;
  padding: 40px 30px;
  box-sizing: border-box;
}
.track-status{
    margin-bottom: 70px;
}
.track-info{
    padding-left: 80px;
    box-sizing: border-box;
    position: relative;
}
.track-info::after {
    content: '';
    display: inline-block;
    width: 2px;
    height: 140px;
    background-color: #e0e0e0;
    position: absolute;
    top: -10px;
    left:32px;
}
.track-status:nth-last-child(1) .track-info::after{
    display: none;
}
.track-status p {
  font-size: 28px;
  color: #666;
  margin-bottom: 10px;
  padding: 0
}
.track-title {
  display: flex;
  align-items: center;
  color: #333;
  font-size: 32px;
  margin-bottom: 12px;
  position: relative;
  padding: 0
}
.track-title span {
  font-size: 26px;
  color: #999;
  position: absolute;
  right: 0px;
}
.track-title b{
    font-weight: normal;
    display: inline-block;
    width: 338px;
}
.track-title em{
    color: #0684f9;
    font-style: normal
}
.track-title img {
  width: 68px;
  height: 68px;
  margin-right: 20px;
}
</style>
