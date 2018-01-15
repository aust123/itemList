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
