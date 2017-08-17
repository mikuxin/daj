/**
 * Created by LiuZG on 2017/6/21 0021.
 */

/**
 * 轮播图 功能封装
 * @param carousel 外层大盒子 (鼠标经过谁时暂停自动轮播)
 * @param imgsUl  轮播图li所在的li
 * @param imgs    所有图片所在的li
 * @param points  所有小圆点在的li
 * @param imgWidth  一张图片(li)的宽度
 * @param arrowR  右箭头
 * @param arrowL  左箭头
 * @param now     小圆点高亮的类名
 * @param speed {number}  自动轮播的速度(ms)
 * @param carouselBox  鼠标经过谁时暂停自动轮播
 */
function carouselGoggle(carousel, imgsUl, imgs, points, imgWidth, arrowR, arrowL, now, speed) {
  //记录点击左右箭头时的当前图片索引
  var count = 0;
  //定时器
  var timer = null;
  
  //设置节流阀
  var lock = true;
  
  //复制第一个li到最后作为假的li - 无缝滚动
  imgsUl.appendChild(imgs[0].cloneNode(true));
  
  //给每个小圆点注册点击事件
  for (var i = 0; i < points.length; i++) {
    //存下标
    points[i].index = i;
    points[i].onclick = function () {
      //高亮当前小圆点
      for (var i = 0; i < points.length; i++) {
        points[i].classList.remove(now);
      }
      this.classList.add(now);
      //同步小圆点
      if (count == imgs.length - 1) {
        count = 0;
        imgsUl.style.left = 0;
      }
      count = this.index;
      //移动imgsUl
      slowAnimate(imgsUl, {"left": -this.index * imgWidth});
    }
  }
  
  //给右箭头注册点击事件
  arrowR.onclick = function () {
    
    if (lock) {
      lock = false;
      if (count == imgs.length - 1) {
        count = 0;
        imgsUl.style.left = 0;
      }
      count++;
      slowAnimate(imgsUl, {"left": -count * imgWidth}, function () {
        lock = true;
      });
    }
    
    //同步小圆点
    for (var i = 0; i < points.length; i++) {
      points[i].classList.remove(now);
    }
    if (count == imgs.length - 1) {
      points[0].classList.add(now);
    }else {
      points[count].classList.add(now);
    }
  }
  
  //给左箭头注册的点击事件
  arrowL.onclick = function () {
    
    if (lock) {
      lock = false;
      if (count == 0) {
        count = imgs.length - 1;
        imgsUl.style.left = -count * imgWidth + "px";
      }
      count--;
      slowAnimate(imgsUl, {"left": -count * imgWidth}, function () {
        lock = true;
      });
    }
    
    //同步小圆点
    for (var i = 0; i < points.length; i++) {
      points[i].classList.remove(now);
    }
    points[count].classList.add(now);
    
  }
  
  //自动轮播功能
  timer = setInterval(function () {
    arrowR.onclick();
  }, speed);
  //给carousel注册鼠标经过事件,经过时清空定时器
  carousel.onmouseover = function () {
    clearInterval(timer);
  }
  //给carousel注册鼠标离开事件,离开时继续自动轮播
  carousel.onmouseout = function () {
    timer = setInterval(function () {
      arrowR.onclick();
    }, speed);
  }
}

/*banner video 弹出播放功能*/
(function () {
  var $videoWindow = $(".video-window");
  $(".video>a").click(function (e) {
    //阻止事件冒泡
    e.stopPropagation();
    //弹出videoWindow并添加内容
    $videoWindow.html('<video autoplay loop style="width: 100%;">'+
      '<source src="video/1080.mp4" type="video/mp4" />'+
      '</video>').fadeIn(1500);
    //给整个浏览器可视区添加遮罩层
    $(".video-mask").fadeIn(1500);
  });
  $videoWindow.click(function (e) {
    //阻止事件冒泡
    e.stopPropagation();
  });
  //点击video之外的地方,清空弹出框并隐藏
  $(document).click(function () {
    $videoWindow.fadeOut(500, function () {
      $videoWindow.html("");
    });
    $(".video-mask").fadeOut(1500);
  });
})();


