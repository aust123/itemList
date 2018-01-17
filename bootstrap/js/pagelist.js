(function ($) {
    $.fn.pager = function (options) {
        var opts = $.extend({}, $.fn.pager.defaults, options);
        return this.each(function () {
            $(this).empty().append(renderpager(parseInt(options.pagenumber), parseInt(options.pagecount), options.buttonClickCallback));
            $('.pages li').mouseover(function () { document.body.style.cursor = "pointer"; }).mouseout(function () { document.body.style.cursor = "auto"; });
        });
    };

    function renderpager(pagenumber, pagecount, buttonClickCallback) {
        var $pager = $('<ul class="pages"></ul>');
        $pager.append(renderButton('首页', pagenumber, pagecount, buttonClickCallback)).append(renderButton("<span class='wt'>&lt;</span>", pagenumber, pagecount, buttonClickCallback));
        var startPoint = 1;
        var endPoint = 9;
        var thpoint = "<li class='thpoint'>...</li>";
        if (pagenumber > 4) {
            startPoint = pagenumber - 4;
            endPoint = pagenumber + 4;
        }
        if (endPoint > pagecount) {
            startPoint = pagecount - 8;
            endPoint = pagecount;
            thpoint = "";
        }
        if (startPoint < 1) {
            startPoint = 1;
        }
        for (var page = startPoint; page <= endPoint; page++) {
            var currentButton = $('<li class="page-number">' + (page) + '</li>');
            page == pagenumber ? currentButton.addClass('pgCurrent') : currentButton.click(function () {
                buttonClickCallback(this.firstChild.data);
            });
            currentButton.appendTo($pager);
        }
        $pager.append(thpoint).append(renderButton("<span class='wt'>&gt;</span>", pagenumber, pagecount, buttonClickCallback)).append(renderButton('末页', pagenumber, pagecount, buttonClickCallback));
        //$pager.append("<li class='thpoint'>共: " + pagecount + " 页</li>");
        var strgoto = $("<li class='thpoint'>转到<input type='text' value='" + pagenumber + "'maxlength='6' id='gotoval' class='page-input'/>页</li>");
        $pager.append(strgoto);
        $pager.append(changepage('跳转', pagecount, buttonClickCallback));
        return $pager;
    }
    function changepage(buttonLabel, pagecount, buttonClickCallback) {
        var $btngoto = $('<li class="pgNext pageGoto btn-jump">' + buttonLabel + '</li>');
        $btngoto.click(function () {
            var gotoval = $('#gotoval').val();
            if (0 >= gotoval) {
                alert("请输入非零的正整数！");
                return false;
            }
            /*var patrn = /^[0-9]{1,20}$/;
            if (!patrn.exec(gotoval)) {
            alert("请输入非零的正整数！");
            return false;
            }*/
            var intval = parseInt(gotoval);
            if (intval > pagecount) {
                alert("您输入的页面超过总页数 " + pagecount);
                return;
            }
            buttonClickCallback(intval);
        });
        return $btngoto;
    }

    function renderButton(buttonLabel, pagenumber, pagecount, buttonClickCallback) {
        var $Button = $('<li class="pgNext">' + buttonLabel + '</li>');
        var destPage = 1;
        switch (buttonLabel) {
            case "首页":
                destPage = 1;
                $Button.addClass('pgFirst');
                break;
            case "<span class='wt'>&lt;</span>":
                destPage = pagenumber - 1;
                $Button.addClass('pagination-start');
                break;
            case "<span class='wt'>&gt;</span>":
                destPage = pagenumber + 1;
                $Button.addClass('pagination-next');
                break;
            case "末页":
                destPage = pagecount;
                $Button.addClass('pgEnd');
                break;
        }
//        if (buttonLabel == "首页") {
//            $Button.addClass('pgFirst');
//        }
//        if (buttonLabel == "末页") {
//            $Button.addClass('pgEnd');
//        }
        if (buttonLabel == "首页" || buttonLabel == "<span class='wt'>&lt;</span>") {
            pagenumber <= 1 ? $Button.addClass('pgEmpty') : $Button.click(function () { buttonClickCallback(destPage); });
        }
        else {
            pagenumber >= pagecount ? $Button.addClass('pgEmpty') : $Button.click(function () { buttonClickCallback(destPage); });
        }
        return $Button;

    }

    $.fn.pager.defaults = {
        pagenumber: 1,
        pagecount: 1
    };
})(jQuery);  