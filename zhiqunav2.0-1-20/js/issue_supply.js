/**
 * Created by Administrator on 2017/12/23.
 */

$('.topbar').load('../public/topbar.html');
$('.navbar').load('../public/navbar.html');
$('.footer').load('../public/footer.html');
$('.purchase-buy').load('buy_right.html');


//选择时间
var dates = $('#startTime,#endTime');
dates.datepicker({
    showOtherMonths: true,
    selectOtherMonths: true,
    maxDate: null,
    format: 'yyyy-mm-dd',
    todayHighlight: true,
    onSelect: function(selectedDate) {
        startTime=selectedDate;
        var option = this.id == "startTime" ? "minDate" : "maxDate";
        dates.not(this).datepicker("option", option, selectedDate);
    }
});

var userId= cookie.getCookie('uid');

//获取用户地址
userAddr();
function userAddr(){
    var addrpath='https://two.zhiqunale.cn/paper/paperbuy/getuseraddresslist';
    var addrParam={
        user_id:userId,
        device_number:'pc_online'
    }
    GetList(addrParam,addrpath,addr);
    function addr(_data){
        if(_data.status_code=='10000'){
            var html=template('userAddr',_data);
            $('.userAddr').html(html);
        }
    }
}

var map = new BMap.Map("allmap");
var localSearch = new BMap.LocalSearch(map);

//localSearch.enableAutoViewport(); //允许自动调节窗体大小			　　
//然后我们就可以开始做最关键的一步了， 就是获取地址的具体经纬度：　
//function searchByStationName(keyword) {
//    localSearch.setSearchCompleteCallback(function(searchResult) {
//        var poi = searchResult.getPoi(0);
//        //lng = poi.point.lng ; //获取经度和纬度，将结果显示在文本框中
//        //lat = poi.point.lat;
//        console.log(poi.point.lng);
//    });
//    localSearch.search(keyword);
//}


//点击发布供应
$('.issueSure').click(function(){
    if($('.issueName').val()==''){
        alert('请输入货品规格');
    }else if(checkweight($('.issueWeight').val())!=true){
        alert('货品重量'+checkweight($('.issueWeight').val()));
    }else if(checkprice($('.issuePrice').val())!=true){
        alert('货品价格'+checkprice($('.issuePrice').val()));
    }else if($('#startTime').val()==''||$('#endTime').val()==''){
        alert('请选择时间');
    }else{
        var lilist=$('.upload-list li');
        var imglist=[];
        var fmimg='';
        for(var i=0;i<lilist.length;i++){
            imglist.push($(lilist[i]).children('img').attr('src').replace('https://two.zhiqunale.cn/',''));
            fmimg=$(lilist[0]).children('img').attr('src').replace('https://two.zhiqunale.cn/','');
        }
        imglist=imglist.join(',');
        if(sp_id){
            editSupply(fmimg,imglist);
        }else{
            issuePur(fmimg,imglist);
        }
    }
});


//发布供应
function issuePur(fmimg,imglist){
    var addrs=$('.userAddr input[type=radio]:checked').siblings('b');
    var ars=[];
    for(var a=0;a<addrs.length;a++){
        ars.push($(addrs[a]).html());
    }
    var issuepath='https://two.zhiqunale.cn/paper/papersale/publishsupply';
    var issueparam={
        user_id:userId,
        device_number:'pc_online',
        product_price:$('.issuePrice').val(),
        product_weight:$('.issueWeight').val(),
        send_address_id:$('.userAddr input[type=radio]:checked').val(),
        sp_product_name:$('.issueName').val(),
        sp_start_time:DateToUnix($('#startTime').val()),
        sp_end_time:DateToUnix($('#endTime').val()),
        beizhu:$('.beizhu').val(),
        sp_product_photos:imglist,
        sp_fengmian_photo:fmimg,
        sp_send_address:$('.userAddr input[type=radio]:checked').siblings('a').html(),
        sp_send_province:ars[0],
        sp_send_city:ars[1],
        sp_send_dist:ars[2]
    }

    //经纬度
    localSearch.search($('.userAddr input[type=radio]:checked').siblings('a').html());
    localSearch.setSearchCompleteCallback(function(searchResult) {
        var poi = searchResult.getPoi(0);
        issueparam.sp_lng=poi.point.lng;
        issueparam.sp_lat=poi.point.lat;
        GetList(issueparam,issuepath,issue);
    });
}
function issue(_data){
    if(_data.status_code=='10000'){
        window.location.href='buy.html';
    }else{
        alert(_data.msg);
    }
}



