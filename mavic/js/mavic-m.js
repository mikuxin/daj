/**
 * Created by dell on 2017/6/21.
 */




//main-middle部分的图片
  $(function () {
    $(".cont").mouseenter(function () {
      // alert("hehe ")
      $(".cont-p p").animate({opacity:1},1000)
      
    });
    
  });
  
  

// 产品图片介绍
(function () {
  var index=0;
  $(".intr-list>li").on("mouseenter",function () {
    //进来就排他
    $(".intr-list li div").removeClass("list-line");
    $(".intr-list li a").css("color", "#bbbbb9");
    
    var idx = $(this).index();
    $(".intr-bg>ul>li:eq(" + idx + ")").stop().show().siblings().stop().hide();
    $(".video>div").eq(idx).stop().fadeIn(500).siblings().stop().fadeOut(0);
    
    $(this).children("div").addClass("list-line");
    $(this).children("a").css("color", "#fff");
    
    //全局变量记录下标
    index=$(this).index();
        
  })
  
  
  
  
  //鼠标离开整个ul就可以
  $(".intr-list").mouseleave(function () {
    //进来就排他
    $(".intr-list li div").removeClass("list-line");
    $(".intr-list li a").css("color", "#bbbbb9");
    
    //把全局变量中存的下标对应的li里面的div和a高亮
    $(".intr-list li div").eq(index).addClass("list-line");
    $(".intr-list li a").eq(index).css("color", "#fff");
    
  })
  
})();


// 轮播图
(function () {
  //1.找外面的盒子
  //2.找图片
  //3.找箭头
  //4.找小圆点
  
  var box=document.getElementsByClassName("imgBox")[0];
  
  var imgul=document.getElementsByClassName("imgul")[0];
  var lis=imgul.children;
  
  var arrow=document.getElementById("arrow-m");
  var leftArr=arrow.children[0];
  var rightArr=arrow.children[1];
  
  var dotul=document.getElementsByClassName("dot")[0];
  var dots=dotul.children;
  
  //将图片的li的第一个克隆添加到imgul的最后面
  imgul.appendChild(lis[0].cloneNode(true));
  //获取图片宽度,就是box的宽度
  var imgWidth=box.offsetWidth;
  // console.log(imgWidth);
  //2. 简单轮播图的功能
  //2.1 给每个小圆点dots注册点击事件
  //2.2 小圆点排他
  //2.3 移动imgul的left值
  
  for (var i = 0; i < dots.length; i++){
    dots[i].index=i;
    dots[i].onclick=function () {
      
      for (var i = 0; i < dots.length; i++){
          dots[i].classList.remove("xxx");
      }
      this.classList.add("xxx");
      //如果是假图,换成真图片
      if(cont==lis.length-1){
        cont=0;
        imgul.style.left=-cont*imgWidth+"px";
      }
      
      var target=-this.index*imgWidth;
      cont=this.index;
      // imgul.style.left=target+"px";
      animateaa(imgul,target);
      
    }
      
  }
  
  //3. 左右焦点的功能（无缝）
  //3.1 点击右箭头
  //3.2 点击左箭头
  var cont=0;
  rightArr.onclick=function () {
    //如果是假图片的时候，换成真图片
    //改变imgul的left值
    //当图片走到最后一张时,换真图
    if(cont==lis.length-1){
      cont=0;
      imgul.style.left="0px";
    }
    cont++;
    animateaa(imgul,-cont*imgWidth);
    
    //小圆点同步
    for (var i = 0; i < dots.length; i++){
      dots[i].classList.remove("xxx")
    }
    if(cont==lis.length-1){
      dots[0].classList.add("xxx");
    }else {
      dots[cont].classList.add("xxx");
    }
    
    
  }
  leftArr.onclick=function () {
    if(cont==0){
      cont=lis.length-1;
      imgul.style.left=-cont*imgWidth+"px";
    }
    cont--;
    animateaa(imgul,-cont*imgWidth);
    for (var i = 0; i < dots.length; i++){
      dots[i].classList.remove("xxx")
    }
    dots[cont].classList.add("xxx");
  }
  
  
  //4. 自动轮播功能
  var timeId=setInterval(function () {
    rightArr.onclick();
    
  },3000);
  box.onmouseover=function () {
    clearInterval(timeId);
    
  }
  
  box.onmouseout=function () {
    timeId=setInterval(function () {
      rightArr.onclick();
    },3000);
    
  }
  
  
})();


//360旋转
(function () {
  window.onload=function () {
    var x=0; //用来记录上一次的鼠标距离， 保证图片左右转动的连续性
    var imgoo=document.getElementById("imgoo");
    var box=document.getElementsByClassName("bigbox")[0];
    box.onmousedown=function (e) {
      //鼠标按下的时候记录鼠标位置
      var e=e||event;
      var disx=e.clientX-x;
//      console.log(e.clientX);
//      console.log(disx);
      box.onmousemove=function (e) {
        var e=e||event;
        //鼠标移动时，计算鼠标移动的距离
        x=e.clientX-disx;
        var l=parseInt(-x/15);
        //鼠标移动太快，所以除以15再取整
        //鼠标向左移动的时候，是负值，所以这里要用负值
        //向左是0-71.jpg
        //向右是71-0
       //console.log(l);
        if(l>0){//向左
          l=l%72;
//          console.log(l);
        }else {//向右
          l=(l+-72*(Math.floor(l/72)));
          //console.log(Math.floor(-73/72));  //-2
          //console.log(l);
          //console.log(x);
        }
        imgoo.src="imgs/xz0_"+l+".png"
        return false;
        
      };
      document.onmouseup=function () {
        //document.onmouseup=null;
        box.onmousemove=null;
    
      }
      return false;
    }
    
    
  }
  
  
})();

























/*(function () {
 var intrList = document.getElementsByClassName("intr-list")[0];
 var intrBg = document.getElementsByClassName("intr-bg")[0];
 var imgul = intrBg.children;
 var list = intrList.children;
 // var imgWidth=intrBg.offsetWidth;
 
 for (var i = 0; i < list.length; i++) {
 list[i].index = i;
 list[i].onmouseenter = function () {
 for (var i = 0; i < list.length; i++) {
 list[i].children[1].className = "";
 list[i].children[0].style.color = "#A3A89C";
 }
 this.children[1].className = "list-line";
 this.children[0].style.color = "#fff";
 }
 }
 
 })();*/
