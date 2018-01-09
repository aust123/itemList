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

//下一页
$('.next_page').click(function(){
    curPage++;
    search(curPage);
});
//上一页
$('.pre_page').click(function(){
    if(curPage!=1){
        curPage--;
        search(curPage);
    }
});

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
    console.log(_data);
    if(_data.status_code=='10000'){
        if(_data.data.length==0){
            curPage=curPage-1;
        }else{
            var html=template('searchlist',_data);
            $('.searchlist').show().html(html);
            if(_data.data.length>=10){
                $('.page_turn').css({'display':'block'});
            }
        }
    }else{
        $('.searchlist').hide();
        $('.page_turn').css({'display':'none'});
    }
}


//点击进入店铺
$('.searchlist').delegate('.shopdetail','click',function(){
    var cid=$(this).attr('data-cid');
    window.open('../mall/store_detail.html?cid='+cid);
});