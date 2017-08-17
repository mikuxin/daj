/**
 * Created by admin on 2017/6/23.
 */
/**
 * Created by LiuZG on 2017/6/21 0021.
 */

/**
 * 杞挱鍥� 鍔熻兘灏佽
 * @param carousel 澶栧眰澶х洅瀛� (榧犳爣缁忚繃璋佹椂鏆傚仠鑷姩杞挱)
 * @param imgsUl  杞挱鍥緇i鎵€鍦ㄧ殑li
 * @param imgs    鎵€鏈夊浘鐗囨墍鍦ㄧ殑li
 * @param points  鎵€鏈夊皬鍦嗙偣鍦ㄧ殑li
 * @param imgWidth  涓€寮犲浘鐗�(li)鐨勫搴�
 * @param arrowR  鍙崇澶�
 * @param arrowL  宸︾澶�
 * @param now     灏忓渾鐐归珮浜殑绫诲悕
 * @param speed {number}  鑷姩杞挱鐨勯€熷害(ms)
 * @param carouselBox  榧犳爣缁忚繃璋佹椂鏆傚仠鑷姩杞挱
 */
function carouselGoggle(carousel, imgsUl, imgs, points, imgWidth, arrowR, arrowL, now, speed) {
  //璁板綍鐐瑰嚮宸﹀彸绠ご鏃剁殑褰撳墠鍥剧墖绱㈠紩
  var count = 0;
  //瀹氭椂鍣�
  var timer = null;
  
  //璁剧疆鑺傛祦闃€
  var lock = true;
  
  //澶嶅埗绗竴涓猯i鍒版渶鍚庝綔涓哄亣鐨刲i - 鏃犵紳婊氬姩
  imgsUl.appendChild(imgs[0].cloneNode(true));
  
  //缁欐瘡涓皬鍦嗙偣娉ㄥ唽鐐瑰嚮浜嬩欢
  for (var i = 0; i < points.length; i++) {
    //瀛樹笅鏍�
    points[i].index = i;
    points[i].onclick = function () {
      //楂樹寒褰撳墠灏忓渾鐐�
      for (var i = 0; i < points.length; i++) {
        points[i].classList.remove(now);
      }
      this.classList.add(now);
      //鍚屾灏忓渾鐐�
      if (count == imgs.length - 1) {
        count = 0;
        imgsUl.style.left = 0;
      }
      count = this.index;
      //绉诲姩imgsUl
      slowAnimate(imgsUl, {"left": -this.index * imgWidth});
    }
  }
  
  //缁欏彸绠ご娉ㄥ唽鐐瑰嚮浜嬩欢
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
    
    //鍚屾灏忓渾鐐�
    for (var i = 0; i < points.length; i++) {
      points[i].classList.remove(now);
    }
    if (count == imgs.length - 1) {
      points[0].classList.add(now);
    }else {
      points[count].classList.add(now);
    }
  }
  
  //缁欏乏绠ご娉ㄥ唽鐨勭偣鍑讳簨浠�
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
    
    //鍚屾灏忓渾鐐�
    for (var i = 0; i < points.length; i++) {
      points[i].classList.remove(now);
    }
    points[count].classList.add(now);
    
  }
  
  //鑷姩杞挱鍔熻兘
  timer = setInterval(function () {
    arrowR.onclick();
  }, speed);
  //缁檆arousel娉ㄥ唽榧犳爣缁忚繃浜嬩欢,缁忚繃鏃舵竻绌哄畾鏃跺櫒
  carousel.onmouseover = function () {
    clearInterval(timer);
  }
  //缁檆arousel娉ㄥ唽榧犳爣绂诲紑浜嬩欢,绂诲紑鏃剁户缁嚜鍔ㄨ疆鎾�
  carousel.onmouseout = function () {
    timer = setInterval(function () {
      arrowR.onclick();
    }, speed);
  }
}

/*banner video 寮瑰嚭鎾斁鍔熻兘*/
(function () {
  var $videoWindow = $(".video-window");
  $(".video>a").click(function (e) {
    //闃绘浜嬩欢鍐掓场
    e.stopPropagation();
    //寮瑰嚭videoWindow骞舵坊鍔犲唴瀹�
    $videoWindow.html('<video autoplay loop style="width: 100%;">'+
      '<source src="video/1080.mp4" type="video/mp4" />'+
      '</video>').fadeIn(1500);
    //缁欐暣涓祻瑙堝櫒鍙鍖烘坊鍔犻伄缃╁眰
    $(".video-mask").fadeIn(1500);
  });
  $videoWindow.click(function (e) {
    //闃绘浜嬩欢鍐掓场
    e.stopPropagation();
  });
  //鐐瑰嚮video涔嬪鐨勫湴鏂�,娓呯┖寮瑰嚭妗嗗苟闅愯棌
  $(document).click(function () {
    $videoWindow.fadeOut(500, function () {
      $videoWindow.html("");
    });
    $(".video-mask").fadeOut(1500);
  });
})();


