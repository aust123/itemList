/**
 * Created by Administrator on 2017/8/22.
 */
var API_HOST="http://192.168.0.123:9999";
function getUrl(arr) {
    var secret = "key=pass4zhiqunale";
    var param = [];
    for(var k in arr){
        param.push(k);
    }
    param.sort();
    var str = '';
    for(var key in param){
        str+=param[key]+'='+arr[param[key]]+'&';
    }
    str += secret;
    return hex_md5(str);
}