/**
 * Created by Administrator on 2017/12/22.
 */

$('.topbar').load('../public/topbar.html');
$('.footer').load('../public/footer.html');
$('.personal-aside').load('personal_aside.html');


var userId= cookie.getCookie('uid');
var userName=cookie.getCookie('username');


var curPage=1;
//下一页
$('.next_page').click(function(){
    curPage++;
    buyRequire(curPage);
});
//上一页
$('.pre_page').click(function(){
    if(curPage!=1){
        curPage--;
        buyRequire(curPage);
    }
});

//我发布的采购需求
buyRequire(curPage);
function buyRequire(pg){
    var pathname='https://two.zhiqunale.cn/paper/purchasegoods/getpurchasegoodslist';
    var params;
    if(!userId){
        params={
            page:pg,
            size:10
        }
    }else{
        params={
            user_id:userId,
            device_number:'pc_online',
            page:pg,
            size:10
        }
    }
    GetList(params,pathname,require);
    function require(_data){
        console.log(_data);
        if(_data.status_code=='10000'){
            if(_data.data.length==0){
                curPage=curPage-1;
            }else{
                var html=template('purchase_list',_data);
                $('.purchase_list').html(html);
                $('.page_turn').css({'display':'block'});
            }
        }else if(_data.status_code=='10005'){
            $('.purchase_list').html('<a href="#">您还未通过实名认证</a>');
        }else if(_data.status_code=='10047'){
            $('.purchase_list').html('<a href="#">您还未登录</a>');
        }
    }
}

//取消采购需求
$('.purchase_list').delegate('.down','click',function(){
    var cancelpath='https://two.zhiqunale.cn/paper/purchasegoods/cancelpurchaseneed';
    var cancelparam={
        user_id:userId,
        device_number:'pc_online',
        pn_id:$(this).attr('data-reqid')
    }
    GetList(cancelparam,cancelpath,cancel);
    function cancel(_data){
        if(_data.status_code=='10000'){
            window.location.reload();
        }
    }
});


//点击显示需求详情
$('.purchase_list').delegate('.cgxq','click',function(e){
    var ev = e || window.event;
    var target = ev.target || ev.srcElement;
    if (target.nodeName.toLowerCase() != 'a') {
        window.location.href='../mall/purchase_detail.html?rqid='+$(this).attr('data-rqid');
    }
});
