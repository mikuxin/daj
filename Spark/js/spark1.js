/**
 * Created by admin on 2017/6/21.
 */

//配置单，存放了5个位置
var datas= [
  // {
  //   "width": 400,
  //   "top": 20,
  //   "left": 50,
  //   "opacity": 0.2,
  //   "zIndex": 2
  // },
  // {
  //   "width": 500,
  //   "top": 70,
  //   "left": 0,
  //   "opacity": 0.8,
  //   "zIndex": 3
  // },
  //
  // {
  //   "width": 600,
  //   "top": 100,
  //   "left": 250,
  //   "opacity": 1,
  //   "zIndex":5
  // },
  //
  // {
  //   "width": 500,
  //   "top": 70,
  //   "left": 600,
  //   "opacity": 0.8,
  //   "zIndex": 3
  // },
  //
  // {
  //   "width": 400,
  //   "top": 20,
  //   "left": 650,
  //   "opacity": 0.2,
  //   "zIndex": 2
  // }
  {
    "width": 400,
    "top": 100,
    "left": 100,
    "opacity": 0.2,
    "zIndex": 2
  },
  {
    "width": 500,
    "top": 50,
    "left": 250,
    "opacity": 0.8,
    "zIndex": 3
  },
  
  {
    "width": 600,
    "top": 0,
    "left": 400,
    "opacity": 1,
    "zIndex":5
  },
  
  {
    "width": 500,
    "top":50,
    "left": 650,
    "opacity": 0.8,
    "zIndex": 3
  },
  
  {
    "width": 400,
    "top": 100,
    "left": 870,
    "opacity": 0.2,
    "zIndex": 2
  }

];

var nbarea=document.getElementById("nbarea");
var lis=nbarea.getElementsByTagName("li");
var arrow=document.getElementById("arrow");
var arrowc_l=document.getElementById("arrowc_l");
var arrowc_r=document.getElementById("arrowc_r");

for(var i=0;i<lis.length;i++){
  animate(lis[i],datas[i]);
}
nbarea.onmouseover=function () {
  animate(arrow,{opacity:1});
}
nbarea.onmouseout=function () {
  animate(arrow,{opacity:0});
}


 arrowc_r.onclick=function () {

datas.unshift(datas.pop());
for(var i=0;i<lis.length;i++){
 animate(lis[i],datas[i]);

  }
 }
arrowc_l.onclick=function () {

    datas.push(datas.shift());
    for(var i=0;i<lis.length;i++){
      animate(lis[i],datas[i]);

    }
  }

