/**
 * Created by Administrator on 2017/12/20.
 */

$('.topbar').load('../public/topbar.html');
$('.navbar').load('../public/navbar.html');
$('.mallaround-footer').load('../public/footer.html');

var params;
var userId= cookie.getCookie('uid');
if(!userId){
    params={
        province:localStorage.province
    }
}else{
    params={
        user_id:userId,
        device_number:'pc_online',
        province:escape(localStorage.province)
    }
}
var pathname='https://two.zhiqunale.cn/paper/packaround/getpackaroundmainmsg';

GetList(params,pathname,around);
function around(_data){
    console.log(_data);
    if(_data.status_code==10000){
        var data=_data.data;
        var banner=template('mallaround-banner',data);
        $('.mallaround-banner').html(banner);
        var service=template('mall-apply',data);
        $('.mall-apply').html(service);
        var copera=template('mall-copera-box',data);
        $('.mall-copera-box').html(copera);
        var goods=template('mall-advice-list',data);
        $('.mall-advice-list').html(goods);
    }
}