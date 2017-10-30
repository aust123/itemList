/**
 * Created by Administrator on 2017/7/31.
 */
$(function(){
    $('#top_bar').load('public/topBar.html');
    $('#search').load('public/search.html');
    $('#nav_bar').load('public/navBar.html');
    $('#footer').load('public/footer.html');
    //获取banner图
    var ban={
        type:1
    };
    var banname='/api/paper/get/banner';
    GetList(ban,banname,getBanner);
    function getBanner(_data){
        if(_data.status_code=='10000') {
            var bhtml = template('banner', _data);
            $('.banner .carList ul').html(bhtml);
        }
    }
    //banner图轮播
    $('.banner .nextBan').click(function(){
        var bindex=$('.banList li.on').index();
        if(bindex==$('.banList li').length-1){
            $('.banList li:eq(0)').addClass('on').siblings().removeClass('on');
        }else{
            $('.banList li:eq('+(bindex+1)+')').addClass('on').siblings().removeClass('on');
        }
    });
    $('.banner .prevBan').click(function(){
        var bindex=$('.banList li.on').index();
        if(bindex==0){
            $('.banList li:eq('+($('.banList li').length-1)+')').addClass('on').siblings().removeClass('on');
        }else{
            $('.banList li:eq('+(bindex-1)+')').addClass('on').siblings().removeClass('on');
        }
    });
    //纸厂、贸易公司左右点击
    $('.nextCtrl').click(function(){
        next($(this));
    });
    $('.prevCtrl').click(function(){
        prev($(this));
    });

    //有废纸标准的城市
    var citySome={
        code:1
    };
    var ctname='/api/paper/get/paper/city/has/paper/standard';
    GetList(citySome,ctname,getCity);
    function getCity(_data){
        if(_data.status_code=='10000'){
            var html=template('citySome',_data);
            $('.city').html(html).removeAttr('style');
            $('.city').delegate('.marg_li','click',function(){
                $('.current_city span').html($(this).html()+'价格');
                //根据点击的值向后台请求数据，展示在页面上
                zhishu(escape($(this).html()+'市'));
            });
        }else{
            $('.city').html(_data.msg).css({'font-size':'16px','line-height':'55px'});
        }
    }

    //废纸指数
    var zsCity=escape(localStorage.curCity);
    zhishu(zsCity);
    function zhishu(city){
        var zhishu={
            city:city
        };
        var zhishuname='/api/paper/get/paper/index';
        GetList(zhishu,zhishuname,getZhishu);
        function getZhishu(data){
            if(data.status_code=='10000'){
                var stand=template('standList',data);
                $('.standList .carList').html(stand).removeAttr('style');
            }else{
                $('.standList').html(data.msg).css({'font-size':'16px','text-align':'center','line-height':'50px'});
            }
        }
    }
    //废纸标准左右切换
    $('.standList .nextBan').click(function(){
        var ulWidth=$('.standList').css('width');
        var maxLength=-ulWidth.slice(0,ulWidth.length-2)*($('.standList .carList ul').length-1);
        var sleft=$('.standList .carList').css('left');
        sleft=sleft.slice(0,sleft.length-2);
        if(sleft>maxLength){
            sleft=(sleft-741)+'px';
            $('.standList .carList').animate({'left':sleft},500);
        }
    });
    $('.standList .prevBan').click(function(){
        var sleft=$('.standList .carList').css('left');
        sleft=sleft.slice(0,sleft.length-2);
        if(sleft<0){
            sleft=sleft-(-741)+'px';
            $('.standList .carList').animate({'left':sleft},500);
        }
    });
//  成交量
    var cj={
        code:1
    }
    var cjname='/api/paper/get/paper/deal';
    GetList(cj,cjname,getCj);
    function getCj(data){
        if(data.status_code=='10000'){
            var html=template('trade_msg',data);
            $('.trade_msg').html(html).removeAttr('style');
        }else{
            $('.trade_msg').html(data.msg).css({'font-size':'16px','text-align':'center','line-height':'50px'});
        }
    }

//    首页获取采购城部分
    var obj={
        city:escape(localStorage.curCity),
        tip:0,
        province:''
    }
    var cgcname='/api/paper/get/purchase/shop/recommend/goods';
    GetList(obj,cgcname,getCgc);
    function getCgc(_data){
        if(_data.status_code=='10000'){
            var isLogin=localStorage.getItem("isLogin");
            var uState=localStorage.getItem("userState");
            _data.data.isLogin=isLogin;
            _data.data.uState=uState;
            var html=template('shopList',_data);
            $('.shop_list').html(html).children('li:eq(3)').css('margin-right',0);
        }else if(_data.status_code=='10002'){
            $('.shop_list').html(_data.msg).css({'font-size':'20px'});
        }
    }
    //首页获取合作纸厂部分
    var obj1={
        company_type:1
    }
    var coppname='/api/paper/get/paper/or/trade/list';
    GetList(obj1,coppname,getCoper);
    function getCoper(data){
        if(data.status_code=='10000'){
            var html=template('coperFactory',data);
            $('.coperFactory').html(html);
        }else{
            $('.coperFactory').html(data.msg).css({'font-size':'20px'});
        }
    }

    //首页获取合作贸易公司部分
    var obj2={
        company_type:2
    }
    var coconame='/api/paper/get/paper/or/trade/list';
    GetList(obj2,coconame,getComp);
    function getComp(data){
        if(data.status_code=='10000'){
            var html=template('coperCompany',data);
            $('.coperCompany').html(html);
        }else{
            $('.coperCompany').html(data.msg).css({'font-size':'20px'});
        }
    }
})

//打包站
function pack(This){
    var pgid=$(This).next().children('.shop_msg').children('.shop_buy').attr('data-pgid');
    window.location.href='shop/shoppingCity.html?id='+pgid;
}
//采购申请
function apply(This){
    localStorage.setItem("goodId",$(This).attr('data-pgid'));
    window.location.href='shop/shopCity_submitMsg.html';
}
//下一张
function next(This){
    var thisUl=$(This).parents('.carCtrl').siblings('.carList').children('ul');
    if($(thisUl).children('li').length>=4){
        var swidth=$(thisUl).children('li').width();
        $(thisUl).children('li:first-child').appendTo($(thisUl));
        $(thisUl).animate({'marginLeft':-swidth+'px'},500,function(){
            $(thisUl).css('marginLeft',0);
        });
    }
}
//上一张
function prev(This){
    var thisUl=$(This).parents('.carCtrl').siblings('.carList').children('ul');
    if($(thisUl).children('li').length>=4){
        var swidth=$(thisUl).children('li').width();
        $(thisUl).css('marginLeft',-swidth+'px');
        $(thisUl).animate({'marginLeft':0},500,function(){
            $(thisUl).children('li:last-child').appendTo($(thisUl));
        });
    }
}