/*sub-nav*/
//瀛愬鑸浐瀹氬姛鑳� 鍜� 鍥炲埌椤堕儴鍔熻兘
(function () {
  var $subNav = $(".sub-nav");
  var $banner = $(".banner");
  var $goTop = $(".go-top");
  var timer = null;
  var step = 0;
  //缁檞idow娉ㄥ唽婊氬姩浜嬩欢
  $(window).scroll(function () {
    //鑾峰彇琚粴鍘荤殑top鍊�
    var winScrollTop = $(window).scrollTop();
    //鑾峰彇瀛愬鑸鏂囨。椤堕儴鐨勮窛绂�
    var offsetTop = $banner.offset().top + $banner.height();
    if (winScrollTop >= offsetTop) {
      $subNav.addClass("subNavScroll");
      $subNav.css("zIndex", 10);
      $(".product-intro").css("marginTop", "60px");
      //鏄剧ず鍥炲埌椤堕儴鐨勯摼鎺�
      $goTop.show();
    } else {
      $subNav.removeClass("subNavScroll");
      $(".product-intro").css("marginTop", 0);
      //闅愯棌鍥炲埌椤堕儴鐨勯摼鎺�
      $goTop.hide();
    }
  });
  //鍥炲埌椤甸潰椤堕儴鍔熻兘
  $goTop.click(function () {
    //姣忔鐐瑰嚮鍏堟竻绌轰笂涓€娆＄偣鍑诲紑鐨勫畾鏃跺櫒
    clearInterval(timer);
    step = 50;
    timer = setInterval(function () {
      //姣忛殧涓€娈垫椂闂磋婊氳疆鑷姩寰€涓婃粴,鏈€缁堝洖鍒伴〉闈㈤《閮�
      var winScrollTop = $(window).scrollTop();
      // step = step + 10;
      step = winScrollTop / 20;
      
      //鐩戝惉榧犳爣婊氳疆,涓€鏃﹂紶鏍囨粴鍔�,娓呯┖瀹氭椂鍣�
      $(window).on('mousewheel', function(){
        clearInterval(timer);
      });
      
      if ($(window).scrollTop() > 0) {
        //鍒ゆ柇娌″埌椤跺氨缁х画婊�
        $(window).scrollTop(winScrollTop - step);
      } else {
        //鍒伴《灏辨竻绌哄畾鏃跺櫒
        clearInterval(timer);
      }
    }, 15);
  });
})();


/*carousel*/
//椤甸潰绗竴涓疆鎾浘
(function () {
  //鏁翠釜carousel
  var carousel = document.getElementsByClassName("carousel")[0];
  //涓€涓猯i鐨勫搴�
  var imgWidth = carousel.offsetWidth;
  //鎵€鏈塴i
  var imgsUl = carousel.children[0];
  var imgs = imgsUl.children;
  //灏忓渾鐐�
  var pointsUl = document.getElementsByClassName("carousel-points")[0];
  var points = pointsUl.children;
  //宸﹀彸绠ご
  var carouselArrow = document.getElementsByClassName("carousel-arrow")[0];
  var arrowL = carouselArrow.children[0];
  var arrowR = carouselArrow.children[1];
  
  carouselGoggle(carousel, imgsUl, imgs, points, imgWidth, arrowR, arrowL, "now", 2500);
  
})();

/*panorama*/
// 浣撴劅鎺у埗 - 鎷栨嫿绉诲姩鑳屾櫙鍥剧墖, 榧犳爣寮硅捣1.5s鍚庢仮澶嶅師浣�
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
//椤甸潰绗簩涓疆鎾浘
(function () {
  //鏈€澶栧眰澶х洅瀛�
  var carouselBox = document.getElementsByClassName("carousel-control")[0];
  //鏁翠釜carousel
  var carousel = document.getElementsByClassName("control")[0];
  //涓€涓猯i鐨勫搴�
  var imgWidth = carousel.offsetWidth;
  //鎵€鏈塴i
  var imgsUl = carousel.children[0];
  var imgs = imgsUl.children;
  //灏忓渾鐐�
  var pointsUl = document.getElementsByClassName("control-points")[0];
  var points = pointsUl.children;
  //宸﹀彸绠ご
  var carouselArrow = document.getElementsByClassName("control-arrow")[0];
  var arrowL = carouselArrow.children[0];
  var arrowR = carouselArrow.children[1];
  
  carouselGoggle(carouselBox, imgsUl, imgs, points, imgWidth, arrowR, arrowL, "now", 2500);
  
})();