/**
 * Created by Administrator on 2017/12/25.
 */

$('.topbar').load('../public/topbar.html');
$('.navbar').load('../public/navbar.html');
$('.footer').load('../public/footer.html');
$('.ppBox').load('../public/popBox.html');


$('.prodetail-summary').delegate('li','click',function(){
    $(this).addClass('on').siblings().removeClass('on');
    $('.prodetail-summary>div:eq('+$(this).index()+')').addClass('on')
        .siblings('div').removeClass('on');
});


var userId= cookie.getCookie('uid');
var storeid=GetQueryString("storeid");
var goodid=GetQueryString("goodid");


//获取经纬度
// 百度地图API功能
getdetail();
function getdetail(){
    var ulng=cookie.getCookie('userlng');
    var ulat=cookie.getCookie('userlat');
    //或者周边商品详情
    var pathname='https://two.zhiqunale.cn/paper/paperbuy/getsupplygoodsdetail';
    var param={
        store_id:storeid,
        supply_goods_id:goodid,
        lng:ulng,
        lat:ulat
    }
    if(userId){
        param.user_id=userId;
        param.device_number='pc_online';
    }
    GetList(param,pathname,detail);
}

function detail(_data){
    console.log(_data);
    if(_data.status_code=='10000'){
        var html1=template('prodetail-info',_data.data.store_data);
        $('.prodetail-info').html(html1);
        var html2=template('prodetail-summary-sel',_data);
        $('.prodetail-summary-sel').html(html2);
        var html5=template('prodetail-summary-detail',_data.data.supply_detail_data);
        $('.prodetail-summary-detail').html(html5);
        var html3=template('prodetail-price',_data);
        $('.prodetail-price').html(html3);
        var html4=template('prodetail-bannerlist',_data.data.supply_detail_data);
        $('.prodetail-bannerlist').html(html4);
        var html6=template('prodetail-focus',_data.data.supply_detail_data);
        $('.prodetail-focus').html(html6);
        evaluation();
    }
}


//获取商品评价
function evaluation(){
    var pjpathname='https://two.zhiqunale.cn/Paper/PersonalCenter/commodity_evaluation';
    var pjparam={
        product_id:goodid,
        product_type:2,
        pageNum:1,
        size:10,
        c_id:userId,
        user_state:2
    }
    if(userId){
        pjparam.device_number='pc_online';
    }
    GetList(pjparam,pjpathname,eva);
    function eva(_data){
        console.log(_data);
        if(_data.status_code=='10000'){
            //自定义函数
            template.defaults.imports.dateFormat = function(date){
                return getLocalTime(date);
            };
            var html=template('proevaluation',_data);
            $('.proevaluation').html(html);
        }else if(_data.status_code=='10001'){
            $('.proevaluation').html('暂无数据').css({'fontSize':'18px','paddingTop':'20px'});
        }
    }
}


//点击显示联系方式
$('.prodetail-price').delegate('.prodetail-price-chat-tel','click',function(){
    var phoneNum=$(this).attr('data-phone');
    $('.relationBox').show(function(){
        $('.popPhone').html(phoneNum);
    });
});



//左右切换
$('.icon.pro-prev').click(function(){
    var curindex=$('.prodetail-banneritem.on').index();
    if(curindex==0){
        $('.prodetail-banneritem:eq('+($('.prodetail-banneritem').length-1)+')').addClass('on').siblings().removeClass('on');
    }else{
        $('.prodetail-banneritem:eq('+(curindex-1)+')').addClass('on').siblings().removeClass('on');
    }
});
$('.icon.pro-next').click(function(){
    var curindex=$('.prodetail-banneritem.on').index();
    if(curindex==$('.prodetail-banneritem').length-1){
        $('.prodetail-banneritem:eq(0)').addClass('on').siblings().removeClass('on');
    }else{
        $('.prodetail-banneritem:eq('+(curindex+1)+')').addClass('on').siblings().removeClass('on');
    }
});


//点击关注商品
$('.prodetail-focus').delegate('.addfocus','click',function(){
    var focuspath='https://two.zhiqunale.cn/paper/user/follow_product_store';
    var focusparam={
        uid:userId,
        device_number:'pc_online',
        favorite_type:1,
        favorite_id:goodid,
        favorite_state:2
    }
    GetList(focusparam,focuspath,focus);
});
function focus(_data){
    console.log(_data);
    if(_data.status_code=='10000'){
        getdetail();
    }
}

//点击取消关注商品
$('.prodetail-focus').delegate('.cancelfocus','click',function(){
    var focuspath='https://two.zhiqunale.cn/paper/user/cancel_follow';
    var focusparam={
        uid:userId,
        device_number:'pc_online',
        favorite_type:1,
        favorite_id:goodid,
        favorite_state:1
    }
    GetList(focusparam,focuspath,focus1);
});
function focus1(_data){
    console.log(_data);
    if(_data.status_code=='10000'){
        getdetail();
    }
}

