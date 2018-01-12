/**
 * Created by Administrator on 2018/1/5.
 */

$('.topbar').load('../public/topbar.html');
$('.footer').load('../public/footer.html');
$('.personal-aside').load('personal_aside.html');
$('.ppbox').load('../public/popbox.html');

//获取供应消息详情
var userId=cookie.getCookie('uid');
var userName=cookie.getCookie('username');
msgdetail();
function msgdetail(){
    var dtpath='https://two.zhiqunale.cn/paper/supplywill/buyergetquotepricedetail';
    var dtparam={
        user_id:userId,
        device_number:'pc_online',
        sw_id:GetQueryString('swid')
    }
    GetList(dtparam,dtpath,detail);
}
function detail(_data){
    console.log(_data);
    if(_data.status_code=='10000'){
        template.defaults.imports.dateFormat=function(date){
            return getLocalTime(date);
        }
        var html=template('supplydetail',_data.data);
        $('.supplydetail').html(html);
    }
}


//采购方拒绝供应方报价
$('.supplydetail').delegate('.refuse','click',function(){
    refuse(this);
});
function refuse(This){
    var repath='https://two.zhiqunale.cn/paper/supplywill/buyerrefusequoteprice';
    var reparam={
        user_id:userId,
        device_number:'pc_online',
        user_name:userName,
        sw_id:$(This).attr('data-sw_id'),
        sale_id:$(This).attr('data-sw_saler'),
        product_name:$('.proname').html()
    }
    GetList(reparam,repath,refu);
}
function refu(_data){
    if(_data.status_code=='10000'){
        window.location.reload();
    }
}

//采购方同意供应方报价
var pay;
$('.supplydetail').delegate('.agree','click',function(){
    if($('.dingjin').attr('data-dingjin')==1){
        $('.paybox').show(function(){
            $('.paybox li').click(function(){
                paystyle=$(this).attr('class');
                if(paystyle=='njpay'){
                    window.location.href='../account/bankcard.html?sw_id='+$('.agree').attr('data-sw_id')+'&sale_id='+$('.agree').attr('data-sw_saler')+'&pnm='+$('.proname').html();
                }else if(paystyle=='yue'){
                    $('.paybox').hide();
                    $('.paypwd').show(function(){
                        $('.pwdsure').click(function(){
                            if($('.pwdtxt').val()!=''){
                                agree(paystyle,$('.pwdtxt').val());
                            }else{
                                alert('密码不能为空');
                            }
                        });
                    });
                }else{
                    agree(paystyle);
                }
            });
        });
    }else{
        agree();
    }
});
function agree(thispay,paypwd){
    var agpath='https://two.zhiqunale.cn/paper/supplywill/buyeracceptquoteprice';
    var agparam={
        user_id:userId,
        device_number:'pc_online',
        user_name:userName,
        sw_id:$('.agree').attr('data-sw_id'),
        sale_id:$('.agree').attr('data-sw_saler'),
        product_name:$('.proname').html()
    }
    if(thispay){
        agparam.channel=thispay;
    }
    if(paypwd){
        agparam.pay_password=paypwd;
    }
    GetList(agparam,agpath,agr);
}
function agr(_data){
    payment(_data);
}

//点击显示电话
$('.supplydetail').delegate('.phone','click',function(){
    var phoneNum=$(this).attr('data-phone');
    $('.relationBox').show(function(){
        $('.popPhone').html(phoneNum);
    });
});


//点击显示客服电话
$('.supplydetail').delegate('.kefu','click',function(){
    $('.relationBox').show(function(){
        $('.popPhone').html('057188072816');
    });
});
