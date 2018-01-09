/**
 * Created by Administrator on 2017/12/23.
 */

$('.topbar').load('../public/topbar.html');
$('.navbar').load('../public/navbar.html');
$('.footer').load('../public/footer.html');
$('.purchase-buy').load('store_right.html');

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

//获取用户收货地址
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

var pnid=GetQueryString("pnid");
if(pnid){
    editBefore(pnid);
}
//编辑采购需求前获取采购需求详情
var pn_receiver_phone,pn_phone,pn_headurl,pn_username,pn_personal_score,
    pn_receive_address,pn_receiver,pn_receive_province,pn_receive_city,
    pn_receive_dist,pn_lng,pn_lat;
function editBefore(id){
    var editpath='https://two.zhiqunale.cn/paper/purchasegoods/getneeddetailbeforeedit';
    var editparam={
        user_id:cookie.getCookie('uid'),
        device_number:'pc_online',
        pn_id:id
    }
    GetList(editparam,editpath,editprimary);
    function editprimary(_data){
        if(_data.status_code=='10000'){
            var data=_data.data;
            $('.issueName').attr('data-pn_id',data.pn_id);
            $('.issueName').val(data.pn_product_specifications);
            $('.issueWeight').val(data.pn_product_weight);
            $('.issuePrice').val(data.pn_product_price);
            $('.beizhu').val(data.pn_beizhu);
            $('#startTime').val(getLocalTime(data.pn_start_time));
            $('#endTime').val(getLocalTime(data.pn_end_time));
            var html='';
            for(var i=0;i<data.pn_photos.length;i++){
                html += '<li class="simg"><img src="'+ data.pn_photos[i] + '"/></li>';
            }
            $('.upload-list').html(html);

            pn_receiver_phone=data.pn_receiver_phone;
            pn_phone=data.pn_phone;
            pn_headurl=data.pn_headurl;
            pn_username=data.pn_username;
            pn_personal_score=data.pn_personal_score;
            pn_receive_address=data.pn_receive_address;
            pn_receiver=data.pn_receiver;
            pn_receive_province=data.pn_receive_province;
            pn_receive_city=data.pn_receive_city;
            pn_receive_dist=data.pn_receive_dist;
            pn_lng=data.pn_lng;
            pn_lat=data.pn_lat;
        }
    }
}
//编辑采购需求
function editPur(fmimg,imglist){
    var editpath='https://two.zhiqunale.cn/paper/purchasegoods/editpurchaseneed';
    var editparam={
        user_id:userId,
        device_number:'pc_online',
        pn_id:pnid,
        product_price:$('.issuePrice').val(),
        product_weight:$('.issueWeight').val(),
        receive_address_id:$('.userAddr input[type=radio]:checked').val(),
        pn_product_specifications:$('.issueName').val(),
        pn_start_time:DateToUnix($('#startTime').val()),
        pn_end_time:DateToUnix($('#endTime').val()),
        beizhu:$('.beizhu').val(),
        pn_photos:imglist,
        pn_fengmian_photo:fmimg,
        logic_pay_person:$('.issuePurchase-item input[type=radio]:checked').val(),
        pn_receiver_phone:pn_receiver_phone,
        pn_phone:pn_phone,
        pn_headurl:pn_headurl,
        pn_username:pn_username,
        pn_personal_score:pn_personal_score,
        pn_receive_address:pn_receive_address,
        pn_receiver:pn_receiver,
        pn_receive_province:pn_receive_province,
        pn_receive_city:pn_receive_city,
        pn_receive_dist:pn_receive_dist,
        pn_lng:pn_lng,
        pn_lat:pn_lat
    }
    GetList(editparam,editpath,edit);
    function edit(_data){
        if(_data.status_code=='10000'){
            window.history.go(-1);
        }else{
            alert(_data.msg);
        }
    }
}


//点击发布采购需求
$('.issueSure').click(function(){
    var lilist=$('.upload-list li');
    var imglist=[];
    var fmimg='';
    for(var i=0;i<lilist.length;i++){
        var thisimg=$(lilist[i]).children('img').attr('src').replace('https://two.zhiqunale.cn/','');
        imglist.push(thisimg);
        if(i==0){
            fmimg=thisimg;
        }
    }
    imglist=imglist.join(',');
    if(pnid){
        editPur(fmimg,imglist)
    }else{
        issuePur(fmimg,imglist);
    }
});

//发布采购需求
function issuePur(fmimg,imglist){
    var issuepath='https://two.zhiqunale.cn/paper/purchasegoods/publishpurchaseneed';
    var issueparam={
        user_id:userId,
        device_number:'pc_online',
        product_price:$('.issuePrice').val(),
        product_weight:$('.issueWeight').val(),
        receive_address_id:$('.userAddr input[type=radio]:checked').val(),
        pn_product_specifications:$('.issueName').val(),
        pn_start_time:DateToUnix($('#startTime').val()),
        pn_end_time:DateToUnix($('#endTime').val()),
        beizhu:$('.beizhu').val(),
        pn_photos:imglist,
        pn_fengmian_photo:fmimg,
        logic_pay_person:$('.issuePurchase-item input[type=radio]:checked').val()
    }
    GetList(issueparam,issuepath,issue);
    function issue(_data){
        if(_data.status_code=='10000'){
            window.history.go(-1);
        }else{
            alert('失败');
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