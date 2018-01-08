/**
 * Created by Administrator on 2018/1/5.
 */

$('.topbar').load('../public/topbar.html');
$('.footer').load('../public/footer.html');
$('.personal-aside').load('personal_aside.html');

//获取采购消息详情
var userId=cookie.getCookie('uid');
msgdetail();
function msgdetail(){
    var dtpath='https://two.zhiqunale.cn/paper/papersale/getmybuymsgdetail';
    var dtparam={
        user_id:userId,
        device_number:'pc_online',
        pw_id:GetQueryString('pwid')
    }
    GetList(dtparam,dtpath,detail);
}
function detail(_data){
    if(_data.status_code=='10000'){
        template.defaults.imports.dateFormat=function(date){
            return getLocalTime(date);
        }
        var html=template('purchasedetail',_data.data);
        $('.purchasedetail').html(html);
    }
}


//卖家拒绝买家采购意向
$('.purchasedetail').delegate('.refuse','click',function(){
    refuse(this);
});
function refuse(This){
    var repath='https://two.zhiqunale.cn/paper/papersale/storerefusebuyer';
    var reparam={
        user_id:userId,
        device_number:'pc_online',
        pw_id:$(This).attr('data-pw_id'),
        buyer_id:$(This).attr('data-pw_buyer_id'),
        store_name:$('.storename').html()
    }
    GetList(reparam,repath,refu);
}
function refu(_data){
    if(_data.status_code=='10000'){
        window.location.reload();
    }
}

//选择时间
var dates = $('#startTime');
dates.datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    maxDate: null,
    format: 'yyyy-mm-dd',
    todayHighlight: true
});

//卖家同意买家采购意向
$('.djbox .close').click(function(){
    $('.djbox').hide();
});
$('.purchasedetail').delegate('.agree','click',function(){
    $('.djbox').show(function(){
        $('.sure').click(function(){
            if($('.sendtime').val()!=''&&$('.dj').val()!=''){
                agree(DateToUnix($('.sendtime').val()),$('.dj').val());
            }
        });
    });
});
function agree(time,dingjin){
    var agpath='https://two.zhiqunale.cn/paper/papersale/storeacceptbuyer';
    var agparam={
        user_id:userId,
        device_number:'pc_online',
        pw_id:$('.agree').attr('data-pw_id'),
        buyer_id:$('.agree').attr('data-pw_buyer_id'),
        store_name:$('.storename').html(),
        send_time:time,
        bail_money:dingjin
    }
    GetList(agparam,agpath,agr);
}
function agr(_data){
    window.location.reload();
}


//点击显示电话
$('.purchasedetail').delegate('.phone','click',function(){
    var phoneNum=$(this).attr('data-phone');
    $('.popBox').show(function(){
        $('.popPhone').html(phoneNum);
    });
});
$('.popHide').click(function(){
    $('.popBox').hide();
});

//点击显示客服电话
$('.purchasedetail').delegate('.kefu','click',function(){
    $('.popBox').show(function(){
        $('.popPhone').html('057188072816');
    });
});
