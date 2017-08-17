/**
 * Created by HUCC on 2017/6/13.
 */
function animate(element, target) {
  clearInterval(element.timer);
  element.timer = setInterval(function () {
    var leader = element.offsetLeft;//盒子的当前位置left
    var step = target > leader ? 10 : -10;
    
    //到达终点的距离如果大于一步的距离，可以跑，否则，清除定时器，
    if(Math.abs(leader - target) >= Math.abs(step)) {
      leader += step;
      element.style.left = leader + "px";
    }else {
      clearInterval(element.timer);
      element.style.left = target + "px";
    }
    
  }, 15);
}