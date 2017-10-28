/**
 * Created by Administrator on 2017/8/11.
 */
//全局的年月日，适用于任何时候获取今天的年月日。（很重要）
var sev_m, sev_y, sev_d, active = 3;
var mySwiper = new Swiper('.swiper-container', {
    initialSlide: 1,
    loop: true,
    speed: 400,

    followFinger: false,
    prevButton: '.js_prev',
    nextButton: '.js_next',
    onSlideChangeStart: function(swiper) {
        //swiper.params.allowSwipeToPrev = false;
        swiper.lockSwipes();

    },

    onSlideChangeEnd: function(swiper) {

        var nows = $(".swiper-slide-active").find("table").attr("id");
        if (nows == 'now2')
            return;
        nows = parseInt(nows.substr(1, 1));
        //console.log(active,nows);
        if (nows == active)
            return;
        if (active == 4 && nows == 5) {
            var fors = 1;

            sev_m++;
            if (sev_m > 12) {
                sev_m = 1;
                sev_y++;
            }
            var nowweak = new Date(sev_y, sev_m - 1, 1).getDay();
            get_first(nowweak, sev_y, sev_m, 0, "d2");

            var lastm = sev_m - 1;
            var lasty = sev_y;
            if (lastm < 1) {
                lastm = 12;
                lasty--;
            }

            var nm = sev_m + 1;
            var ny = sev_y;
            if (nm > 12) {
                nm = 1;
                ny++;
            }
            var nowweak = new Date(ny, nm - 1, 1).getDay();
            var lastweek = new Date(lasty, lastm - 1, 1).getDay();
            get_first(lastweek, lasty, lastm, 0, "d" + fors);
            get_first(nowweak, ny, nm, 0, "d3");
            $("#ymym").html(sev_y + "年" + sev_m + "月");
            active = 5;
        } else if (active == 2 && nows == 1) {
            var fors = 5;

            var nextweak = new Date(sev_y, sev_m - 1, 1).getDay();
            get_first(nextweak, sev_y, sev_m, 0, "d" + fors);
            sev_m--;
            if (sev_m < 1) {
                sev_m = 12;
                sev_y--;
            }
            var nowweak = new Date(sev_y, sev_m - 1, 1).getDay();
            get_first(nowweak, sev_y, sev_m, 0, "d4");

            var nm = sev_m - 1;
            var ny = sev_y;
            if (nm < 1) {
                nm = 12;
                ny--;
            }
            var nowweak = new Date(ny, nm - 1, 1).getDay();
            //get_first(nowweak, ny, nm, 0, "d4");
            get_first(nowweak, ny, nm, 0, "d3");
            $("#ymym").html(sev_y + "年" + sev_m + "月");
            active = 1;
        } else if (active == 5 && nows == 3) {
            var fors = 4;

            var lastm = sev_m;
            var lasty = sev_y;

            sev_m++;
            if (sev_m > 12) {
                sev_m = 1;
                sev_y++;
            }

            var nm = sev_m + 1;
            var ny = sev_y;
            if (nm > 12) {
                nm = 1;
                ny++;
            }
            var nowweak = new Date(ny, nm - 1, 1).getDay();
            get_first(nowweak, ny, nm, 0, "d" + fors);
            var nowweak = new Date(lasty, lastm - 1, 1).getDay();
            get_first(nowweak, lasty, lastm, 0, "d2");
            $("#ymym").html(sev_y + "年" + sev_m + "月");
            active = 3;
        } else if (active == 1 && nows == 3) {
            var fors = 2;

            var lastm = sev_m;
            var lasty = sev_y;

            sev_m--;
            if (sev_m < 1) {
                sev_m = 12;
                sev_y--;
            }

            var nm = sev_m - 1;
            var ny = sev_y;
            if (nm < 1) {
                nm = 12;
                ny--;
            }
            var nowweak = new Date(ny, nm - 1, 1).getDay();
            get_first(nowweak, ny, nm, 0, "d" + fors);
            var nowweak = new Date(lasty, lastm - 1, 1).getDay();
            get_first(nowweak, lasty, lastm, 0, "d4");
            $("#ymym").html(sev_y + "年" + sev_m + "月");
            active = 3;
        } else if (active == 1 && nows == 5) {
            var fors = 3;

            var lastm = sev_m;
            var lasty = sev_y;

            sev_m++;
            if (sev_m > 12) {
                sev_m = 1;
                sev_y++;
            }

            var nm = sev_m + 1;
            var ny = sev_y;
            if (nm > 12) {
                nm = 1;
                ny++;
            }
            var nowweak = new Date(ny, nm - 1, 1).getDay();
            get_first(nowweak, ny, nm, 0, "d" + fors);
            $("#ymym").html(sev_y + "年" + sev_m + "月");
            active = 5;
        } else if (active == 5 && nows == 1) {
            var fors = 3;


            sev_m--;
            if (sev_m < 1) {
                sev_m = 12;
                sev_y--;
            }
            var lastm = sev_m;
            var lasty = sev_y;

            var nm = sev_m - 1;
            var ny = sev_y;
            if (nm < 1) {
                nm = 12;
                ny--;
            }
            var nowweak = new Date(ny, nm - 1, 1).getDay();
            var lastweak = new Date(lasty, sev_m - 1, 1).getDay();
            get_first(nowweak, ny, nm, 0, "d" + fors);
            console.log(lasty,lastm)
            get_first(lastweak, lasty, sev_m, 0, "d4");
            $("#ymym").html(sev_y + "年" + sev_m + "月");
            active = 1;
        } else if (active > nows) {
            var fors = nows - 1;
            if (fors < 1)
                fors = 5;

            sev_m--;
            if (sev_m < 1) {
                sev_m = 12;
                sev_y--;
            }

            var nm = sev_m - 1;
            var ny = sev_y;
            if (nm < 1) {
                nm = 12;
                ny--;
            }
            var nowweak = new Date(ny, nm - 1, 1).getDay();
            get_first(nowweak, ny, nm, 0, "d" + fors);
            $("#ymym").html(sev_y + "年" + sev_m + "月");
            active = nows;
        } else if (active < nows) {
            var fors = nows + 1;
            if (fors > 5)
                fors = 1;

            sev_m++;
            if (sev_m > 12) {
                sev_m = 1;
                sev_y++;
            }

            var nm = sev_m + 1;
            var ny = sev_y;
            if (nm > 12) {
                nm = 1;
                ny++;
            }
            var nowweak = new Date(ny, nm - 1, 1).getDay();
            get_first(nowweak, ny, nm, 0, "d" + fors);
            $("#ymym").html(sev_y + "年" + sev_m + "月");
            active = nows;
        }
        var trLength = $("#d"+nows).find("tr").length;
        if(trLength==6){
            $(".swiper-container").css("paddingBottom",".45rem");
        }else{
            $(".swiper-container").css("paddingBottom","");

        }
        swiper.unlockSwipes();
    }

})

