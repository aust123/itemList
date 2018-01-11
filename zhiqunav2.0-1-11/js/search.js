/**
 * Created by Administrator on 2017/12/22.
 */
$('.topbar').load('../public/topbar.html');
$('.navbar').load('../public/navbar.html');
$('.footer').load('../public/footer.html');
//$('.papersearch-filter span').click(function(){
//    $(this).addClass('on').siblings().removeClass('on');
//});

var curPage=1;
$('.sear').click(function(){
    search(1);
});
function KeyDown()
{
    if (event.keyCode == 13)
    {
        search(1);
    }
}

function search(pg){
    if($('.keywords').val()!=''){
        var pathname='https://two.zhiqunale.cn/paper/user/search_paper_stage_or_company';
        var param={
            pageNum:pg,
            size:10,
            search_type:1,
            keywords:$('.keywords').val()
        }
        GetList(param,pathname,sear);
    }else{
        alert("请输入关键字");
    }
}
function sear(_data){
    if(_data.status_code=='10000'){
        var html=template('searchlist',_data);
        $('.searchlist').html(html);
    }else{
        $('.searchlist').html('暂无更多数据').css({'fontSize':'14px'});
    }
}


//点击进入店铺
$('.searchlist').delegate('.shopdetail','click',function(){
    var cid=$(this).attr('data-cid');
    window.open('../mall/store_detail.html?cid='+cid);
});