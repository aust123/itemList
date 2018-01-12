/**
 * Created by Administrator on 2017/12/22.
 */
$('.topbar').load('../public/topbar.html');
$('.footer').load('../public/footer.html');
$('.personal-aside').load('personal_aside.html');
$('.ppbox').load('../public/popbox.html');

var userId= cookie.getCookie('uid');
var userName= cookie.getCookie('username');
var curPage=1;
//下一页
$('.next_page').click(function(){
    curPage++;
    pricelist(curPage);
});
//上一页
$('.pre_page').click(function(){
    if(curPage!=1){
        curPage--;
        pricelist(curPage);
    }
});

//我的报价列表
pricelist(curPage);
function pricelist(pg){
    var pricepath='https://two.zhiqunale.cn/paper/supplywill/getquotepricelist';
    var priceparam={
        user_id:userId,
        device_number:'pc_online',
        page:pg,
        size:10
    }
    GetList(priceparam,pricepath,price);
    function price(_data){
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


//供应方取消报价
$('.purchase_list').delegate('.cancel','click',function(){
    var canpath='https://two.zhiqunale.cn/paper/supplywill/cancelquoteprice';
    var canparam={
        user_id:userId,
        device_number:'pc_online',
        user_name:userName,
        pn_id:$(this).attr('data-buyid'),
        buyer_id:$(this).attr('data-buyerid'),
        product_name:$('.proname').html(),
        sw_id:$(this).attr('data-swid')
    }
    GetList(canparam,canpath,cancel);
    function cancel(_data){
        if(_data.status_code=='10000'){
            pricelist();
        }
    }
});


//点击显示电话
$('.purchase_list').delegate('.phone','click',function(){
    var phoneNum=$(this).attr('data-phone');
    $('.relationBox').show(function(){
        $('.popPhone').html(phoneNum);
    });
});


//点击进入报价详情
$('.purchase_list').delegate('.quotedetail td:not(".quotechat")','click',function(e){
    window.open('../purchase/quotedetail.html?sd='+$('.quotedetail').attr('data-swid'));
});