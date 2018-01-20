/**
 * Created by Administrator on 2017/12/23.
 */

$('.topbar').load('../public/topbar.html');
$('.navbar').load('../public/navbar.html');
$('.footer').load('../public/footer.html');
$('.purchase-buy').load('store_right.html');

//获取地址栏
function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}
var rqid=GetQueryString("rqid");
//编辑采购需求前获取采购需求详情
var userId= cookie.getCookie('uid');
scanPur();
function scanPur(){
    var purpath='https://two.zhiqunale.cn/paper/purchasegoods/getneeddetailbeforeedit';
    var purparam={
        user_id:userId,
        device_number:'pc_online',
        pn_id:rqid
    }
    GetList(purparam,purpath,primary);
}
function primary(_data){
    console.log(_data);
    if(_data.status_code=='10000'){
        template.defaults.imports.dateFormat=function(date){
            return getLocalTime(date);
        }
        var html=template('issuePurchase-form',_data.data);
        $('.issuePurchase-form').html(html);
    }
}
