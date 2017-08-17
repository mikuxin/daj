/**
 * Created by YIXIN on 2017/6/21.
 */
function getStyle(element, attr) {
  if (window.getComputedStyle) {
    return window.getComputedStyle(element, null)[attr];
  } else {
    return element.currentStyle[attr];
  }
}


function my_animate(element, obj, fn) {
  clearInterval(element.timer);
  element.timer = setInterval(function () {
    var flag = true;
    for (var k in obj) {
      var attr = k;
      var target = obj[k];
      
      //对opacity做特殊处理即可
      //1. parseInt改成parseFloat (获取到的透明度是个小数)
      //2. 把leader和target都放大了1000倍。 算出来的step也是放大了1000倍
      //3. 设置回去的时候，让leader/1000   把px给去掉了
      if (attr == "opacity") {
        var leader = getStyle(element, attr);
        leader = parseFloat(leader) || 0;
        
        leader = leader * 1000;
        target = target * 1000;
        
        var step = (target - leader) / 100;
        //step肯定是一个很小的数，Math.ceil就会向上取整，直接会变成1
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader += step;
        element.style[attr] = leader/1000;
        if (leader != target) {
          flag = false;
        }
        
      }else if(attr == "zIndex"){
        //层级不需要动画，直接设置即可。
        element.style.zIndex = target;
      } else {
        var leader = getStyle(element, attr);
        leader = parseInt(leader) || 0;
        var step = (target - leader) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        leader += step;
        element.style[attr] = leader + "px";
        if (leader != target) {
          flag = false;
        }
      }
    }
    if (flag) {
      clearInterval(element.timer);
      fn && fn();
    }
  }, 1);
}


