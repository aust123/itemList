/**
 * Created by Administrator on 2017/12/25.
 */

$('.topbar').load('../public/topbar.html');
$('.navbar').load('../public/navbar.html');
$('.footer').load('../public/footer.html');


var userId= cookie.getCookie('uid');

var goodId=GetQueryString("goodId");

//或者周边商品详情
var pathname='https://two.zhiqunale.cn/paper/packaround/getaroundgoodsdetail';
var param={
    pag_id:goodId
}
if(userId){
    param.user_id=userId;
    param.device_number='pc_online';
}
GetList(param,pathname,detail);
function detail(_data){
    console.log(_data);
    if(_data.status_code=='10000'){
        var html1=template('prodetail-price',_data);
        $('.prodetail-price').html(html1);
        var html2=template('prodetail-bannerlist',_data);
        $('.prodetail-bannerlist').html(html2);
        var html3=template('prodetail-summary',_data);
        $('.prodetail-summary').html(html3);
    }
}

//点击显示联系方式
$('.prodetail-price-chat-tel').click(function(){
    var phoneNum=$(this).attr('data-phone');
    $('.popBox').show(function(){
        $('.popPhone').html(phoneNum);
    });
});
$('.popHide').click(function(){
    $('.popBox').hide();
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
    if(curindex==$('.prodetail-banneritem').length){
        $('.prodetail-banneritem:eq(0)').addClass('on').siblings().removeClass('on');
    }else{
        $('.prodetail-banneritem:eq('+(curindex+1)+')').addClass('on').siblings().removeClass('on');
    }
});

