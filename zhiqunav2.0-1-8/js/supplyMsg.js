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
    supplyMsg(curPage);
});
//上一页
$('.pre_page').click(function(){
    if(curPage!=1){
        curPage--;
        supplyMsg(curPage);
    }
});

//获取供应消息列表
var userId=cookie.getCookie('uid');
supplyMsg(curPage);
function supplyMsg(pg){
    var smpath='https://two.zhiqunale.cn/paper/supplywill/buyergetquotepricelist';
    var smparam={
        user_id:userId,
        device_number:'pc_online',
        page:pg,
        size:10
    }
    GetList(smparam,smpath,supply);
}
function supply(_data){
    if(_data.status_code=='10000'){
        if(_data.data.length==0){
            curPage=curPage-1;
        }else{
            var list=template('supplyMsgList',_data);
            $('.supplyMsgList').html(list);
            $('.page_turn').css({'display':'block'});
        }
    }
}

//点击显示消息详情
$('.supplyMsgList').delegate('tr','click',function(){
    window.open('supply_msg_detail.html?swid='+$(this).attr('data-sw_id'));
});


