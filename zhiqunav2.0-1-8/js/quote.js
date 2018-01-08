/**
 * Created by Administrator on 2017/12/23.
 */

$('.topbar').load('../public/topbar.html');
$('.navbar').load('../public/navbar.html');
$('.footer').load('../public/footer.html');
$('.purchase-buy').load('buy_right.html');

//选择时间
var dates = $('#startTime');
dates.datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    maxDate: null,
    format: 'yyyy-mm-dd',
    todayHighlight: true
});



//获取用户id
var userId= cookie.getCookie('uid');
var userName=cookie.getCookie('username');
//获取地址栏的采购需求id
function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}


//报价前获取采购需求详情
beforequote();
function beforequote(){
    var bfpath='https://two.zhiqunale.cn/paper/supplywill/getpurchaseneeddetailbeforequoteprice';
    var bfparam={
        user_id:userId,
        device_number:'pc_online',
        pn_id:GetQueryString('pnid')
    }
    GetList(bfparam,bfpath,beforeget);
    function beforeget(_data){
        if(_data.status_code=='10000'){
            template.defaults.imports.dateFormat=function(date){
                return getLocalTime(date);
            }
            var html=template('beforequote',_data.data);
            $('.beforequote').html(html);
        }
    }
}


//点击发布报价
$('.issueSure').click(function(){
    quote();
});
function quote(){
    var quotepath='https://two.zhiqunale.cn/paper/supplywill/buyerquoteprice';
    var quoteparam={
        user_id:userId,
        device_number:'pc_online',
        user_name:userName,
        pn_id:GetQueryString('pnid'),
        buyer_id:$('.quoteheadurl').attr('data-buyerid'),
        sale_weight:$('.quoteWeight').val(),
        baojia:$('.quotePrice').val(),
        who_pay_logistic:$('.fee').attr('data-logistic_fee'),
        sw_send_time:DateToUnix($('#startTime').val()),
        sw_reiceve_address:$('.addr').html(),
        sw_product_name:$('.hpgg').html()
    }
    if($('.dingjin').val()!=0){
        quoteparam.bail_money=$('.dingjin').val();
    }
    GetList(quoteparam,quotepath,quoteReturn);
}
function quoteReturn(_data){
    if(_data.status_code=='10000'){
        window.location.href='buy.html';
    }else{
        alert(_data.msg);
    }
}