var yl = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
window.onload = function() {
    $("#now3").attr("id", "d1");
    $("#now1").attr("id", "d2");
    $("#now2").attr("id", "d3");
    $("#now3").attr("id", "d4");
    $("#now1").attr("id", "d5");
    var globledate = new Date();
    var y = globledate.getFullYear();
    var m = globledate.getMonth() + 1;
    var d = globledate.getDate();
    sev_m = m;
    sev_y = y;
    sev_d = d;
    var nowweak = new Date(y, m - 1, 1).getDay();
    if (nowweak == 7) nowweak = 0;
    get_first(nowweak, y, m, d, "d3");
    set_top(0);
    m = m + 1;
    if (m > 12) {
        m = 1;
        y += 1;
    }
    nowweak = new Date(y, m - 1, 1).getDay();
    get_first(nowweak, y, m, 0, "d4");

    m = sev_m - 1;
    if (m < 1) {
        m = 12;
        y = sev_y - 1;
    }
    nowweak = new Date(y, m - 1, 1).getDay();
    get_first(nowweak, y, m, 0, "d2");

    $("#ymym").html(sev_y + "年" + sev_m + "月");

    $(".js_jin").click(function() {
        active = 3;
        var globledate = new Date();
        var y = globledate.getFullYear();
        var m = globledate.getMonth() + 1;
        var d = globledate.getDate();
        sev_m = m;
        sev_y = y;
        sev_d = d;
        var nowweak = new Date(y, m - 1, 1).getDay();
        if (nowweak == 7) nowweak = 0;
        get_first(nowweak, y, m, d, "d3");
        set_top(0);

        m = m + 1;
        if (m > 12) {
            m = 1;
            y += 1;
        }
        nowweak = new Date(y, m - 1, 1).getDay();
        get_first(nowweak, y, m, 0, "d4");

        m = sev_m - 1;
        if (m < 1) {
            m = 12;
            y = sev_y - 1;
        }
        nowweak = new Date(y, m - 1, 1).getDay();
        get_first(nowweak, y, m, 0, "d2");

        $("#ymym").html(sev_y + "年" + sev_m + "月");
        mySwiper.slideTo(2, 500, false);
    });
    mySwiper.unlockSwipes();
};

