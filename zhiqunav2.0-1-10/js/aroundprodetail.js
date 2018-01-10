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
        var html1=template('prodetail-pic',_data);
        $('.prodetail-pic').html(html1);
        var html2=template('prodetail-summary',_data);
        $('.prodetail-summary').html(html2);
    }
}

//点击显示联系方式
$('.prodetail-pic').delegate('.prodetail-price-chat-tel','click',function(){
    var phoneNum=$(this).attr('data-phone');
    $('.popBox').show(function(){
        $('.popPhone').html(phoneNum);
    });
});
$('.popHide').click(function(){
    $('.popBox').hide();
});


