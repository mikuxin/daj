/**
 * Created by yixin on 2017/6/18.
 */
// <!--circulation-->
  $(function () {
    var ul=document.getElementById("uls");
    var lis=ul.children;
// 给li上背景
    for(var i=0;i<lis.length;i++){
      lis[i].style.backgroundImage="url(img/"+(i+1)+".jpg)"
    }
// 给箭头做点击事件
    var $lis=$("#uls>li");
    var $spans=$("#swiper>span")
    var count=0;
    // 左箭头
    $("#icon_l").click(function () {
      count--;
      if(count==-1){
        count=$lis.length-1;
      }
      $lis.eq(count).fadeIn(3000).siblings().fadeOut(2000);
      // 对应的点
      $spans.eq(count).css("background","#737476").siblings().css("background","#d5d5d5")
    })
    // 右箭头点击
    $("#icon_r").click(function () {
      count++;
      if(count==$lis.length){
        count=0
      }
      $lis.eq(count).fadeIn(3000).siblings().fadeOut(2000);
      // 对应小点点
      $spans.eq(count).css("background","#737476").siblings().css("background","#d5d5d5")
    })
    // 小点点点击
    $spans.click(function () {
      count=$(this).index();
      $lis.eq($(this).index()).fadeIn().siblings().fadeOut();
      $spans.eq($(this).index()).css("background","#737476").siblings().css("background","#d5d5d5")
    })
    // 自动播放
    var timer=setInterval(function () {
      $("#icon_r").click();
    },10000);
    // 鼠标移到BOX停止播放
    $(".box").mouseenter(function () {
      clearInterval(timer);
    });
    // 移出盒子继续播放
    $(".box").mouseleave(function () {
      timer=setInterval(function () {
        $("#icon_r").click();
      },10000);
    });
    //立即购买
    $(".l2").mouseenter(function () {
      $(this).css("background","#ffffff").css("color","#44a8f2")
    })
    $(".l2").mouseleave(function () {
      $(this).css("background","#44a8f2").css("color","#ffffff")
    }
  )
  })
// <!--circulation end-->