/**
 * Created by Administrator on 2018/1/5.
 */

$('.topbar').load('../public/topbar.html');
$('.footer').load('../public/footer.html');
$('.personal-aside').load('personal_aside.html');


var curPage=1;

//下一页
$('.next_page').click(function(){
    curPage++;
    purchaseMsg(curPage);
});
//上一页
$('.pre_page').click(function(){
    if(curPage!=1){
        curPage--;
        purchaseMsg(curPage);
    }
});

//获取采购消息列表
var userId=cookie.getCookie('uid');
purchaseMsg(curPage);
function purchaseMsg(pg){
    var purpath='https://two.zhiqunale.cn/paper/papersale/getmybuymsg';
    var purparam={
        user_id:userId,
        device_number:'pc_online',
        page:pg,
        size:10
    }
    GetList(purparam,purpath,purchase);
}
function purchase(_data){
    console.log(_data);
    if(_data.status_code=='10000'){
        if(_data.data.length==0){
            curPage=curPage-1;
        }else{
            var list=template('purchaseMsgList',_data);
            $('.purchaseMsgList').html(list);
            $('.page_turn').css({'display':'block'});
        }
    }
}


//点击显示消息详情
$('.purchaseMsgList').delegate('tr','click',function(){
    window.open('purchase_msg_detail.html?pwid='+$(this).attr('data-pw_id'));
});
