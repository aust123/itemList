/**
 * Created by Administrator on 2017/12/20.
 */
$('.ppbox').load('../public/popbox.html');

$('.purchase-buy-sel-item').click(function(){
    $(this).addClass('on').siblings().removeClass('on');
    $('.purchase-buy-content:eq('+$(this).index()+')').addClass('active')
        .siblings('.purchase-buy-content').removeClass('active');
});

var userId= cookie.getCookie('uid');
var userName=cookie.getCookie('username');
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
                if(paystyle=='njpay'){
                    window.location.href='../account/bankcard.html?pid='+$('.agreePurpose').attr('data-buyId')+'&pnm='+$('.goodgg').html()+'&sid='+$('.agreePurpose').attr('data-id');
                }else if(paystyle=='yue'){
                    $('.paybox').hide();
                    $('.paypwd').show(function(){
                        $('.pwdsure').click(function(){
                            if($('.pwdtxt').val()!=''){
                                agreepur(paystyle,$('.pwdtxt').val());
                            }else{
                                alert('密码不能为空');
                                window.location.reload();
                            }
                        });
                    });
                }else{
                    agreepur(paystyle);
                }
            });
        });
    }else{
        agreepur();
    }
});

function agreepur(channel,paypwd){
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
    if(paypwd){
        agrPurparam.pay_password=paypwd;
    }
    GetList(agrPurparam,agrPurpath,agrPur);
}
function agrPur(_data){
    payment(_data);
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
