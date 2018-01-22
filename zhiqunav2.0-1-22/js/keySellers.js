/**
 * Created by Administrator on 2018/1/12.
 */


$('.topbar').load('../public/topbar.html');
$('.footer').load('../public/footer.html');

$('.fufei li').click(function(){
    $(this).addClass('on').siblings().removeClass('on');
});

//选择时间
var dates = $('#startTime,#endTime');
dates.datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    maxDate: null,
    format: 'yyyy-mm-dd',
    todayHighlight: true,
    onSelect: function(selectedDate) {
        startTime=selectedDate;
        var option = this.id == "startTime" ? "minDate" : "maxDate";
        dates.not(this).datepicker("option", option, selectedDate);
    }
});

//点击提交卖货申请
function issueSure(sid,addr,paper){
    if($('.saleName').val()==''){
        alert('请填写货品名称');
    }else if(checkweight($('.saleWeight').val())!=true){
        alert('货品重量'+checkweight($('.saleWeight').val()));
    }else if($('#startTime').val()==''){
        alert('请选择发货日期');
    }else{
        submitApply(sid,addr,paper);
    }
}
function submitApply(sid,addr,paper){
    if($('.supplypaper option:selected').val()!=0){
        var subpath='https://two.zhiqunale.cn/paper/papermill/buyerquoteprice';
        var subparam={
            user_id:cookie.getCookie('uid'),
            user_name:cookie.getCookie('username'),
            device_number:'pc_online',
            buyer_id:sid,
            sale_weight:$('.saleWeight').val(),
            who_pay_logistic:$('.fufei li.on').attr('data-fee'),
            sw_send_time:DateToUnix($('#startTime').val()),
            sw_reiceve_address:addr,
            sw_product_name:$('.saleName').val(),
            paper_name:paper
        }
        GetList(subparam,subpath,submit);
    }else{
        alert('请选择纸厂');
    }
}
function submit(_data){
    alert(_data.msg);
    if(_data.status_code=='10000'){
        window.close();
    }
}