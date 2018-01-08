/**
 * Created by Administrator on 2018/1/2.
 */

$('.topbar').load('../public/topbar.html');
$('.footer').load('../public/footer.html');
$('.personal-aside').load('personal_aside.html');


$('.feedBack textarea').focus(function(){
    if($(this).val()=='请输入您的意见！'){
        $(this).val('');
    }
});
$('.feedBack textarea').blur(function(){
    if($(this).val()=='请输入您的意见！' || $(this).val()==''){
        $(this).val('请输入您的意见！');
    }
});

//提交反馈
$('.subfeed').click(function(){
    feedback();
});
var userId= cookie.getCookie('uid');
function feedback(){
    var path='https://two.zhiqunale.cn/Paper/PersonalCenter/submit_feedback';
    var param={
        c_id:userId,
        device_number:'pc_online',
        user_state:1,
        feedback_content:$('.feedBack textarea').val()
    }
    GetList(param,path,feed);
}
function feed(_data){
    if(_data.status_code=='10000'){
        alert('提交成功');
    }
}