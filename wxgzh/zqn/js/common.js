/**
 * Created by Administrator on 2017/8/11.
 */
//- 璁剧疆html鏍囩font-size
(function(doc, win) {
    var _root = doc.documentElement,
        resizeEvent = 'orientationchange' in window ? 'orientationchange' : 'resize',
        resizeCallback = function() {
            var clientWidth = _root.clientWidth,
                fontSize = 100;
            if (!clientWidth) return;
            if (clientWidth < 750) {
                fontSize = 100 * (clientWidth / 375);
            } else {
                fontSize = 100 * (750 / 375);
            }
            _root.style.fontSize = fontSize + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvent, resizeCallback, false);
    doc.addEventListener('DOMContentLoaded', resizeCallback, false);
})(document, window);
//瀛椾綋澶у皬鐨勮嚜閫傚簲锛屽姞涓奵lass=autosize鍗冲彲
$(function() {
    function e() {
        var e = document.documentElement.clientWidth;
        var font_size = e * .04 + "px";
        var font_size_small = e * .03 + "px";
        var font_size_big = e * .05 + "px";
        //var padding = e * .01 ;
        //if(padding>10){padding = 10}
        $('.autosize').css('font-size', font_size);
        $('.autosize2').css('font-size', font_size_small);
        $('.autosize3').css('font-size', font_size_big);
        //$('.swiper-slide img').css('padding',padding);
    }
    e();
    $(window).on("orientationchange, resize",
        function() {
            e();
        })

});