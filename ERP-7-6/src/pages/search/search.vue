<template>
    <div>
         <header>
            <a class="back left" href="javasvript:;" @click="back"><img src="../../assets/imgs/nav_jiantou_left.png" ></a>
            搜索           
        </header>
        <div class="input-content">
            <select>
                <option v-for='(item,index) in arrs' :key='index' :value='item.value'>{{item.title}}</option>                
            </select>
            <input type="text" placeholder="请输入搜索内容">
            <button></button>
        </div>
        <section class="search-history">
            <h3>最近搜索<span><img src="../../assets/imgs/search_icon_cancel.png" alt="">清除搜索记录</span></h3>
            <p>皖A99999  <img src="../../assets/imgs/sellorder_key_cancel.png" alt=""></p>
             <p>皖A99999  <img src="../../assets/imgs/sellorder_key_cancel.png" alt=""></p>
              <p>皖A99999  <img src="../../assets/imgs/sellorder_key_cancel.png" alt=""></p>
               <p>皖A99999  <img src="../../assets/imgs/sellorder_key_cancel.png" alt=""></p>
        </section>
    </div>
</template>
<script>
export default {
  data() {
    return {
      arrs: [
        { title: "车牌号", value: 1 },
        { title: "纸厂名称", value: 2 },
        { title: "货品名称", value: 3 },
        { title: "默认车牌号", value: 4 }
      ]
    };
  },
  methods: {
    back() {}
  }
};
</script>
<style>
body{
    background-color: #f1f1f1;
}
header {
  font-size: 36px;
  height: 88px;
  line-height: 88px;
  color: #333;
  text-align: center;
  padding: 0 30px;
  box-sizing: border-box;
  border-bottom: 1px solid #e0e0e0;
  background-color: #fff;
}
header img {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.left {
  float: left;
}
.right {
  float: right;
}
header a {
  height: 100%;
  position: relative;
}
.back img {
  width: 20px;
  height: 38px;
  left: 0;
}
.search img {
  width: 40px;
  height: 40px;
  right: 0;
}
.input-content{
    height: 120px;
    display: flex;
    align-items: center;
    padding: 0 30px;
    position: relative;
    background-color: #fff;
    

}
.input-content select{
    border: none;
    width: 190px;
    height: 66px;
    border: 1px solid #B5B5B5; 
    padding-left: 20px;
    box-sizing: border-box;
    outline: none;
    -webkit-appearance: none;
    background: url(../../assets/imgs/search_filter_jiantou.png) no-repeat;
    background-size:27px 19px;
    background-position:right 10px center; 
    font-size: 28px;
    color: #333;
}
.input-content input{
    width: 422px;
    height: 66px;
    border: 1px solid #B5B5B5; 
    margin-left: 22px;
    padding-left: 20px;
    box-sizing: border-box;
    outline: none;
    font-size: 28px;
   
}
.input-content button{

    border: none;
    width: 40px;
    height: 40px;
    -webkit-appearance: none;
    background: url(../../assets/imgs/nav_icon_search.png) no-repeat;
    background-size: 40px;
    position: absolute;
    right: 30px;

}
.search-history{
   
}
.search-history h3{
    font-size: 32px;
    color: #666;
     display: flex;
    align-items: center;
    margin: 40px 0;
     padding: 0 30px;
     position: relative;
}
.search-history h3 span{
    font-size: 28px;
    color: #999;
     display: flex;
    align-items: center;
    position: absolute;
    right: 30px;
}
.search-history h3 img{
    margin-right: 12px;
    width: 38px;
    height: 40px;;
}
.search-history p{
    position: relative;
    height:100px;
    display: flex;
    align-items: center;
    font-size:28px;
    color: #666;
     padding: 0 30px;
    background-color: #fff;
    border-bottom: 1px solid #e0e0e0;
}
.search-history p img{
    position: absolute;
    right: 30px;
    width: 32px;
    height: 32px;
}

</style>
