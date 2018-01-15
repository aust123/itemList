/**
 * Created by Administrator on 2017/12/21.
 */

$('.topbar').load('../public/topbar.html');
$('.navbar').load('../public/navbar.html');
$('.footer').load('../public/footer.html');

//获取热门纸厂
var curpage=1;

$('.addMore img').click(function(){
    curpage++;
    hotmill(curpage);
});

hotmill(curpage);
function hotmill(pg){
    var path='https://two.zhiqunale.cn/paper/paperaround/getaroundpaperlist';
    var param={
        lng:cookie.getCookie('userlng'),
        lat:cookie.getCookie('userlat'),
        page:pg,
        size:10
    }
    if(cookie.getCookie('uid')){
        param.user_id=cookie.getCookie('uid');
        param.device_number='pc_online';
    }
    GetList(param,path,gethotmill);
}
function gethotmill(_data){
    console.log(_data);
    if(_data.status_code=='10000'){
        if(_data.data.length==0){
            alert('暂无更多数据');
        }else{
            var html=template('hotmill-list',_data);
            $('.hotmill-list').append(html);
        }
    }
}

//一键卖货
$('.hotmill-list').delegate('.hotmill-item','click',function(){
    if(cookie.getCookie('uid')){
        window.open('key_sale.html?sid='+$(this).attr('data-paper_id')+'&panm='+escape($(this).attr('data-snm'))+'&ptype='+$(this).attr('data-type')+'&addr='+escape($(this).attr('data-detail_address')));
    }else{
        window.open('../login/login.html');
    }
});

