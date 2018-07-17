exports.install = function (Vue, options) {
  Vue.prototype.cookie = {
    /*设置cookie*/
    setCookie: function ($name, $value, $time) {
      document.cookie = encodeURIComponent($name) + "=" + encodeURIComponent($value) + this.Exproes($time) + ';path=/;';
    },
    /*获取cookie*/
    getCookie: function ($name) {
      var arr, reg = new RegExp("(^| )" + $name + "=([^;]*)(;|$)");
      if (arr = document.cookie.match(reg)) {
        return decodeURIComponent(arr[2]);
      } else {
        return null;
      }
    },
    /*删除cookie*/
    delCookie: function ($name) {
      var exp = new Date();
      exp.setTime(exp.getTime() - 1);
      var cval = this.getCookie($name);     
      if (cval != null) {     
        document.cookie =$name + '=0;expires=' + new Date(0).toUTCString() + ';path=/;';
      }
      
    },
    /*设置cookie有效期*/
    Exproes: function ($time) {
      var date = new Date();
      date.setTime(date.getTime() + ($time * 24 * 60 * 60 * 1000));
      return expires = "; expires=" + date.toUTCString();
    }

  };
};