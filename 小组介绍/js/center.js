/**
 * Created by yixin on 2017/6/16.
 */
// 手风琴
var box=document.getElementById("imgbox");
var lis=box.getElementsByTagName("li");
// 给title和content加背景和left
for(var i = 0; i<lis.length; i++){
if(i==0){
    lis[i].style.left=0;
}else {
    lis[i].style.left=i*200+"px"
}
    lis[i].children[0].style.background="url(img/zp"+(i+1)+".png) no-repeat center";
    lis[i].children[1].style.backgroundImage="url(img/concert1.png)";
    // 加索引 手风琴
    lis[i].index=i;
    // 给lis[i]加点击事件
    lis[i].children[0].onclick=function () {
        for(var i=0;i<lis.length;i++){
            if(i<=this.parentNode.index){
              lis[i].getElementsByTagName("span")[0].style.display="block"
                animate(lis[i],{left:0});
            }else{
              // 手风琴展开动画
              $(".introduce").hide();
              $(".photo").hide();
                animate(lis[i],{left:1200},function () {
                  $(".introduce").slideDown(500);
                  $(".photo").fadeIn(2000);
                })
            }
        }
    };
    // 添加返回按钮
    var closeBtn=document.createElement("span");
    lis[i].appendChild(closeBtn);
    closeBtn.innerHTML="返回";
    //给关闭按钮注册点击事件
    //点击关闭, 所有li会缓慢还原到初始位置
    closeBtn.onclick=function () {
        for(var i=0;i<lis.length;i++){
            animate(lis[i],{left:i*200});
          lis[i].getElementsByTagName("span")[0].style.display="none"
        }
    }
}

// 会员登录
// var vip=document.getElementById("vip");
// var vip_login=document.getElementById("vip_login");
var vip=document.getElementById("vip");
var text1=document.getElementById("text1");
var pass=document.getElementById("pass");
var text_cen=document.getElementById("text_cen");
var pass_cen=document.getElementById("pass_cen");
// 账号验证
text1.onblur=function () {
  var count=text1.value
  if(/^[\u4e00-\u9fa5]{2,4}$/.test(count)){
    text_cen.innerText="用户名正确"
    text_cen.style.color="green"
    vip.children[0].innerHTML=count;
  }else{
    text_cen.innerText="用户名不合法"
    text_cen.style.color="red"
    vip.children[0].innerHTML="会员登录"
  }
}
pass.onblur=function () {
  var word=pass.value
  if(/^[1-9]\d{5,15}$/.test(word)){
    pass_cen.innerText="密码正确"
    pass_cen.style.color="green"
  }else{
    pass_cen.innerText="密码不合法"
    pass_cen.style.color="red"
  }
}

//动画预备
var ul=document.getElementById("ulbox");
var lis=ul.children;
var box_btn=document.getElementById("box_btn");
for(var i=0;i<lis.length;i++){
  if(i%2==0){
    lis[i].style.top="300px";
  }else{
    lis[i].style.bottom="300px";
  }
}
// 动画效果
box_btn.onclick=function () {
  for(var i=0;i<lis.length;i++){
    if(i%2==0){
      animate(lis[i],{top:0})
      lis[i].style.display="block"
    }else{
      animate(lis[i],{bottom:0})
      lis[i].style.display="block"
    }
    $("#box_btn").fadeOut();
  }
}
// 自动旋转
var deg=1;
setInterval(function () {
    deg++
    box_btn.style.transform="rotate("+deg+"deg)";
  },15)
// 会员登录/和其他动画
$(function () {
  $("#vip").click(function () {
    $("#vip_login").fadeIn(1000);
  });
  $("#off").click(function (e) {
    e.stopPropagation();
    $("#vip_login").fadeOut(1000)
  })
  $("#btn").click(function (e) {
    e.stopPropagation();
    $("#vip_login").slideUp(1000);
  })
  // divs边框显示
  $(".title").mouseenter(function () {
    $(this).children("div").stop().fadeIn(1000)
  })
  $(".title").mouseleave(function () {
    $(this).children("div").stop().fadeOut(1000);
  })
})


