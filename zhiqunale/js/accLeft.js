/**
 * Created by Administrator on 2017/8/21.
 */
$(function(){
    var dataId=$('.hidden').attr('data-id');
    console.log(dataId);
    $('.msg_title a').removeClass('curent_title');
    $('.msg_title a.'+dataId).addClass('curent_title');
})