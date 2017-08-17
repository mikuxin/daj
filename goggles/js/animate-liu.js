/**
 * Created by LiuZG on 2017/6/16 0016.
 */
/**
 * 获取任意元素的任意样式
 * @param element
 * @param attr
 * @returns {*} 返回字符串, 带单位(例如px), 特例:例如left不设置值默认auto
 */
function getStyle(element, attr) {
  if (window.getComputedStyle) {
    return window.getComputedStyle(element, null)[attr];
  } else {
    return element.currentStyle[attr];
  }
}

/**
 * 缓动动画
 * @param element 任意元素
 * @param obj 样式属性和属性值组成的键值对 对象
 * @param fn 回调函数, 可以在里面再写animate
 */
function slowAnimate(element, obj, fn) {
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
        
        var step = (target - leader) / 20;
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
  }, 15);
}


/**
 * 匀速动画函数
 * @param element  给谁加动画
 * @param target  移动的终点
 * @param num   速度(动画从开始到结束每次移动多少)
 */
function stableAnimate(element, target, num) {
  //给num设置默认值
  num = num || 50;
  
  clearInterval(element.timer);
  element.timer = setInterval(function () {
    var leader = element.offsetLeft;//当前的left值, 是数值类型
    var step = target > leader ? num : -num;//每一步走多少
    
    if(Math.abs(leader - target) >= Math.abs(step)) {//只要当前left值和终点间距大于走一步的距离,就让当前left再走一步
      leader += step;
      element.style.left = leader + "px";
    }else {  //直到当前left和重点间距小于一步距离,就清除定时器,剩下一点直接抱过去
      clearInterval(element.timer);
      element.style.left = target + "px";
    }
    
  }, 15);
}

