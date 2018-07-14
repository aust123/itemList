let str = '纸元仓库出库成功'
let n = '纸元仓库'
if (str.includes(n)) {
  str = str.replace(n, '');
  console.log(str.replace(n, ''));
  console.log(str)
}

let arr = [{
  aa: 1,
  bb: 'name'
},
{
    aa: "2",
    bb: 'name'
  },
  {
    aa: "3",
    bb: 'name'
  }]
let c = 0;
  arr.forEach((item,index)=>{
    c += parseInt(item['aa'])
  })

  console.log(c)