function jump(yyyy, mm, dd) {
    sev_y = parseInt(yyyy);
    sev_m = parseInt(mm);
    sev_d = parseInt(dd);

    active = 3;
    var globledate = new Date(yyyy, parseInt(mm) - 1, parseInt(dd));
    //var nowweak = globledate.getDay();
    var y = globledate.getFullYear();
    var m = globledate.getMonth() + 1;
    var d = globledate.getDate();
    //console.log("globledate:",y,m,d);

    var sev_m_tmp = m;
    var sev_y_tmp = y;
    var sev_d_tmp = d;
    var nowweak = new Date(y, m - 1, 1).getDay();
    if (nowweak == 7) nowweak = 0;
    get_first(nowweak, y, m, d, "d3");
    //set_top(0);

    m = m + 1;
    if (m > 12) {
        m = 1;
        y += 1;
    }
    nowweak = new Date(y, m - 1, 1).getDay();
    get_first(nowweak, y, m, 0, "d4");

    m = sev_m - 1;
    if (m < 1) {
        m = 12;
        y = sev_y - 1;
    }
    nowweak = new Date(y, m - 1, 1).getDay();
    get_first(nowweak, y, m, 0, "d2");

    $("#ymym").html(sev_y + "年" + sev_m + "月");
    $(".covers").hide();
    mySwiper.slideTo(2, 500, false);
    click_sev();

}

function click_sev() {
    $("#d3").find("td").each(function() {
        if ($(this).attr("data_y") == sev_y && $(this).attr("data_m") == sev_m && $(this).attr("data_d") == sev_d) {
            $(this).click();
        }
    });
}

function get_first(a, b, c, d, e) {
    var str = '<tr>';
    if ((c - 2) < 0) {
        var ldays = 31;
        var lm = 12;
        var lb = b - 1;
    } else {
        var ldays = yl[c - 2];
        var lm = c - 1;
        var lb = b;
    }

    if (c == 12) {
        var xdays = 31;
        var xm = 1;
        var xb = b + 1;
    } else {
        var xdays = yl[c];
        var xm = c + 1;
        var xb = b;
    }

    if (ldays == 28) {
        if ((lb % 4 == 0 && lb % 100 != 0) || (lb % 100 == 0 && lb % 400 == 0)) {
            ldays = 29;
        }
    }

    if (xdays == 28) {
        if ((xb % 4 == 0 && xb % 100 != 0) || (xb % 100 == 0 && xb % 400 == 0)) {
            xdays = 29;
        }
    }
    var dd;
    if (yl[c - 1] == 28) {
        if ((b % 4 == 0 && b % 100 != 0) || (b % 100 == 0 && b % 400 == 0)) {
            dd = 29;
        } else {
            dd = 28;
        }
    } else {
        dd = yl[c - 1];
    }

    var num = 1;

    for (var i = a; i > 0; i--) {
        var bday = ldays - i + 1;
        var jd = "";
        var hb = lb + "-" + lm + "-" + bday;

        str += ' <td data_y="' + lb + '" data_m="' + lm + '" data_d="' + bday + '" class="list not_this js_up"><i>' + bday + '</i>' + jd + '</td>';
        if (num % 7 == 0) {
            str += '</tr><tr>';
        }
        num++;
    }

    for (var i = 1; i <= dd; i++) {
        var bday = ldays - i + 1;
        var jd = "";
        var hb = b + "-" + c + "-" + i;
        if (new Date().getDate() == i && b == new Date().getFullYear() && c == (new Date().getMonth() + 1)) {
            str += ' <td data_y="' + b + '" data_m="' + c + '" data_d="' + i + '" class="list today"><i>' + i + '</i>' + jd + '</td>';
        } else {
            str += ' <td data_y="' + b + '" data_m="' + c + '" data_d="' + i + '" class="list"><i>' + i + '</i>' + jd + '</td>';
        }

        if (num % 7 == 0) {
            str += '</tr><tr>';
        }
        num++;
    }

    var last = 42 - a - dd;
    if(last<=6){

        for (var i = 1; i <= last; i++) {
            var jd = "";
            var hb = xb + "-" + xm + "-" + i;
            str += ' <td data_y="' + xb + '" data_m="' + xm + '" data_d="' + i + '" class="list not_this js_down"><i>' + i + '</i>' + jd + '</td>';
            if (num % 7 == 0) {
                str += '</tr><tr>';
            }
            num++;
        }
    }
    if(str.substring(str.length-4,str.length)=="<tr>"){
        str = str.substring(0,str.length-4);
    }
    document.getElementById(e).innerHTML = str;
    bind_click(e);
}
function bind_click(a) {
    $("#" + a).find("td").unbind("click");
    $("#" + a).find("td").each(function() {
        if ($(this).hasClass('not_this')) {
            $(this).click(function() {
                jump($(this).attr('data_y'), $(this).attr('data_m'), $(this).attr('data_d'));
            });
        } else {
            $(this).click(function() {
                set_top($(this));
            });
        }
    });
}


