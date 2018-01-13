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

//获取供应纸厂列表
getPapers();
function getPapers(){
    var path='https://two.zhiqunale.cn/paper/papermill/getserverpaperlist';
    var param={
        trade_id:GetQueryString('sid')
    }
    GetList(param,path,getpaper);
}
function getpaper(_data){
    if(_data.status_code=='10000'){
        var html=template('supplypaper',_data);
        $('.supplypaper').append(html);
    }
}

//点击提交卖货申请
$('.issueSure').click(function(){
    if($('.saleName').val()==''){
        alert('请填写货品名称');
    }else if($('.saleWeight').val()==''){
        alert('请填写货品重量');
    }else if($('#startTime').val()==''){
        alert('请选择发货日期');
    }else{
        submitApply();
    }
});
function submitApply(){
    if($('.supplypaper option:selected').val()!=0){
        var subpath='https://two.zhiqunale.cn/paper/papermill/buyerquoteprice';
        var subparam={
            user_id:cookie.getCookie('uid'),
            user_name:cookie.getCookie('username'),
            device_number:'pc_online',
            buyer_id:GetQueryString('sid'),
            sale_weight:$('.saleWeight').val(),
            who_pay_logistic:$('.fufei li.on').attr('data-fee'),
            sw_send_time:DateToUnix($('#startTime').val()),
            sw_reiceve_address:$('.supplypaper option:selected').attr('data-address'),
            sw_product_name:$('.saleName').val(),
            paper_name:$('.supplypaper option:selected').html()
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