var sp_id=GetQueryString("sp_id");
if(sp_id){
    editBefore(sp_id);
}
//编辑供应商品前获取供应商品信息
var sp_send_address,sp_send_province,sp_send_city,sp_send_dist,sp_lat,sp_lng;
function editBefore(id){
    var editpath='https://two.zhiqunale.cn/paper/papersale/getgoodsmsgbeforeeditgoods';
    var editparam={
        user_id:userId,
        device_number:'pc_online',
        goods_id:id,
        state:-1
    }
    GetList(editparam,editpath,editprimary);
    function editprimary(_data){
        if(_data.status_code=='10000'){
            var data=_data.data;
            $('.issueName').attr('data-sp_id',data.sp_id);
            $('.issueName').attr('data-sp_uid',data.sp_uid);
            $('.issueName').val(data.sp_product_name);
            $('.issueWeight').val(data.sp_product_weight);
            $('.issuePrice').val(data.sp_product_price);
            $('.beizhu').val(data.sp_beizhu);
            $('#startTime').val(getLocalTime(data.sp_start_time));
            $('#endTime').val(getLocalTime(data.sp_end_time));
            var html='';
            for(var i=0;i<data.sp_product_photos.length;i++){
                if(sp_id){
                    html += '<li class="simg"><img src="https://two.zhiqunale.cn/'+ data.sp_product_photos[i] + '"/></li>';
                }else{
                    html += '<li class="simg"><img src="'+ data.sp_product_photos[i] + '"/></li>';
                }
            }
            $('.upload-list').html(html);
            sp_send_address=data.sp_send_address;
            sp_send_province=data.sp_send_province;
            sp_send_city=data.sp_send_city;
            sp_send_dist=data.sp_send_dist;
            sp_lat=data.sp_lat;
            sp_lng=data.sp_lng;
        }
    }
}

//编辑供应商品
function editSupply(fmimg,imglist){
    var editpath='https://two.zhiqunale.cn/paper/papersale/editgoods';
    var editparam={
        user_id:userId,
        device_number:'pc_online',
        goods_id:sp_id,
        product_price:$('.issuePrice').val(),
        product_weight:$('.issueWeight').val(),
        send_address_id:$('.userAddr input[type=radio]:checked').val(),
        sp_product_name:$('.issueName').val(),
        sp_product_photos:imglist,
        sp_fengmian_photo:fmimg,
        sp_send_address:sp_send_address,
        sp_send_province:sp_send_province,
        sp_send_city:sp_send_city,
        sp_send_dist:sp_send_dist,
        sp_lng:sp_lng,
        sp_lat:sp_lat,
        sp_start_time:DateToUnix($('#startTime').val()),
        sp_end_time:DateToUnix($('#endTime').val()),
        beizhu:$('.beizhu').val()
    }
    GetList(editparam,editpath,edit);
    function edit(_data){
        if(_data.status_code=='10000'){
            alert(_data.msg);
            history.go(-1);
        }else{
            alert(_data.msg);
        }
    }
}



//上传图片
function uploadImg(file) {
    if($('.upload-list li').length<10){
        var baseSrc;
        if(file.files && file.files[0]) {
            var ext = file.value.substring(file.value.lastIndexOf(".") + 1).toLowerCase();
            if(ext != 'png' && ext != 'jpg' && ext != 'jpeg') {
                alert("图片的格式必须为png或者jpg或者jpeg格式！");
                return false;
            } else {
                var reader = new FileReader();
                reader.onload = function(evt) {
                    baseSrc = evt.target.result;
//                        var html = '<li class="simg"><img src="'+baseSrc+'" alt=""/></li>';
//                        $('.upload-list').append(html);
                    $.ajax({
                        type: 'post',
                        url: 'https://two.zhiqunale.cn/paper/img/receivePcFile?g=Api&m=Img&a=receivePcFile',
                        data: {
                            pic: baseSrc
                        },
                        success: function(data) {
                            var html = '<li class="simg"><img src="'+ 'https://two.zhiqunale.cn/' + data.data + '"/></li>';
                            $('.upload-list').append(html);
//                                if(localStorage.ph) {
//                                    picUrl = JSON.parse(localStorage.ph);
//                                    picUrl.push(data.data);
//                                    localStorage.ph = JSON.stringify(picUrl);
//                                } else {
//                                    picUrl.push(data.data);
//                                    localStorage.ph = JSON.stringify(picUrl);
//                                }
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            console.log('请求错误！');
                            console.log(XMLHttpRequest);
                            console.log(textStatus);
                            console.log(errorThrown);
                        }
                    })
                }
                reader.readAsDataURL(file.files[0]);
            }
        } else //兼容IE
        {
            file.select();
            var imgSrc = document.selection.createRange().text;
            var filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + imgSrc + "', sizingMethod='scale')";
            var html = '<li class="simg"><img style="filter:' + filter + '"/></li>';
            $('.upload-list').append(html);
        }
    }else{
        alert('最多上传10张');
    }
}

//    删除上传的图片
$('.upload-list').delegate('li','click',function(){
    $(this).remove();
})