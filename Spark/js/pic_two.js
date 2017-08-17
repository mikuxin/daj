/**
 * Created by admin on 2017/6/23.
 */
$(function() {
  $(".mask-list").children().mouseenter(function() {
    $(".videos").css("z-index", "9");
    $(".videos").children().eq($(this).index()).css("opacity","1");
//            $(".videos").children().eq($(this).index()).play();
    
  });
  $(".mask-list").children().mouseleave(function() {
    
    $(".videos").children().eq($(this).index()).css("opacity","0");
    $(".videos").css("z-index", "1");
    
  });
  $(".mask-list").mouseleave(function() {
    $(".videos").css("z-index", "1");
    
    
  });
  
  
});