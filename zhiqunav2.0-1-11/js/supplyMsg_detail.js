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
                pay=$(this).attr('class');
                agree($(this).attr('class'));
            });
        });
    }else{
        agree();
    }
});
function agree(thispay){
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
    GetList(agparam,agpath,agr);
}
function agr(_data){
    if(pay=='alipay_pc_direct'){
        pingpp.createPayment(JSON.stringify(_data), function(result, err) {
            if (data.status_code=="10000") {
                alert(data.msg);
            } else {
                alert(result+" "+err.msg+" "+err.extra);
            }
        });
    }else if(pay=='wx_pub_qr'){
        $('.ewmshow').html(makeCode(_data.credential.wx_pub_qr));
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
                        window.location.href='supply_msg.html';
                    }else{
                        console.log(data.msg);
                    }
                },error:function(){
                    console.log("请求错误");
                }
            });
        },1000);
    }else if(pay=='upacp_pc'){
        pingpp.createPayment(JSON.stringify(_data), function (result, err) {
            if (data.status_code == "10000") {
                alert(data.msg);
            } else {
                alert(result + " " + err.msg + " " + err.extra);
            }
        });
    }else if(pay=='njpay'){

        //pingpp.createPayment(JSON.stringify(_data), function (result, err) {
        //    if (data.status_code == "10000") {
        //        alert(data.msg);
        //    } else {
        //        alert(result + " " + err.msg + " " + err.extra);
        //    }
        //});
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
