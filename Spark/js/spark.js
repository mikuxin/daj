/**
 * Created by admin on 2017/6/21.
 */
// (function () {
//   var pull = document.getElementById("pull");
//   var boss = document.getElementById("boss");
//   var touchup = document.getElementById("touchup");
//
//   touchup.onclick = function () {
//     boss.style.display = "none"
//   }
//   pull.onclick = function () {
//     boss.style.display = "block"
//     carone();
//     cartwo();
//
//   }
// })();
//
//
// function carone() {
//   var carousela_r = document.getElementById("carousela_r");
//   var slider_one = document.getElementById("slider_one");
//   var pointa = document.getElementById("pointa");
//   var ula = document.getElementById("geta");
//   var lis = ula.children;
//   var imgUl = document.getElementById("oneul_a");
//   var imgsa = imgUl.children;
//   var imgWidth = carousela_r.offsetWidth
//   var usenaturel = document.getElementById("usenaturel");
//   var usenaturer = document.getElementById("usenaturer");
//   // 小圆圈的轮播
//   for (var i = 0; i < lis.length; i++) {
//     lis[i].index = i
//     lis[i].onclick = function () {
//       for (var i = 0; i < lis.length; i++) {
//         lis[i].style.backgroundColor = "#ccc";
//       }
//       this.style.backgroundColor = "#8c8c8c";
//       var target = -this.index * imgWidth;
//       animate(imgUl, target, 50);
//     }
//   }
//   var count = 0;
//   var counte = 1;
//   usenaturer.onmouseover = function () {
//
//     animate(imgUl, -counte * imgWidth, 25);
//     for (var i = 0; i < lis.length; i++) {
//       lis[i].style.backgroundColor = "#ccc";
//     }
//     lis[counte].style.backgroundColor = "#8c8c8c";
//   }
//   usenaturel.onmouseover = function () {
//     animate(imgUl, count * imgWidth, 25);
//     lis[counte].style.backgroundColor = "#ccc";
//     lis[count].style.backgroundColor = "#8c8c8c";
//
//   }
//
// }
// // 图片二的轮播
// function cartwo() {
//   // var carouselb_l=document.getElementById("carouselb_l");
//   var pointb = document.getElementById("pointb");
//   var getb = document.getElementById("getb");
//   var lis = getb.children;
//   var slider_two = document.getElementById("slider_two");
//   var imgWidth = slider_two.offsetWidth;
//   var ulb = document.getElementById("ulb");
//   var imgs = ulb.children
//   var usernaturebl = document.getElementById("usernaturebl");
//   var usernaturebr = document.getElementById("usernaturebr");
//   for (var i = 0; i < lis.length; i++) {
//     lis[i].index = i
//     lis[i].onclick = function () {
//       for (var i = 0; i < lis.length; i++) {
//         lis[i].style.backgroundColor = "#ccc";
//       }
//       this.style.backgroundColor = "#8c8c8c";
//       var target = -this.index * imgWidth;
//       animate(ulb, target, 50);
//     }
//   }
//   var count = 0;
//   var counta = 1;
//   usernaturebr.onmouseover = function () {
//     animate(ulb, -counta * imgWidth, 50);
//     for (var i = 0; i < lis.length; i++) {
//       lis[i].style.backgroundColor = "#ccc";
//     }
//     lis[counta].style.backgroundColor = "#8c8c8c";
//   }
//   usernaturebl.onmouseover = function () {
//     animate(ulb, count * imgWidth, 50);
//     for (var i = 0; i < lis.length; i++) {
//       lis[i].style.backgroundColor = "#ccc";
//     }
//     lis[count].style.backgroundColor = "#8c8c8c";
//   }
//
// };
// 让boss显示


// (function () {
//   var boss = document.getElementById("boss");
//   var touchup = document.getElementById("touchup");
//   window.onscroll = function (e) {
//     e = e || window.event
//     var y = e.clientY
//     touchup.style.position="fixed"
//     // touchup.style.top = y + "px";
//
//   }
//
//   function getScroll() {
//     //如何能够返回多个值
//     return {
//       top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
//       left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
//     };
//   }
//
// })();