/*sub-nav*/
//子导航固定功能 和 回到顶部功能
(function () {
  var $subNav = $(".sub-nav");
  var $banner = $(".banner");
  var $goTop = $(".go-top");
  var timer = null;
  var step = 0;
  //给widow注册滚动事件
  $(window).scroll(function () {
    //获取被滚去的top值
    var winScrollTop = $(window).scrollTop();
    //获取子导航离文档顶部的距离
    var offsetTop = $banner.offset().top + $banner.height();
    if (winScrollTop >= offsetTop) {
      $subNav.addClass("subNavScroll");
      $subNav.css("zIndex", 10);
      $(".product-intro").css("marginTop", "60px");
      //显示回到顶部的链接
      $goTop.show();
    } else {
      $subNav.removeClass("subNavScroll");
      $(".product-intro").css("marginTop", 0);
      //隐藏回到顶部的链接
      $goTop.hide();
    }
  });
  //回到页面顶部功能
  $goTop.click(function () {
    //每次点击先清空上一次点击开的定时器
    clearInterval(timer);
    step = 50;
    timer = setInterval(function () {
      //每隔一段时间让滚轮自动往上滚,最终回到页面顶部
      var winScrollTop = $(window).scrollTop();
      // step = step + 10;
      step = winScrollTop / 20;
      
      //监听鼠标滚轮,一旦鼠标滚动,清空定时器
      $(window).on('mousewheel', function(){
        clearInterval(timer);
      });
      
      if ($(window).scrollTop() > 0) {
        //判断没到顶就继续滚
        $(window).scrollTop(winScrollTop - step);
      } else {
        //到顶就清空定时器
        clearInterval(timer);
      }
    }, 15);
  });
})();


/*carousel*/
//页面第一个轮播图
(function () {
  //整个carousel
  var carousel = document.getElementsByClassName("carousel")[0];
  //一个li的宽度
  var imgWidth = carousel.offsetWidth;
  //所有li
  var imgsUl = carousel.children[0];
  var imgs = imgsUl.children;
  //小圆点
  var pointsUl = document.getElementsByClassName("carousel-points")[0];
  var points = pointsUl.children;
  //左右箭头
  var carouselArrow = document.getElementsByClassName("carousel-arrow")[0];
  var arrowL = carouselArrow.children[0];
  var arrowR = carouselArrow.children[1];
  
  carouselGoggle(carousel, imgsUl, imgs, points, imgWidth, arrowR, arrowL, "now", 2500);
  
})();

/*panorama*/
// 体感控制 - 拖拽移动背景图片, 鼠标弹起1.5s后恢复原位
(function () {
  var panorama = document.getElementsByClassName("panorama")[0];
  
  panorama.onmousedown = function (e) {
    $(panorama).stop();
    e = e || window.event;
    e.preventDefault();
    var spaceX = getPage(e).x - panorama.offsetLeft;
    //var spaceY = getPage(e).y - panorama.offsetTop;
    panorama.onmousemove = function (e) {
      $(panorama).stop();
      e = e || window.event;
      e.preventDefault();
      var bgLeft = parseInt(getStyle(panorama, "backgroundPosition"));
      var step = 10;
      var x = getPage(e).x - panorama.offsetLeft;
      //var y = getPage(e).y - panorama.offsetTop;
      if(x < spaceX && bgLeft < -60) {
        panorama.style.backgroundPositionX = bgLeft + step + "px";
      }else if(x > spaceX && bgLeft > -1200){
        panorama.style.backgroundPositionX = bgLeft - step + "px";
      }
    }
  }
  document.onmouseup = function () {
    panorama.onmousemove = null;
    $(panorama).delay(1500).animate({"backgroundPositionX":-596},3000)
  }
  
})();

/*carousel-control*/
//页面第二个轮播图
(function () {
  //最外层大盒子
  var carouselBox = document.getElementsByClassName("carousel-control")[0];
  //整个carousel
  var carousel = document.getElementsByClassName("control")[0];
  //一个li的宽度
  var imgWidth = carousel.offsetWidth;
  //所有li
  var imgsUl = carousel.children[0];
  var imgs = imgsUl.children;
  //小圆点
  var pointsUl = document.getElementsByClassName("control-points")[0];
  var points = pointsUl.children;
  //左右箭头
  var carouselArrow = document.getElementsByClassName("control-arrow")[0];
  var arrowL = carouselArrow.children[0];
  var arrowR = carouselArrow.children[1];
  
  carouselGoggle(carouselBox, imgsUl, imgs, points, imgWidth, arrowR, arrowL, "now", 2500);
  
})();
