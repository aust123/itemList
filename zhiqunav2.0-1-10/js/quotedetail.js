/**
 * Created by Administrator on 2017/12/23.
 */
$('.topbar').load('../public/topbar.html');
$('.navbar').load('../public/navbar.html');
$('.footer').load('../public/footer.html');
$('.purchase-buy').load('buy_right.html');

//获取用户id
var userId= cookie.getCookie('uid');
var userName=cookie.getCookie('username');
//获取地址栏的采购需求id
function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  unescape(r[2]); return null;
}


//获取报价详情
quotedetail();
function quotedetail(){
    var qtpath='https://two.zhiqunale.cn/paper/supplywill/getquotepricedetail';
    var qtparam={
        user_id:userId,
        device_number:'pc_online',
        sw_id:GetQueryString('sd')
    }
    GetList(qtparam,qtpath,qtdetail);
}
function qtdetail(_data){
    console.log(_data.data);
    if(_data.status_code=='10000'){
        template.defaults.imports.dateFormat = function(date){
            return getLocalTime(date);
        };
        var html=template('quotedetail',_data.data);
        $('.quotedetail').html(html);
    }
}