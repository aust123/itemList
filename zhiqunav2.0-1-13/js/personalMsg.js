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
personalMsg(page);
function personalMsg(pg){
    var perpath='https://two.zhiqunale.cn/paper/user/get_personal_news';
    var perparam={
        uid:userId,
        device_number:'pc_online',
        pageNum:pg,
        size:10
    }
    GetList(perparam,perpath,personal);
}
function personal(_data){
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
    personalMsg(page);
});

//阅读个人消息
$('.message-listitem.notyet').click(function(){
    readMsg($(this).attr('data-tn_id'));
});
function readMsg(tnid){
    var readpath='https://two.zhiqunale.cn/paper/user/read_personal_news';
    var readparam={
        uid:userId,
        device_number:'pc_online',
        tn_id:tnid
    }
    GetList(readparam,readpath,read);
}
function read(_data){
    if(_data.status_code=='10000'){
        window.location.reload();
    }
}