/**
 * Created by Administrator on 2017/12/21.
 */

$('.purchase-buy-sel-item').click(function(){
    $(this).addClass('on').siblings().removeClass('on');
    $('.purchase-buy-content:eq('+$(this).index()+')').addClass('active')
        .siblings('.purchase-buy-content').removeClass('active');
});


var userId= cookie.getCookie('uid');

//我的报价列表
if(userId){
    pricelist();
}else{
    $('.priceList').html('<a href="#">您还未登录</a>');
}
function pricelist(){
    var pricepath='https://two.zhiqunale.cn/paper/supplywill/getquotepricelist';
    var priceparam={
        user_id:userId,
        device_number:'pc_online'
    }
    GetList(priceparam,pricepath,price);
    function price(_data){
        //console.log(_data);
        if(_data.status_code=='10000'){
            var html=template('priceList',_data);
            $('.priceList').html(html);
        }else if(_data.status_code=='10005'){
            $('.priceList').html('<a href="#">您还未通过实名认证</a>');
        }

    }
}

//供应方取消报价
$('.priceList').delegate('.cancelPrice','click',function(){
    var canpath='https://two.zhiqunale.cn/paper/supplywill/cancelquoteprice';
    var canparam={
        user_id:userId,
        device_number:'pc_online',
        user_name:userName,
        pn_id:$(this).attr('data-buyid'),
        buyer_id:$(this).attr('data-buyerid'),
        product_name:$('.proname').html(),
        sw_id:$(this).attr('data-swid')
    }
    GetList(canparam,canpath,cancel);
    function cancel(_data){
        if(_data.status_code=='10000'){
            pricelist();
        }
    }
});

//点击显示电话
$('.priceList').delegate('.phone','click',function(){
    var phoneNum=$(this).attr('data-phone');
    $('.popBox').show(function(){
        $('.popPhone').html(phoneNum);
    });
});
$('.popHide').click(function(){
    $('.popBox').hide();
});


//获取我的供应列表
if(userId){
    myApply();
}else{
    $('.applyList').html('<a href="#">您还未登录</a>');
}
function myApply(){
    var apppath='https://two.zhiqunale.cn/paper/papersale/getsupplygoodslist';
    var appparam={
        user_id:userId,
        device_number:'pc_online',
        state:1
    }
    GetList(appparam,apppath,apply);
    function apply(_data){
        if(_data.status_code=='10000'){
            for(var i=0;i<_data.data.length;i++){
                _data.data[i].created_at=getLocalTime(_data.data[i].created_at);
            }
            var html=template('applyList',_data);
            $('.applyList').html(html);
        }
    }
}

//下架供应商品
$('.applyList').delegate('.xiajia','click',function(){
    var xjpath='https://two.zhiqunale.cn/paper/papersale/downsupplygoods';
    var xjparam={
        user_id:userId,
        device_number:'pc_online',
        goods_id:$(this).attr('data-spid'),
        state:-1
    }
    GetList(xjparam,xjpath,xj);
    function xj(_data){
        console.log(_data);
        if(_data.status_code=='10000'){
            location.reload();
        }
    }
});


//刷新供应商品
$('.applyList').delegate('.refresh','click',function(){
    var sxpath='https://two.zhiqunale.cn/paper/papersale/refreshgoods';
    var sxparam={
        user_id:userId,
        device_number:'pc_online',
        goods_id:$(this).attr('data-spid')
    }
    GetList(sxparam,sxpath,sx);
    function sx(_data){
        if(_data.status_code=='10000'){
            location.reload();
        }
    }
});



//获取我发布的供应商品详情
$('.applyList').delegate('.purchase-buy-price-item','click',function(){
    if(userId){
        window.open('scan_supply.html?gdid='+$(this).attr('data-goodid'));
    }else{
        window.location.href='../login/login.html';
    }
})

