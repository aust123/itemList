/**
 * Created by Administrator on 2017/12/20.
 */

$('.purchase-buy-sel-item').click(function(){
    $(this).addClass('on').siblings().removeClass('on');
    $('.purchase-buy-content:eq('+$(this).index()+')').addClass('active')
        .siblings('.purchase-buy-content').removeClass('active');
});

var userId= cookie.getCookie('uid');
//我的采购意向
buyPurpose();
function buyPurpose(){
    var pathname1='https://two.zhiqunale.cn/paper/paperbuy/getmypurchasewilllist';
    var params1;
    if(!userId){
        params1={
            page:1,
            size:10
        }
    }else{
        params1={
            user_id:userId,
            device_number:'pc_online',
            page:1,
            size:10
        }
    }
    GetList(params1,pathname1,purpose);
    function purpose(_data){
        console.log(_data);
        if(_data.status_code=='10000'){
            var html=template('buyPurpose',_data);
            $('.buyPurpose').html(html);
        }else if(_data.status_code=='10005'){
            $('.buyPurpose').html('<a href="#">您还未通过实名认证</a>');
        }else if(_data.status_code=='10047'){
            $('.buyPurpose').html('<a href="#">您还未登录</a>');
        }
    }
}

//取消采购意向
$('.buyPurpose').delegate('.cancelPurpose','click',function(){
    var canPurpath='https://two.zhiqunale.cn/paper/paperbuy/cancelmypurchasewill';
    var canPurparam={
        user_id:userId,
        device_number:'pc_online',
        user_name:userName,
        purchase_will_id:$(this).attr('data-buyId'),
        product_name:$('.goodgg').html(),
        sender_id:$(this).attr('data-id')
    }
    GetList(canPurparam,canPurpath,canPur);
    function canPur(_data){
        if(_data.status_code=='10000'){
            buyPurpose();
        }
    }
});
//同意采购意向
var paystyle;
$('.buyPurpose').delegate('.agreePurpose','click',function(){
    if($(this).attr('data-pw_is_pay_bail')==1){
        $('.paybox').show(function(){
            $('.paybox li').click(function(){
                paystyle=$(this).attr('class');
                agreepur($(this).attr('class'));
            });
        });
    }else{
        agreepur();
    }
});
$('.closePaybox').click(function(){
    $('.paybox').hide();
});
function agreepur(channel){
    var agrPurpath='https://two.zhiqunale.cn/paper/paperbuy/useracceptpurchasewill';
    var agrPurparam={
        user_id:userId,
        device_number:'pc_online',
        user_name:userName,
        purchase_will_id:$('.agreePurpose').attr('data-buyId'),
        product_name:$('.goodgg').html(),
        sender_id:$('.agreePurpose').attr('data-id')
    }
    if(channel){
        agrPurparam.channel=channel;
    }
    GetList(agrPurparam,agrPurpath,agrPur);
}
function agrPur(_data){
    if(_data.status_code=='10000'){
        window.location.reload();
    }
    console.log(_data);
    if(paystyle=='alipay_pc_direct'){
        pingpp.createPayment(JSON.stringify(_data), function(result, err) {
            if (data.status_code=="10000") {
                alert(data.msg);
            } else {
                alert(result+" "+err.msg+" "+err.extra);
            }
        });
    }else if(paystyle=='wx_pub_qr'){
        $('.intentionewm').html(makeCode(_data.credential.wx_pub_qr));
        var qr={
            ping_order_no:_data.id
        }
        qr.sign=getUrl(qr);
        setInterval(function(){
            $.ajax({
                url:'https://two.zhiqunale.cn/paper/orders/wxpayornot',
                type:'post',
                dataType:'json',
                data:qr,
                success:function(data){
                    if(data.status_code=='10000'){
                        window.location.reload();
                    }else{
                        console.log(data.msg);
                    }
                },error:function(){
                    console.log("请求错误");
                }
            });
        },1000);
    }else if(paystyle=='upacp_pc'){
        pingpp.createPayment(JSON.stringify(_data), function (result, err) {
            if (data.status_code == "10000") {
                alert(data.msg);
            } else {
                alert(result + " " + err.msg + " " + err.extra);
            }
        });
    }
}
//生成二维码
function makeCode (url) {
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        width : 200,
        height : 200
    });
    return qrcode.makeCode(url);
}

//我发布的采购需求
buyRequire();
function buyRequire(){
    var pathname2='https://two.zhiqunale.cn/paper/purchasegoods/getpurchasegoodslist';
    var params2;
    if(!userId){
        params2={
            page:1,
            size:10
        }
    }else{
        params2={
            user_id:userId,
            device_number:'pc_online',
            page:1,
            size:10
        }
    }
    GetList(params2,pathname2,require);
    function require(_data){
        if(_data.status_code=='10000'){
            var html=template('buyRequire',_data);
            $('.buyRequire').html(html);
        }else if(_data.status_code=='10005'){
            $('.buyRequire').html('<a href="#">您还未通过实名认证</a>');
        }else if(_data.status_code=='10047'){
            $('.buyRequire').html('<a href="#">您还未登录</a>');
        }
    }
}
//编辑采购需求
$('.buyRequire').delegate('.editRequire','click',function(){
    window.location.href='issue_purchase.html?pnid='+$(this).attr('data-reqid');
});

//取消采购需求
$('.buyRequire').delegate('.cancelRequ','click',function(){
    var cancelpath='https://two.zhiqunale.cn/paper/purchasegoods/cancelpurchaseneed';
    var cancelparam={
        user_id:userId,
        device_number:'pc_online',
        pn_id:$(this).attr('data-reqid')
    }
    GetList(cancelparam,cancelpath,cancel);
    function cancel(_data){
        if(_data.status_code=='10000'){
            buyRequire();
        }
    }
});



//点击显示电话
$('.buyPurpose').delegate('.phone','click',function(){
    var phoneNum=$(this).attr('data-phone');
    $('.relationBox').show(function(){
        $('.relationBox .popPhone').html(phoneNum);
    });
});
$('.relationBox .popHide').click(function(){
    $('.relationBox').hide();
});