function set_top(a) {
    if (a) {
        var y = a.attr("data_y");
        var m = parseInt(a.attr("data_m")) - 1;
        if (m < 0) m = 11;
        var d = parseInt(a.attr("data_d"));
        var ms = parseInt(a.attr("data_m"));
        document.getElementById("top_shu").innerHTML =y+'.'+(m+1)+'.'+ d;
        sev_d = parseInt(d);
        $(".xuanzhong").removeClass('xuanzhong');
        a.addClass("xuanzhong");
        return y+'.'+(m+1)+'.'+ d;
    }
}
var e = 1;

function tc() {
    var b, c, d;
    var myDate = new Date();

    if (e == 0) {
        b = myDate.getFullYear() - 1900;
        c = myDate.getMonth();
        d = myDate.getDate()-1;

    } else {
        b = sev_y - 1900;
        c = sev_m - 1;
        d = sev_d - 1;


    }
    e = 1;
    var mySwiper = new Swiper('.swiper-container2', {
        direction: 'vertical',
        initialSlide: b,
        slidesPerView: 'auto',
        roundLengths: true,
        centeredSlides: true,

        watchSlidesProgress: true,
        watchSlidesVisibility: true,

        freeMode: true,
        freeModeMomentumRatio: 1,
        freeModeSticky: true,
        onTouchMove: function(swiper) {
            var b1 = $('.year').children('.swiper-slide-active').html();
            $('.i-year').html(b1);
        },
        onSlideChangeEnd: function(swiper) {
            var b1 = $('.year').children('.swiper-slide-active').html();
            $('.i-year').html(b1);
        }


    });
    var mySwiper = new Swiper('.swiper-container3', {
        direction: 'vertical',
        initialSlide: c,
        slidesPerView: 'auto',
        roundLengths: true,
        centeredSlides: true,

        watchSlidesProgress: true,
        watchSlidesVisibility: true,

        freeMode: true,
        freeModeMomentumRatio: 1,
        freeModeSticky: true,
        onTouchMove: function(swiper) {
            var b1 = $('.month').children('.swiper-slide-active').html();
            $('.i-month').html(b1);
        },
        onSlideChangeEnd: function(swiper) {
            var b1 = $('.month').children('.swiper-slide-active').html();
            $('.i-month').html(b1);
        }


    });
    var mySwiper = new Swiper('.swiper-container4', {
        direction: 'vertical',
        initialSlide: d,
        slidesPerView: 'auto',
        roundLengths: true,
        centeredSlides: true,

        watchSlidesProgress: true,
        watchSlidesVisibility: true,

        freeMode: true,
        freeModeMomentumRatio: 1,
        freeModeSticky: true,
        onTouchMove: function(swiper) {
            var b1 = $('.date').children('.swiper-slide-active').html();
            $('.i-date').html(b1);
        },
        onSlideChangeEnd: function(swiper) {
            var b1 = $('.date').children('.swiper-slide-active').html();
            $('.i-date').html(b1);
        }

    });
};