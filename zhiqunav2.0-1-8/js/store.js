/**
 * Created by Administrator on 2017/12/20.
 */

$('.topbar').load('../public/topbar.html');
$('.navbar').load('../public/navbar.html');
$('.footer').load('../public/footer.html');
$('.purchase-buy').load('store_right.html');


//供应列表
//获取省份
initComplexArea('seachprov', 'seachcity', 'seachdistrict', area_array, sub_array, '0', '0', '0');
var provinces=$('#seachprov option');
for(var p=0;p<provinces.length;p++){
    if(($(provinces[p]).html().match(/^[\u4E00-\u9FA5]{2}/g))==localStorage.province){
        provinces[p].selected = 'selected';
    }
}
$('#seachprov').change(function(){
    list(1);
});
$('.nameSear').click(function(){
    list(1);
});

var pathname='https://two.zhiqunale.cn/paper/paperbuy/getpurchasegoodslist';
var params;
var userId= cookie.getCookie('uid');
var userName=cookie.getCookie('username');
var curPage=1;

//下一页
$('.next_page').click(function(){
    curPage++;
    list(curPage);
});
//上一页
$('.pre_page').click(function(){
    if(curPage!=1){
        curPage--;
        list(curPage);
    }
});


list(curPage);
function list(pg){
    if(!userId){
        params={
            province:($('#seachprov option:selected').html()),
            name:($('.name').val()),
            page:pg,
            size:10
        }
    }else{
        params={
            user_id:userId,
            device_number:'pc_online',
            province:($('#seachprov option:selected').html()),
            name:($('.name').val()),
            page:pg,
            size:10
        }
    }
    GetList(params,pathname,listItem);
    function listItem(_data){
        if(_data.status_code=='10000'){
            if(_data.data.length==0){
                curPage=curPage-1;
            }else{
                var list=template('listItem',_data);
                $('.listItem').html(list);
                $('.page_turn').css({'display':'block'});
            }
        }
    }
}




//点击进入商品详情
$('.listItem').delegate('tr','click',function(e){
    if(userId){
        var ev = e || window.event;
        var target = ev.target || ev.srcElement;
        if (target.nodeName.toLowerCase() != 'button') {
            window.open('prodetail.html?storeid='+$(this).attr('data-storeId')+'&goodid='+$(this).attr('data-goodId'));
        }else{
            window.open('intention.html?gid='+$(this).attr('data-goodId'));
        }
    }else{
        window.open('../login/login.html');
    }
});



