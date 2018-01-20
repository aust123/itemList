/**
 * Created by Administrator on 2018/1/2.
 */
$('.topbar').load('../public/topbar.html');
$('.navbar').load('../public/navbar.html');
$('.footer').load('../public/footer.html');

initComplexArea('seachprov', 'seachcity', 'seachdistrict', area_array, sub_array, '0', '0', '0');

//提交白条
var userId= cookie.getCookie('uid');
$('.iousubmit').click(function(){
    var province=$('#seachprov option:selected').html();
    var city=$('#seachcity option:selected').html();
    var dist=$('#seachdistrict option:selected').html();
    if($('.name').val()==''){
        alert('姓名不能为空');
    }else if($('.phone').val()==''||(!(/^1(3|4|5|7|8)\d{9}$/.test($('.phone').val())))){
        alert('电话号码输入不正确');
    }else if(province=='请选择'||city=='请选择'){
        alert('省市区不能为空');
    }else if($('.detail').val()==''){
        alert('详细地址不能为空');
    }else if($('.money').val()==''){
        alert('借款金额不能为空');
    }else if($('.yongtu').val()==''){
        alert('资金用途不能为空');
    }else if($('.zhouqi').val()==''){
        alert('还款周期不能为空');
    }else{
        submitiou(province,city,dist);
    }
});
function submitiou(pro,city,dist){
    if(dist='请选择'){
        dist=city;
        city=pro;
    }
    var ioupath='https://two.zhiqunale.cn/Paper/PersonalCenter/submission_of_iou';
    var iouparam={
        c_id:userId,
        device_number:'pc_online',
        user_state:1,
        wb_phone:$('.phone').val(),
        wb_province:escape(pro),
        wb_city:escape(city),
        wb_dist:escape(dist),
        wb_detail:escape($('.detail').val()),
        wb_price:$('.money').val(),
        wb_usage:escape($('.yongtu').val()),
        wb_repay_cycle:$('.zhouqi').val(),
        wb_username:escape($('.name').val())
    }
    GetList(iouparam,ioupath,iou);
}
function iou(_data){
    if(_data.status_code=='10000'){
        alert('提交成功');
    }
}
