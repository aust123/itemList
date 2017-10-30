/**
 * Created by Administrator on 2017/8/26.
 */

$(function(){
    $('#top_bar').load('../public/topBar.html');
    $('#footer').load('../public/footer.html');
    //手机快捷登录
    $('.sjdl').click(function(){
        $('.tishi').hide();
        $('.yzmLogin').addClass('on').siblings('.pwdLogin').removeClass('on');
    });
    //  密码登录
    $('.pwdLg').click(function(){
        pwdLogin();
    });
    //  验证码登录
    $('.yzmLg').click(function(){
        kjLogin();
    });
//后台获取短信验证码id
    $('#hqyzm').click(function() {
        if($('#tel').val()!=''){
            //限定300秒后才能重新发送请求
            if($(this).html().indexOf('秒') >= 0) {
                return false;
            } else {
                var obj = {
                    nc_phone: $('#tel').val()//手机号
                };
                var codename='/api/common/getcode';
                GetList(obj,codename,getCode);
                function getCode(data){
                    if(data.status_code == 10000) {
                        console.log(data);
                        localStorage.rnc_id = data.data.code;//将返回的验证码缓存
                    }
                }
            }
        }
    })

})
//判断enter键登录
function pwdLg(){
    if (event.keyCode==13){
        if($('.loginBox>div.on').index()==0){
            pwdLogin();
        }else{
            kjLogin();
        }
    }
}
//密码登录
function pwdLogin(){
    if(($('#pwtel').val())&&($('#pwd').val())){
        var tlpd={
            pe_phone: $('#pwtel').val(),
            pe_password: $('#pwd').val()
        };
        var pathname='/api/paper/login';
        GetList(tlpd,pathname,getLogin);
    }
}
//快捷登录
function kjLogin(){
    if(($('#tel').val())&&($('#kjyzm').val()==localStorage.rnc_id)){
        var tlyzm={
            pe_phone: $('#tel').val(),
            nc_code: $('#kjyzm').val(),
            nc_id:1
        };
        var pathname='/api/paper/quick/login';
        GetList(tlyzm,pathname,getLogin);
    }else{
        $('#tel').siblings('.tishi').show().html("输入错误");
    }
}
function getLogin(_data){
    console.log(_data);
    if(_data.status_code=='10000'){
        var storage=window.localStorage;
        storage.setItem("userId", _data.data.pe_id);
        storage.setItem("userPhone", _data.data.pe_phone);
        storage.setItem("userImg", _data.data.pe_headurl);
        storage.setItem("userSign", _data.data.pe_slug);
        storage.setItem("userState", _data.data.pe_auth_state);
        storage.setItem("userName",_data.data.pe_username);
        storage.setItem("isLogin", "true");
        storage.duration = 300000; // 过期时间
		storage.current_time = new Date().getTime();
        $.getScript("http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js",function(){
            var city = remote_ip_info["city"];
            localStorage.curCity=city+'市';
            var obj={
            pe_id:_data.data.pe_id,
            pe_phone:_data.data.pe_phone,
            city:escape(localStorage.curCity),
            ip:returnCitySN["cip"]
        }
        obj.sign=getUrl(obj);
        $.ajax({
            url:'https://api.zhiqunale.cn/api/paper/record/login/city',
            type:'post',
            dataType:'json',
            data:obj,
            success:function(data){
                window.location.href='../index.html';
            }
        });
        });
    }else{
        $('.tishi').show().html(_data.msg);
    }
}



