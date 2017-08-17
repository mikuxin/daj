/**
 * Created by admin on 2017/6/22.
 */


$(function () {
  $("#pull").click(function () {
    $("#boss").show();
    $(window).scroll(function () {
      // console.log($(window).scrollTop());
      // console.log($("#touchup").offset().top);
      if($(window).scrollTop()>=$("#touchup").offset().top){
        $("#touchup").css({position:"fixed",
          top: 60,
          left:"50%"
        })
      }
      if($(window).scrollTop()>2800){
        $("#touchup").hide();
      }
      if($(window).scrollTop()<=2800){
        $("#touchup").show();
      }
      if($(window).scrollTop()<=1900){
        $("#touchup").css({position:"absolute",
                           top:0,
                           left:"50%"})
      }
    })
  });
  $("#touchup").click(function () {
    $("#boss").hide();
  });
  var $lis = $("#oneul_a li");
  var index = 0;
  var $pointa = $("#geta li");
  var count=0;
  var $jis=$("#ulb li");
  
  $("#usenaturer").mouseenter(function () {
    if (index==1){
      index=0
    }
    index++;
    $lis.eq(index).fadeIn().siblings().fadeOut();
    $pointa.eq(1).css("backgroundColor", "#8c8c8c").siblings().css("backgroundColor", "#ccc");
  });
  $("#usenaturel").mouseenter(function () {
    if(index==0){
      index=1
    }
    index--;
    $lis.eq(index).fadeIn().siblings().fadeOut();
    $pointa.eq(0).css("backgroundColor", "#8c8c8c").siblings().css("backgroundColor", "#ccc");
  });
  $pointa.eq(1).click(function () {
    if(count==1){
      count=0
    }
    count++;
    $lis.eq(count).fadeIn().siblings().fadeOut();
    $(this).css("backgroundColor", "#8c8c8c").siblings().css("backgroundColor", "#ccc");
  });
  $pointa.eq(0).click(function () {
    if(count==0){
      count=1
    }
    count--;
    $lis.eq(count).fadeIn().siblings().fadeOut();
    $(this).css("backgroundColor", "#8c8c8c").siblings().css("backgroundColor", "#ccc");
  });
  var index1=0;
  $("#usernaturebr").mouseenter(function () {
    
    if (index1==1){
      index1=0;
    }
    index1++;
    $jis.eq(index1).fadeIn().siblings().fadeOut();
    $pointb.eq(1).css("backgroundColor", "#8c8c8c").siblings().css("backgroundColor", "#ccc");
  });
  $("#usernaturebl").mouseenter(function () {
    if(index1==0){
      index1=1;
    }
    index1--;
    $jis.eq(index1).fadeIn().siblings().fadeOut();
    $pointb.eq(0).css("backgroundColor", "#8c8c8c").siblings().css("backgroundColor", "#ccc");
  });
  var $pointb=$("#getb li");
  $pointb.eq(1).click(function () {
    if(count==1){
      count=0
    }
    count++;
    $jis.eq(count).fadeIn().siblings().fadeOut();
    $(this).css("backgroundColor", "#8c8c8c").siblings().css("backgroundColor", "#ccc");
  });
  $pointb.eq(0).click(function () {
    if(count==0){
      count=1
    }
    count--;
    $jis.eq(count).fadeIn().siblings().fadeOut();
    $(this).css("backgroundColor", "#8c8c8c").siblings().css("backgroundColor", "#ccc");
  });
  
  var $nav_one = $(".nav_one");
  var $one_pic = $(".one_pic");
  var $goTop = $(".go-top");
  var timer = null;
  var step = 0;
  $(window).scroll(function () {
    var winScrollTop = $(window).scrollTop();
    var offsetTop = $one_pic.offset().top + $one_pic.height();
    if (winScrollTop >= offsetTop) {
      $nav_one.addClass("subNavScroll");
      $nav_one.css("zIndex", 10);
      
      $(".two_pic").css("marginTop", "60px");
      $goTop.show();
    } else {
      $nav_one.removeClass("subNavScroll");
      $(".two_pic").css("marginTop", 0);
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
  
  
})