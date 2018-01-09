/**
 * Created by Administrator on 2017/12/21.
 */

$('.topbar').load('../public/topbar.html');
$('.footer').load('../public/footer.html');
$('.personal-aside').load('personal_aside.html');

$('.supply-sel li').click(function(){
    $(this).addClass('on').siblings().removeClass('on');
    $('.purchase_list>div:eq('+$(this).index()+')').
        addClass('on').siblings().removeClass('on');
});


var userId= cookie.getCookie('uid');

//获取上架中的商品列表
var pageing=1;
//下一页
$('.next_page1').click(function(){
    pageing++;
    supplying(pageing);
});
//上一页
$('.pre_page1').click(function(){
    if(pageing!=1){
        pageing--;
        supplying(pageing);
    }
});
supplying(pageing);
function supplying(pg){
    var apppath='https://two.zhiqunale.cn/paper/papersale/getsupplygoodslist';
    var appparam={
        user_id:userId,
        device_number:'pc_online',
        page:pg,
        size:10,
        state:1
    }
    GetList(appparam,apppath,apply);
    function apply(_data){
        if(_data.status_code=='10000'){
            if(_data.data.length==0){
                pageing=pageing-1;
            }else{
                template.defaults.imports.dateFormat=function(date){
                    return getLocalTime(date);
                }
                var html=template('supplying',_data);
                $('.supplying').html(html);
                $('.pageing').css({'display':'block'});
            }
        }
    }
}

//点击进入供应商品详情
$('.supplying').delegate('.gying','click',function(e){
    var ev = e || window.event;
    var target = ev.target || ev.srcElement;
    if (target.nodeName.toLowerCase() != 'a') {
        window.location.href='../purchase/scan_supply.html?gdid='+$(this).attr('data-gdid');
    }
});


//获取已下架的商品列表
var pageed=1;
//下一页
$('.next_page2').click(function(){
    pageed++;
    supplyed(pageed);
});
//上一页
$('.pre_page2').click(function(){
    if(pageed!=1){
        pageed--;
        supplyed(pageed);
    }
});
supplyed(pageed);
function supplyed(pg){
    var apppath='https://two.zhiqunale.cn/paper/papersale/getsupplygoodslist';
    var appparam={
        user_id:userId,
        device_number:'pc_online',
        page:pg,
        size:10,
        state:-1
    }
    GetList(appparam,apppath,apply);
    function apply(_data){
        console.log(_data);
        if(_data.status_code=='10000'){
            if(_data.data.length==0){
                pageed=pageed-1;
            }else{
                template.defaults.imports.dateFormat=function(date){
                    return getLocalTime(date);
                }
                var html=template('supplyed',_data);
                $('.supplyed').html(html);
                $('.paged').css({'display':'block'});
            }
        }
    }
}


//下架供应商品
$('.supplying').delegate('.down','click',function(){
    var xjpath='https://two.zhiqunale.cn/paper/papersale/downsupplygoods';
    var xjparam={
        user_id:userId,
        device_number:'pc_online',
        goods_id:$(this).attr('data-spid'),
        state:-1
    }
    GetList(xjparam,xjpath,xj);
    function xj(_data){
        console.log(_data.msg);
        if(_data.status_code=='10000'){
            location.reload();
        }
    }
});

//上架供应商品
$('.supplyed').delegate('.up','click',function(){
    var sjpath='https://two.zhiqunale.cn/paper/papersale/downsupplygoods';
    var sjparam={
        user_id:userId,
        device_number:'pc_online',
        goods_id:$(this).attr('data-spid'),
        state:1
    }
    GetList(sjparam,sjpath,sj);
    function sj(_data){
        console.log(_data.msg);
        if(_data.status_code=='10000'){
            location.reload();
        }
    }
});

//刷新供应商品
$('.supplying').delegate('.refresh','click',function(){
    var sxpath='https://two.zhiqunale.cn/paper/papersale/refreshgoods';
    var sxparam={
        user_id:userId,
        device_number:'pc_online',
        goods_id:$(this).attr('data-spid')
    }
    GetList(sxparam,sxpath,sx);
    function sx(_data){
        console.log(_data.msg);
        if(_data.status_code=='10000'){
            location.reload();
        }
    }
});
