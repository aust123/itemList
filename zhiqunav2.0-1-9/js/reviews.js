/**
 * Created by Administrator on 2018/1/4.
 */

$('.topbar').load('../public/topbar.html');
$('.footer').load('../public/footer.html');


//上传图片
function uploadImage(file) {
    var this_imglist='.'+$(file).attr('id');
    if($(this_imglist).length<15){
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
                    $.ajax({
                        type: 'post',
                        url: 'https://two.zhiqunale.cn/paper/img/receivePcFile?g=Api&m=Img&a=receivePcFile',
                        data: {
                            pic: baseSrc
                        },
                        success: function(data) {
                            var html = '<li class="simg"><img src="'+ 'https://two.zhiqunale.cn/' + data.data + '" alt=""/></li>';
                            $(this_imglist).append(html);
                        },
                        error: function(XMLHttpRequest, textStatus, errorThrown) {
                            alert('请重新选择图片！');
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
            $(this_imglist).append(html);
        }
    }else{
        alert('最多上传15张');
    }
}

//    删除上传的图片
$('.orderReview').delegate('li','click',function(){
    $(this).remove();
})
$('.serviceReview').delegate('li','click',function(){
    $(this).remove();
})

//星星评价
scoreFun($("#startone"));
scoreFun($('#starttwo'));
function scoreFun(object, opts) {
    var defaults = {
        fen_d: 16,
        ScoreGrade: 10,
        nameScore: "fenshu",
        parent: "star_score"
    };
    options = $.extend({}, defaults, opts);
    var countScore = object.find("." + options.nameScore);
    var startParent = object.find("." + options.parent);
    var now_cli;
    var fen_cli;
    var atu;
    var fen_d = options.fen_d;
    var len = options.ScoreGrade;
    startParent.width(fen_d * len);
    var preA = (5 / len);
    for (var i = 0; i < len; i++) {
        var newSpan = $("<a href='javascript:void(0)'></a>");
        newSpan.css({"left": 0, "width": fen_d * (i + 1), "z-index": len - i});
        newSpan.appendTo(startParent)
    }
    startParent.find("a").each(function (index, element) {
        $(this).click(function () {
            now_cli = index;
            show(index, $(this))
        });
        $(this).mouseenter(function () {
            show(index, $(this))
        });
        $(this).mouseleave(function () {
            if (now_cli >= 0) {
                var scor = preA * (parseInt(now_cli) + 1)*2;

                startParent.find("a").removeClass("clibg");
                startParent.find("a").eq(now_cli).addClass("clibg");
                var ww = fen_d * (parseInt(now_cli) + 1);
                startParent.find("a").eq(now_cli).css({"width": ww, "left": "0"});
                if (countScore) {
                    countScore.text(scor)
                }
            } else {
                startParent.find("a").removeClass("clibg");
                if (countScore) {
                    countScore.text("")
                }
            }
        })
    });
    function show(num, obj) {
        var n = parseInt(num) + 1;
        var lefta = num * fen_d;
        var ww = fen_d * n;
        var scor = preA * n*2;
        object.find("a").removeClass("clibg");
        obj.addClass("clibg");
        obj.css({"width": ww, "left": "0"});
        countScore.text(scor);
    }
};



//获取当前订单的信息
var iod=GetQueryString('oid');
var productid,judgedid,type;
function ordermsg(){
    var orders=$.parseJSON(localStorage.order_data);
    for(var o=0;o<orders.length;o++){
        if(GetQueryString("oid")==orders[o].o_id){
            productid=orders[o].o_product_id;
            if(orders[o].o_saler_id){
                judgedid=orders[o].o_saler_id;
            }else{
                judgedid=orders[o].o_buyer_id;
            }
            type=orders[o].o_product_type;
        }
    }
}


//提交评价
var userId= cookie.getCookie('uid');
$('.submit_review').click(function(){

    ordermsg();

    var lilist=$('.serviceReview li');
    var imglist=[];
    for(var i=0;i<lilist.length;i++){
        var thisimg=$(lilist[i]).children('img').attr('src').replace('https://two.zhiqunale.cn/','');
        imglist.push(thisimg);
    }
    imglist=imglist.join();
    if($('.goodfs').html()!=''&&$('.goodtxt').val()!=''&&
        $('.servicefs').html()!=''&&$('.servicetxt').val()!=''){
        subevaluate(imglist);
    }else{
        alert("请填写评价内容和评分");
    }
});
function subevaluate(imglist){
    var subpath='https://two.zhiqunale.cn/Paper/PersonalCenter/review_submission';
    var subparam={
        c_id:userId,
        device_number:'pc_online',
        user_state:1,
        j_oid:iod,
        j_product_id:productid,
        j_judged:judgedid,
        j_product_score:$('.goodfs').html(),
        j_product_judge:$('.goodtxt').val(),
        j_serve_score:$('.servicefs').html(),
        j_serve_judge:$('.servicetxt').val(),
        J_product_type:type,
        j_photos:imglist
    }
    GetList(subparam,subpath,sub);
}
function sub(_data){
    if(_data.status_code=='10000'){
         window.history.go(-1);
    }
}



