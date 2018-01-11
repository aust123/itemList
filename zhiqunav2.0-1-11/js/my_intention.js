/**
 * Created by Administrator on 2017/12/22.
 */
$('.topbar').load('../public/topbar.html');
$('.footer').load('../public/footer.html');
$('.personal-aside').load('personal_aside.html');
$('.ppbox').load('../public/popbox.html');

var userId= cookie.getCookie('uid');
var userName=cookie.getCookie('username');
//我的采购意向
var curPage=1;
//下一页
$('.next_page').click(function(){
    curPage++;
    buyPurpose(curPage);
});
//上一页
$('.pre_page').click(function(){
    if(curPage!=1){
        curPage--;
        buyPurpose(curPage);
    }
});
buyPurpose(curPage);
function buyPurpose(pg){
    var pathname='https://two.zhiqunale.cn/paper/paperbuy/getmypurchasewilllist';
    var params={
        user_id:userId,
        device_number:'pc_online',
        page:pg,
        size:10
    }
    GetList(params,pathname,purpose);
    function purpose(_data){
        console.log(_data);
        if(_data.status_code=='10000'){
            if(_data.data.length==0){
                curPage=curPage-1;
            }else{
                var html=template('purchase_list',_data);
                $('.purchase_list').html(html);
                $('.page_turn').css({'display':'block'});
            }
        }else if(_data.status_code=='10005'){
            $('.purchase_list').html('<a href="#">您还未通过实名认证</a>');
        }else if(_data.status_code=='10047'){
            $('.purchase_list').html('<a href="#">您还未登录</a>');
        }
    }
}


//取消采购意向
$('.purchase_list').delegate('.cancel','click',function(){
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
})

//同意采购意向
var paystyle;
$('.purchase_list').delegate('.agreePurpose','click',function(){
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
                    if(data.status_code=='10000') {
                        window.location.reload();
                    }
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


//点击显示电话
$('.purchase_list').delegate('.phone','click',function(){
    var phoneNum=$(this).attr('data-phone');
    $('.relationbox').show(function(){
        $('.relationbox .popPhone').html(phoneNum);
    });
});
$('.relationbox .popHide').click(function(){
    $('.relationbox').hide();
});
