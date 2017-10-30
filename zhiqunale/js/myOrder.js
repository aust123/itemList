/**
 * Created by Administrator on 2017/8/5.
 */
/*日期插件专用*/
$(function() {
    $('#top_bar').load('../public/topBar.html');
    $('#nav_bar').load('../public/navBar.html');
    $('#search').load('../public/search.html');
    $('#footer').load('../public/footer.html');
    $('.myLeft').load('../public/accLeft.html');
    /*查询时间框内显示默认时间*/
    var dta = function getNowFormatDate(x) {
        var date = new Date();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if(month >= 1 && month <= 9) {
            month = "0" + (month-x);
        }
        if(strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var curdate = date.getFullYear() + '-' + month + '-' + strDate;
        return curdate;
    }
    $("#start").val(dta(1));
    $("#end").val(dta(0));
    var startTime=getTime(dta(1));
    var endTime=getTime(dta(0));
    //选择时间
    var dates = $('#start,#end');
    dates.datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        maxDate: new Date(),
        format: 'yyyy-mm-dd',
        todayHighlight: true
       /* onSelect: function(selectedDate) {
            startTime=selectedDate;
            var option = this.id == "start" ? "minDate" : "maxDate";
            dates.not(this).datepicker("option", option, selectedDate);
        }*/
    });
    /*采购/直销子选项中 待发货、待收货、待结算、已完成等选项内容切换*/
    $(".form_select>ul>li").each(function(i) {
        $(this).click(function() {
            $(this).addClass("current_select").siblings().removeClass("current_select");
            $(".form_item").eq(i).addClass("curent_item").siblings().removeClass("curent_item");
        })
    })

//				获取订单数据
    var page= 1;
    dfh(page,true);
    //待发货
    function dfh(pg,pages){
        var obj={
            pe_id:localStorage.getItem("userId"),
            pe_phone:localStorage.getItem("userPhone"),
            order_state:1,
            start:startTime,
            end:endTime,
            page:pg
        };
        var dfhname='/api/paper/get/straight/order/list';
        GetList(obj,dfhname,getDfh);
        function getDfh(data){
            if(data.status_code=='10000'&&data.data.length!=0){
                $('.states li:eq(0)').children('span').html('('+data.totalRecord+')');
                var html=template('dfhList',data);
                $('.dfhList').html(html);
                if(pages){
                    $('.dfhPages').html('');
                    //分页
                    $('.dfhPages').initPagenation({
                        totalCount: data.totalRecord,     //数据总个数,
                        showBtnFirst: true,     //是否显示 首页按钮
                        showCount: 15,          //每页显示多少个
                        showBtnsCount: 8      //数字按钮数量
                    });
                }
            }else{
                $('.dfhPages').html('');
                $('.states li:eq(0)').children('span').html('(0)');
                $('.dfhList').html(data.msg).css({'display':'block','text-align':'center'});
            }
        }
    }
    $('.dfhPages').delegate('a','click',function(){
        dfh($(this).html(),false);
    });
    $('.dfhPages').delegate('.pre-page','click',function(){
        var page=$(this).siblings('a.active').html();
        if(page!=1){
            dfh(page-1,false);
        }
    });
    $('.dfhPages').delegate('.next-page','click',function(){
        var page=$(this).siblings('a.active').html();
        if(page!=$(this).prev().prev().html()){
            dfh(parseInt(page)+1,false);
        }
    });
    $('.dfhPages').delegate('.first-page','click',function(){
        var page=$(this).next().html();
        dfh(page,false);
    });
    $('.dfhPages').delegate('.last-page','click',function(){
        var page=$(this).prev().html();
        dfh(page,false);
    });
    //待收货
    dsh(page,true);
    function dsh(pg,pages){
        var obj={
            pe_id:localStorage.getItem("userId"),
            pe_phone:localStorage.getItem("userPhone"),
            order_state:2,
            start:startTime,
            end:endTime,
            page:pg
        }
        var pathname='/api/paper/get/straight/order/list';
        GetList(obj,pathname,getList);
        function getList(data){
            if(data.status_code=='10000'&&data.data.length!=0){
                $('.states li:eq(1)').children('span').html('('+data.totalRecord+')');
                var html=template('dshList',data);
                $('.dshList').html(html);
                if(pages){
                    $('.dshPages').html('');
                    //分页
                    $('.dshPages').initPagenation({
                        totalCount: data.totalRecord,     //数据总个数,
                        showBtnFirst: true,     //是否显示 首页按钮
                        showCount: 15,          //每页显示多少个,默认10个
                        showBtnsCount: 8      //数字按钮数量,最多10个,默认10个
                    });
                }
            }else{
                $('.dshPages').html('');
                $('.states li:eq(1)').children('span').html('(0)');
                $('.dshList').html(data.msg).css({'display':'block','text-align':'center'});
            }
        }
    }
    $('.dshPages').delegate('a','click',function(){
        dsh($(this).html(),false);
    });
    $('.dshPages').delegate('.pre-page','click',function(){
        var page=$(this).siblings('a.active').html();
        if(page!=1){
            dsh(page-1,false);
        }
    });
    $('.dshPages').delegate('.next-page','click',function(){
        var page=$(this).siblings('a.active').html();
        if(page!=$(this).prev().prev().html()){
            dsh(parseInt(page)+1,false);
        }
    });
    $('.dshPages').delegate('.first-page','click',function(){
        var page=$(this).next().html();
        dsh(page,false);
    });
    $('.dshPages').delegate('.last-page','click',function(){
        var page=$(this).prev().html();
        dsh(page,false);
    });
    //待验收
    dys(page,true);
    function dys(pg,pages){
        var obj={
            pe_id:localStorage.getItem("userId"),
            pe_phone:localStorage.getItem("userPhone"),
            order_state:3,
            start:startTime,
            end:endTime,
            page:pg
        }
        var pathname='/api/paper/get/straight/order/list';
        GetList(obj,pathname,getList);
        function getList(data){
            if(data.status_code=='10000'&&data.data.length!=0){
                $('.states li:eq(2)').children('span').html('('+data.totalRecord+')');
                var html=template('dysList',data);
                $('.dysList').html(html);
                if(pages){
                    $('.dysPages').html('');
                    //分页
                    $('.dysPages').initPagenation({
                        totalCount: data.totalRecord,     //数据总个数,
                        showBtnFirst: true,     //是否显示 首页按钮
                        showCount: 15,          //每页显示多少个,默认10个
                        showBtnsCount: 8      //数字按钮数量,最多10个,默认10个
                    });
                }
            }else{
                $('.dysPages').html('');
                $('.states li:eq(2)').children('span').html('(0)');
                $('.dysList').html(data.msg).css({'display':'block','text-align':'center'});
            }
        }
    }
    $('.dysPages').delegate('a','click',function(){
        dys($(this).html(),false);
    });
    $('.dysPages').delegate('.pre-page','click',function(){
        var page=$(this).siblings('a.active').html();
        if(page!=1){
            dys(page-1,false);
        }
    });
    $('.dysPages').delegate('.next-page','click',function(){
        var page=$(this).siblings('a.active').html();
        if(page!=$(this).prev().prev().html()){
            dys(parseInt(page)+1,false);
        }
    });
    $('.dysPages').delegate('.first-page','click',function(){
        var page=$(this).next().html();
        dys(page,false);
    });
    $('.dysPages').delegate('.last-page','click',function(){
        var page=$(this).prev().html();
        dys(page,false);
    });
    //待付款
    dfk(page,true);
    function dfk(pg,pages){
        var obj={
            pe_id:localStorage.getItem("userId"),
            pe_phone:localStorage.getItem("userPhone"),
            order_state:4,
            start:startTime,
            end:endTime,
            page:pg
        }
        var pathname='/api/paper/get/straight/order/list';
        GetList(obj,pathname,getList);
        function getList(data){
            if(data.status_code=='10000'&&data.data.length!=0){
                $('.states li:eq(3)').children('span').html('('+data.totalRecord+')');
                data.slug=localStorage.getItem('userSign');
                var html=template('dfkList',data);
                $('.dfkList').html(html);
                if(pages){
                    $('.dfkPages').html('');
                    //分页
                    $('.dfkPages').initPagenation({
                        totalCount: data.totalRecord,     //数据总个数,
                        showBtnFirst: true,     //是否显示 首页按钮
                        showCount: 15,          //每页显示多少个,默认10个
                        showBtnsCount: 8      //数字按钮数量,最多10个,默认10个
                    });
                }
            }else{
                $('.dfkPages').html('');
                $('.states li:eq(3)').children('span').html('(0)');
                $('.dfkList').html(data.msg).css({'display':'block','text-align':'center'});
            }
        }
    }
    $('.dfkPages').delegate('a','click',function(){
        dfk($(this).html(),false);
    });
    $('.dfkPages').delegate('.pre-page','click',function(){
        var page=$(this).siblings('a.active').html();
        if(page!=1){
            dfk(page-1,false);
        }
    });
    $('.dfkPages').delegate('.next-page','click',function(){
        var page=$(this).siblings('a.active').html();
        if(page!=$(this).prev().prev().html()){
            dfk(parseInt(page)+1,false);
        }
    });
    $('.dfkPages').delegate('.first-page','click',function(){
        var page=$(this).next().html();
        dfk(page,false);
    });
    $('.dfkPages').delegate('.last-page','click',function(){
        var page=$(this).prev().html();
        dfk(page,false);
    });
    //已完成
    ywc(page,true);
    function ywc(pg,pages){
        var obj={
            pe_id:localStorage.getItem("userId"),
            pe_phone:localStorage.getItem("userPhone"),
            order_state:5,
            start:startTime,
            end:endTime,
            page:pg
        }
        var pathname='/api/paper/get/straight/order/list';
        GetList(obj,pathname,getList);
        function getList(data){
            if(data.status_code=='10000'&&data.data.length!=0){
                $('.states li:eq(4)').children('span').html('('+data.totalRecord+')');
                var html=template('ywcList',data);
                $('.ywcList').html(html);
                if(pages){
                    $('.ywcPages').html('');
                    //分页
                    $('.ywcPages').initPagenation({
                        totalCount: data.totalRecord,     //数据总个数,
                        showBtnFirst: true,     //是否显示 首页按钮
                        showCount: 15,          //每页显示多少个,默认10个
                        showBtnsCount: 8      //数字按钮数量,最多10个,默认10个
                    });
                }
            }else{
                $('.ywcPages').html('');
                $('.states li:eq(4)').children('span').html('(0)');
                $('.ywcList').html(data.msg).css({'display':'block','text-align':'center'});
            }
        }
    }
    $('.ywcPages').delegate('a','click',function(){
        ywc($(this).html(),false);
    });
    $('.ywcPages').delegate('.pre-page','click',function(){
        var page=$(this).siblings('a.active').html();
        if(page!=1){
            ywc(page-1,false);
        }
    });
    $('.ywcPages').delegate('.next-page','click',function(){
        var page=$(this).siblings('a.active').html();
        if(page!=$(this).prev().prev().html()){
            ywc(parseInt(page)+1,false);
        }
    });
    $('.ywcPages').delegate('.first-page','click',function(){
        var page=$(this).next().html();
        ywc(page,false);
    });
    $('.ywcPages').delegate('.last-page','click',function(){
        var page=$(this).prev().html();
        ywc(page,false);
    });
//				选择开始及结束时间
    $("#start").on("change",function(){
        startTime=getTime($(this).val());
        endTime=getTime($(this).next().val());
        page=1;
        dfh(page,true);
        dsh(page,true);
        dys(page,true);
        dfk(page,true);
        ywc(page,true);
    });
    $("#end").on("change",function(){
        startTime=getTime($(this).prev().val());
        endTime=getTime($(this).val());
        page=1;
        dfh(page,true);
        dsh(page,true);
        dys(page,true);
        dfk(page,true);
        ywc(page,true);
    });

});
//			转换为时间戳
function getTime(day){
    var re = /(\d{4})(?:-(\d{1,2})(?:-(\d{1,2}))?)?(?:\s+(\d{1,2}):(\d{1,2}):(\d{1,2}))?/.exec(day);
    re=new Date(re[1],(re[2]||1)-1,re[3]||1,re[4]||0,re[5]||0,re[6]||0).getTime();
    return re/1000;
}
//  查看联系人
function popbox(This){
    var obj={},html;
    if(localStorage.getItem('userState')==1){
        obj.linkman=$(This).prev().html();
        obj.linktel=$(This).attr('data-tel');
        obj.linkcpname=$(This).attr('data-cpname');
        obj.address=$(This).parents().attr('data-pkad');
        html=template('ppbox',obj);
        $('.linkman').html(html).fadeIn(200);
        $('#linkman_content').removeAttr('style');
    }else{
        html=template('ppbox',obj);
        $('.linkman').html(html).fadeIn(200);
        $('#linkman_content').html('您还未通过企业认证，请先去完成企业认证！').css({'margin-top':'100px'});
    }
}
/*单击空白区域和 确定/删除按钮模态框消失*/
function clo(){
    $(".linkman").fadeOut(200);
}
