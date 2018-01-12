/**
 * Created by Administrator on 2017/12/23.
 */
$('.topbar').load('../public/topbar.html');
$('.footer').load('../public/footer.html');

//获取用户id
var userId= cookie.getCookie('uid');
var userName=cookie.getCookie('username');
var userPhone=cookie.getCookie('user_phone');

//提交采购意向前获取供应商户、商品和采购用户信息
beforeinten();
function beforeinten(){
    var bfpath='https://two.zhiqunale.cn/paper/paperbuy/getbasicmsgbeforesubmitpurchasewill';
    var bfparam={
        user_id:userId,
        device_number:'pc_online',
        goods_id:GetQueryString('gid')
    }
    GetList(bfparam,bfpath,before);
}
function before(_data){
    if(_data.status_code=='10000'){
        var html1=template('beforeintention',_data.data.supply_data);
        $('.beforeintention').html(html1);
        var html2=template('addrs',_data.data.default_address);
        $('.addrs').html(html2);
    }
}


//选择物流费用支付方
$('.fufei li').click(function(){
    $(this).addClass('on').siblings('li').removeClass('on');
});



//提交采购意向
$('.issueSure').click(function(){
    if($('.intenWeight').val()){
        var a_id=$('.addrs input[name=addr]:checked').attr('data-a_id');
        if(a_id){
            var addrs=$('.address-all span');
            var addrsHtml=[];
            for(var i=0;i<addrs.length;i++){
                addrsHtml.push($(addrs[i]).html());
            }
            intention(addrsHtml);
        }else{
            alert("请选择收货地址");
        }
    }else{
        alert('请填写采购数量');
    }
});
function intention(addrs){
    var intenpath='https://two.zhiqunale.cn/paper/paperbuy/submitpurchasewill';
    var intenparam={
        user_id:userId,
        device_number:'pc_online',
        user_name:userName,
        sp_id:$('.bfinten-right').attr('data-sp_id'),
        purchase_num:$('.intenWeight').val(),
        receive_address_id:$('.addrs input[name=addr]:checked').attr('data-a_id'),
        logic_pay_person:$('.fufei li.on').attr('data-fee'),
        user_phone:userPhone,
        address_username:$('.uname').html(),
        address_phone:$('.uphone').html(),
        address_detail:addrs[3],
        address_province:addrs[0],
        address_city:addrs[1],
        address_dist:addrs[2]
    }
    GetList(intenparam,intenpath,inten);
}
function inten(_data){
    if(_data.status_code=='10000'){
        window.location.href='store.html';
    }else if(_data.status_code=='10001'){
        alert('必须输入采购数量');
    }else if(_data.status_code='10004'){
        alert(_data.msg);
    }
}

