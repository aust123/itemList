let str = '纸元仓库出库成功'
let n = '纸元仓库'
if(str.includes(n)){
    str = str.replace(n,'');
   console.log(str.replace(n,''));
   console.log(str)   
}