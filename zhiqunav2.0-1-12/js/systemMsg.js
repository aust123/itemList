/**
 * Created by Administrator on 2018/1/2.
 */

$('.topbar').load('../public/topbar.html');
$('.footer').load('../public/footer.html');

$('.personalMsg').css({'minHeight': ($(document).height() < $('body').height() ?
    $(document).height() : $('body').height())-438+'px'});


var userId= cookie.getCookie('uid');

//获取个人消息列表
var page= 1;
systemMsg(page);
function systemMsg(pg){
    var syspath='https://two.zhiqunale.cn/paper/user/get_system_news';
    var sysparam={
        pageNum:pg,
        size:10
    }
    GetList(sysparam,syspath,system);
}
function system(_data){
    console.log(_data);
    if(_data.status_code=='10000'){
        $('.moreMsg').show();
        var html=template('message-list',_data);
        $('.message-list').append(html);
    }
}

//点击加载更多
$('.moreMsg img').click(function(){
    page=page+1;
    systemMsg(page);
});
