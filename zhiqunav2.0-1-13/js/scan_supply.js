/**
 * Created by Administrator on 2017/12/23.
 */

$('.topbar').load('../public/topbar.html');
$('.navbar').load('../public/navbar.html');
$('.footer').load('../public/footer.html');
$('.purchase-buy').load('buy_right.html');

var userId= cookie.getCookie('uid');

var good_id=GetQueryString("gdid");

//获取我的供应商品详细信息
scanSupply();
function scanSupply(){
    var scanpath='https://two.zhiqunale.cn/paper/papersale/getgoodsmsgbeforeeditgoods';
    var scanparam={
        user_id:userId,
        device_number:'pc_online',
        goods_id:good_id,
        state:1
    }
    GetList(scanparam,scanpath,scan);
}

function scan(_data){
    console.log(_data);
    if(_data.status_code=='10000'){
        template.defaults.imports.dateFormat=function(date){
            return getLocalTime(date);
        }
        var html=template('supplydetail',_data.data);
        $('.supplydetail').html(html);
    }
}