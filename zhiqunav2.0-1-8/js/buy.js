/**
 * Created by Administrator on 2017/12/21.
 */

$('.topbar').load('../public/topbar.html');
$('.navbar').load('../public/navbar.html');
$('.footer').load('../public/footer.html');
$('.purchase-buy').load('buy_right.html');


//采购列表
//获取省份
initComplexArea('seachprov', 'seachcity', 'seachdistrict', area_array, sub_array, '0', '0', '0');

var provinces=$('#seachprov option');
for(var p=0;p<provinces.length;p++){
    if(($(provinces[p]).html().match(/^[\u4E00-\u9FA5]{2}/g))==localStorage.province){
        provinces[p].selected = 'selected';
    }
}
$('#seachprov').change(function(){
    list(1,true);
});

var pathname='https://two.zhiqunale.cn/paper/purchasegoods/getlobbyhallpurchaseneedlist';
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
    var params={
        province:$('#seachprov option:selected').html(),
        name:$('.name').val(),
        page:pg,
        size:10
    }
    if(userId){
        params.user_id=userId;
        params.device_number='pc_online';
    }
    GetList(params,pathname,listItem);
    function listItem(_data){
        console.log(_data);
        if(_data.status_code=='10000'){
            if(_data.data.length==0){
                curPage=curPage-1;
            }else{
                template.defaults.imports.dateFormat=function(date){
                    return getLocalTime(date);
                }
                var list=template('buyList',_data);
                $('.buyList').html(list);
                $('.page_turn').css({'display':'block'});
            }
        }
    }
}
$('.nameSear').click(function(){
    list(1);
});


//发布供应---判断
$('.issueSupp').click(function(){
    if(userId){
        window.open('issue_supply.html');
    }else{
        window.location.href='../login/login.html';
    }
});


//供应方报价
$('.buyList').delegate('tr','click',function(){
    if(userId){
        window.open('quote.html?pnid='+$(this).attr('data-pnid'));
    }else{
        window.location.href='../login/login.html';
    }
});


